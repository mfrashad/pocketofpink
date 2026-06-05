import React, { useRef, useEffect, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

interface DrawingCanvasProps {
  width: number;
  height: number;
  backgroundImageUrl?: string;
}

export interface DrawingCanvasRef {
  getImageDataUrl: () => string | undefined;
  clear: () => void;
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FFB6C1', '#000000'];
const SIZES = [2, 5, 10, 20];

const DrawingCanvas = forwardRef<DrawingCanvasRef, DrawingCanvasProps>(({ width, height, backgroundImageUrl }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);

  const drawBackground = useCallback((context: CanvasRenderingContext2D) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    if (backgroundImageUrl) {
      const img = new Image();
      img.crossOrigin = "anonymous"; // This is the fix for the tainted canvas error
      img.src = backgroundImageUrl;
      img.onload = () => {
        context.drawImage(img, 0, 0, width, height);
      };
      img.onerror = () => {
        console.error("Failed to load background image.");
      }
    }
  }, [width, height, backgroundImageUrl]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if(context){
        context.lineCap = 'round';
        context.lineJoin = 'round';
        contextRef.current = context;
        drawBackground(context);
    }
  }, [width, height, drawBackground]);
  
  useEffect(() => {
      const context = contextRef.current;
      if(context){
        context.strokeStyle = color;
        context.lineWidth = size;
      }
  }, [color, size]);

  useImperativeHandle(ref, () => ({
    getImageDataUrl: () => {
        try {
          return canvasRef.current?.toDataURL('image/png');
        } catch (e) {
          console.error("Could not get image data URL:", e);
          return undefined;
        }
    },
    clear: () => {
        const context = contextRef.current;
        if (context) {
            drawBackground(context);
        }
    }
  }));

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const x = ('touches' in nativeEvent ? nativeEvent.touches[0].clientX : nativeEvent.clientX) - rect.left;
    const y = ('touches' in nativeEvent ? nativeEvent.touches[0].clientY : nativeEvent.clientY) - rect.top;
    
    if (contextRef.current) {
      contextRef.current.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over';
      contextRef.current.beginPath();
      contextRef.current.moveTo(x, y);
      setIsDrawing(true);
    }
  };

  const endDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in nativeEvent ? nativeEvent.touches[0].clientX : nativeEvent.clientX) - rect.left;
    const y = ('touches' in nativeEvent ? nativeEvent.touches[0].clientY : nativeEvent.clientY) - rect.top;

    if (contextRef.current) {
      contextRef.current.lineTo(x, y);
      contextRef.current.stroke();
    }
  };
  
  return (
    <div className="flex flex-col items-center space-y-4">
        <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            onTouchStart={startDrawing}
            onTouchEnd={endDrawing}
            onTouchMove={draw}
            className="border-2 border-dashed border-pink-300 rounded cursor-crosshair mx-auto block bg-white"
        />
        <div className="bg-gray-100 p-2 rounded-lg flex flex-wrap gap-2 justify-center">
            {COLORS.map(c => (
                <button key={c} onClick={() => { setColor(c); setIsErasing(false); }} className={`w-8 h-8 rounded-full transition-transform transform hover:scale-110 ${color === c && !isErasing ? 'ring-2 ring-offset-2 ring-pink-400' : ''}`} style={{ backgroundColor: c }} aria-label={`Color ${c}`}></button>
            ))}
            <button onClick={() => setIsErasing(!isErasing)} className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 transition-transform transform hover:scale-110 ${isErasing ? 'ring-2 ring-offset-2 ring-pink-400' : ''}`} aria-label="Eraser">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.46 13.91L5.09 3.54a1.5 1.5 0 00-2.12 0l-.7.7a1.5 1.5 0 000 2.12l10.37 10.37a1.5 1.5 0 002.12 0l.7-.7a1.5 1.5 0 000-2.12zM9.54 6.88l-4.24 4.24L3.18 8.9a1.5 1.5 0 00-2.12 0l-.7.7a1.5 1.5 0 000 2.12l2.12 2.12a1.5 1.5 0 002.12 0L9.54 8.9a1.5 1.5 0 000-2.12l-.7-.7z" clipRule="evenodd" /></svg>
            </button>
            {SIZES.map(s => (
                <button key={s} onClick={() => setSize(s)} className={`w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center transition-transform transform hover:scale-110 ${size === s ? 'ring-2 ring-offset-2 ring-pink-400' : ''}`} aria-label={`Brush size ${s}`}>
                    <span className="bg-black rounded-full" style={{ width: s+2, height: s+2 }}></span>
                </button>
            ))}
        </div>
    </div>
  );
});

export default DrawingCanvas;