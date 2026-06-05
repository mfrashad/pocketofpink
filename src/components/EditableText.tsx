import React, { useEffect, useRef } from 'react';
import Editable from './Editable';
import { useEditMode } from '../utils/editableLayout';
import { useText } from '../utils/editableText';

interface EditableTextProps {
  id: string;
  defaultText: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** When true, wrap in an Editable so the block can be moved/resized/rotated. */
  moveable?: boolean;
}

const BLOCK_TAGS: ReadonlySet<string> = new Set([
  'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'article', 'header', 'footer',
]);

/**
 * Renders editable text content. In ?edit=1 mode the element becomes
 * contentEditable; on blur the new text is saved to localStorage.
 * Block-level tags also get an Editable wrapper so the block can be dragged.
 */
const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultText,
  as: Tag = 'span',
  className,
  moveable,
}) => {
  const editMode = useEditMode();
  const [value, update] = useText(id, defaultText);
  const ref = useRef<HTMLElement | null>(null);

  const tagName = (typeof Tag === 'string' ? Tag : 'span').toLowerCase();
  const isBlock = moveable ?? BLOCK_TAGS.has(tagName);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (document.activeElement === node) return;
    if (node.innerText !== value) {
      node.innerText = value;
    }
  }, [value]);

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    update(e.currentTarget.innerText);
  };

  const editingClasses = editMode
    ? 'outline outline-2 outline-pop-pink/40 outline-offset-4 rounded-sm hover:outline-pop-pink focus:outline-pop-pink focus:bg-pop-cream/60'
    : '';

  const content = (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`${className ?? ''} ${editingClasses}`.trim()}
      contentEditable={editMode || undefined}
      suppressContentEditableWarning
      spellCheck
      onBlur={editMode ? onBlur : undefined}
      data-edit-id={id}
    >
      {value}
    </Tag>
  );

  if (isBlock && editMode) {
    // Block-level text — wrap in Editable so the user can drag/resize the whole block
    return (
      <Editable id={`${id}-pos`} className="relative inline-block w-full" textControls>
        {content}
      </Editable>
    );
  }

  return content;
};

export default EditableText;
