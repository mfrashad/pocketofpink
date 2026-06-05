import React, { useEffect, useRef, useState } from 'react';
import { useEditMode, useLayoutItem, type LayoutItem } from '../utils/editableLayout';

interface EditableProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  rotatable?: boolean;
  /** Show text-block controls (alignment + width) in the overlay. */
  textControls?: boolean;
}

type ResizeStart = {
  startDist: number;
  baseScale: number;
  cx: number;
  cy: number;
};

type DragStart = {
  startX: number;
  startY: number;
  baseX: number;
  baseY: number;
};

type RotateStart = {
  startAngle: number;
  baseRotation: number;
  cx: number;
  cy: number;
};

/**
 * Editable wrapper: in ?edit=1 mode the element can be dragged from anywhere
 * on its body, resized from any of its four corners, and rotated via a handle
 * above the top edge. Changes persist to localStorage and ship out as JSON.
 */
const Editable: React.FC<EditableProps> = ({ id, className, children, rotatable = true, textControls = false }) => {
  const editMode = useEditMode();
  const [item, update] = useLayoutItem(id);
  const ref = useRef<HTMLDivElement>(null);

  const [drag, setDrag] = useState<DragStart | null>(null);
  const [resize, setResize] = useState<ResizeStart | null>(null);
  const [rotate, setRotate] = useState<RotateStart | null>(null);
  const [hovered, setHovered] = useState(false);
  // Layouts in layout.json are tuned for desktop pixels; on small screens those
  // x/y translates push things off canvas, so we skip them below md (768px).
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === 'undefined' ? true : window.innerWidth >= 768
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // On mobile, drop the pixel x/y but keep scale + rotation so the visual still
  // honours the user's design (just without desktop positioning that overflows).
  const tx = isDesktop ? item.x : 0;
  const ty = isDesktop ? item.y : 0;
  const transform = `translate(${tx}px, ${ty}px) scale(${item.scale}) rotate(${item.rotation}deg)`;
  // No `position` override: rely on the wrapper className (or a parent) for positioning.
  // In edit mode every Editable lifts itself above regular content (>= 8000) so clicks
  // always land on it. Relative z still kept via +item.z so layering works between editables.
  const style: React.CSSProperties = {
    transform,
    transformOrigin: 'center center',
    willChange: 'transform',
    zIndex: editMode ? 8000 + item.z : (item.z !== 0 ? item.z : undefined),
    userSelect: editMode ? 'none' : undefined,
    cursor: editMode && !drag && !resize && !rotate ? 'move' : undefined,
    maxWidth: item.width ? `${item.width}px` : undefined,
    textAlign: item.align,
  };

  // Drag move
  useEffect(() => {
    if (!drag) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;
      update({ ...item, x: drag.baseX + dx, y: drag.baseY + dy });
    };
    const onUp = () => setDrag(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [drag, item, update]);

  // Resize from any corner — uniform scale based on distance from center
  useEffect(() => {
    if (!resize) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - resize.cx;
      const dy = e.clientY - resize.cy;
      const newDist = Math.sqrt(dx * dx + dy * dy);
      const ratio = newDist / Math.max(1, resize.startDist);
      const next = Math.max(0.05, resize.baseScale * ratio);
      update({ ...item, scale: next });
    };
    const onUp = () => setResize(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [resize, item, update]);

  // Rotation
  useEffect(() => {
    if (!rotate) return;
    const onMove = (e: MouseEvent) => {
      const angle = (Math.atan2(e.clientY - rotate.cy, e.clientX - rotate.cx) * 180) / Math.PI;
      const delta = angle - rotate.startAngle;
      update({ ...item, rotation: rotate.baseRotation + delta });
    };
    const onUp = () => setRotate(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [rotate, item, update]);

  if (!editMode) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  const startInteraction = (e: React.MouseEvent) => {
    // ignore drags that started on a handle/button
    if ((e.target as HTMLElement).closest('[data-handle]')) return;

    // Ctrl+click → "click through" to whatever editable is under this one.
    // Lets the user reach a stacked asset without rearranging z-order first.
    if (e.ctrlKey) {
      e.preventDefault();
      e.stopPropagation();
      const node = ref.current;
      if (!node) return;
      const prevPe = node.style.pointerEvents;
      node.style.pointerEvents = 'none';
      const underneath = document.elementFromPoint(e.clientX, e.clientY);
      node.style.pointerEvents = prevPe;
      if (underneath && underneath !== node) {
        underneath.dispatchEvent(
          new MouseEvent('mousedown', {
            clientX: e.clientX,
            clientY: e.clientY,
            bubbles: true,
            cancelable: true,
            button: 0,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            metaKey: e.metaKey,
            ctrlKey: false, // strip so the next layer gets a normal interaction
          })
        );
      }
      return;
    }

    e.preventDefault();

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    if (e.shiftKey) {
      // Shift + drag → resize from anywhere
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      setResize({
        startDist: Math.sqrt(dx * dx + dy * dy),
        baseScale: item.scale,
        cx,
        cy,
      });
    } else if (e.altKey || e.metaKey) {
      // Alt/⌘ + drag → rotate from anywhere
      const startAngle = (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
      setRotate({ startAngle, baseRotation: item.rotation, cx, cy });
    } else {
      // plain drag → move
      setDrag({ startX: e.clientX, startY: e.clientY, baseX: item.x, baseY: item.y });
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    if (!editMode) return;
    if ((e.target as HTMLElement).closest('[data-handle]')) return;
    e.preventDefault();
    e.stopPropagation();
    const delta = -e.deltaY / 400;
    update({ ...item, scale: Math.max(0.05, item.scale + delta) });
  };
  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setResize({
      startDist: Math.sqrt(dx * dx + dy * dy),
      baseScale: item.scale,
      cx,
      cy,
    });
  };
  const startRotate = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const startAngle = (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
    setRotate({ startAngle, baseRotation: item.rotation, cx, cy });
  };
  const resetThis = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    update({ x: 0, y: 0, scale: 1, rotation: 0, z: 0 });
  };
  const bringForward = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    update({ ...item, z: item.z + 10 });
  };
  const sendBackward = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    update({ ...item, z: item.z - 10 });
  };

  const cornerCls =
    'pointer-events-auto absolute w-4 h-4 bg-pop-cream border-2 border-pop-pink rounded-sm shadow-sm';

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseDown={startInteraction}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onWheel={onWheel}
    >
      {children}
      {/* edit-mode overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* outline — bright on hover so you can see which one will be selected when stacked */}
        <div
          className={`absolute inset-0 outline outline-2 outline-offset-2 rounded-sm transition-colors duration-100 ${
            hovered ? 'outline-pop-pink' : 'outline-pop-pink/40'
          }`}
        />

        {/* drag handle = top label with z indicator */}
        <div
          data-handle
          className="pointer-events-auto absolute -top-7 left-0 bg-pop-pink text-pop-cream font-sans text-xs uppercase tracking-wider px-2 py-1 rounded-sm cursor-move select-none flex items-center gap-1"
          title="Drag = move · ⇧+drag = resize · ⌥/⌘+drag = rotate · wheel = resize · ⌃+click = pick asset behind"
        >
          ✥ {id}
          <span className="opacity-70 ml-1">z={item.z}</span>
        </div>

        {/* layer + reset buttons (top right) */}
        <div data-handle className="pointer-events-auto absolute -top-7 right-0 flex gap-1">
          <button
            type="button"
            onMouseDown={sendBackward}
            className="bg-pop-cream text-pop-ink border border-pop-ink/30 font-sans text-xs uppercase tracking-wider px-2 py-1 rounded-sm cursor-pointer select-none"
            title="Send backward"
          >
            ↓
          </button>
          <button
            type="button"
            onMouseDown={bringForward}
            className="bg-pop-cream text-pop-ink border border-pop-ink/30 font-sans text-xs uppercase tracking-wider px-2 py-1 rounded-sm cursor-pointer select-none"
            title="Bring forward"
          >
            ↑
          </button>
          <button
            type="button"
            onMouseDown={resetThis}
            className="bg-pop-ink text-pop-cream font-sans text-xs uppercase tracking-wider px-2 py-1 rounded-sm cursor-pointer select-none"
            title="Reset"
          >
            reset
          </button>
        </div>

        {/* 4 corner resize handles */}
        <div
          data-handle
          onMouseDown={startResize}
          className={`${cornerCls} -top-2 -left-2 cursor-nwse-resize`}
          title="Drag to resize"
        />
        <div
          data-handle
          onMouseDown={startResize}
          className={`${cornerCls} -top-2 -right-2 cursor-nesw-resize`}
          title="Drag to resize"
        />
        <div
          data-handle
          onMouseDown={startResize}
          className={`${cornerCls} -bottom-2 -left-2 cursor-nesw-resize`}
          title="Drag to resize"
        />
        <div
          data-handle
          onMouseDown={startResize}
          className={`${cornerCls} -bottom-2 -right-2 cursor-nwse-resize`}
          title="Drag to resize"
        />

        {/* text controls (alignment + width) along the bottom */}
        {textControls && (
          <div data-handle className="pointer-events-auto absolute -bottom-9 left-0 right-0 flex gap-1 justify-center">
            {(['left', 'center', 'right', 'justify'] as const).map((a) => (
              <button
                key={a}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  update({ ...item, align: a });
                }}
                className={`bg-pop-cream text-pop-ink border border-pop-ink/30 font-sans text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm cursor-pointer ${
                  item.align === a ? 'bg-pop-pink text-pop-cream border-pop-pink' : ''
                }`}
                title={`Align ${a}`}
              >
                {a === 'left' && '⇤'}
                {a === 'center' && '↔'}
                {a === 'right' && '⇥'}
                {a === 'justify' && '☰'}
              </button>
            ))}
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                update({ ...item, width: (item.width ?? 600) - 60 });
              }}
              className="bg-pop-cream text-pop-ink border border-pop-ink/30 font-sans text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm cursor-pointer"
              title="Narrower (more wrap)"
            >
              W−
            </button>
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                update({ ...item, width: (item.width ?? 600) + 60 });
              }}
              className="bg-pop-cream text-pop-ink border border-pop-ink/30 font-sans text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm cursor-pointer"
              title="Wider (less wrap)"
            >
              W+
            </button>
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                update({ ...item, width: undefined, align: undefined });
              }}
              className="bg-pop-ink text-pop-cream font-sans text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm cursor-pointer"
              title="Clear width + alignment"
            >
              ×
            </button>
          </div>
        )}

        {/* rotation handle above top center */}
        {rotatable && (
          <>
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-4 bg-pop-pink/80"
            />
            <div
              data-handle
              onMouseDown={startRotate}
              className="pointer-events-auto absolute left-1/2 -translate-x-1/2 -top-12 w-5 h-5 bg-pop-pink border-2 border-pop-cream rounded-full cursor-grab shadow"
              title="Drag to rotate"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Editable;
export type { LayoutItem };
