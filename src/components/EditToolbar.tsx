import React, { useEffect, useState } from 'react';
import { Copy, RotateCcw, Download, Check } from 'lucide-react';
import { loadLayout, resetLayout, useEditMode } from '../utils/editableLayout';
import { loadTexts, resetTexts } from '../utils/editableText';

const EditToolbar: React.FC = () => {
  const editMode = useEditMode();
  const [copied, setCopied] = useState<'layout' | 'text' | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const bump = () => setVersion((v) => v + 1);
    window.addEventListener('pop-layout-changed', bump);
    window.addEventListener('pop-text-changed', bump);
    return () => {
      window.removeEventListener('pop-layout-changed', bump);
      window.removeEventListener('pop-text-changed', bump);
    };
  }, []);

  if (!editMode) return null;

  const layoutJson = JSON.stringify(loadLayout(), null, 2);
  const textJson = JSON.stringify(loadTexts(), null, 2);

  const copy = async (kind: 'layout' | 'text') => {
    const json = kind === 'layout' ? layoutJson : textJson;
    try {
      await navigator.clipboard.writeText(json);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      window.prompt('Copy JSON:', json);
    }
  };

  const download = () => {
    const blob = new Blob(
      [JSON.stringify({ layout: loadLayout(), texts: loadTexts() }, null, 2)],
      { type: 'application/json' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pop-edits.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    if (window.confirm('Reset every editable element AND text override?')) {
      resetLayout();
      resetTexts();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-2 font-sans" data-version={version}>
      <div className="bg-pop-ink text-pop-cream px-3 py-2 rounded-2xl text-[10px] uppercase tracking-wider shadow-lg max-w-xs text-right leading-relaxed">
        drag = move · ⇧+drag = resize · ⌥+drag = rotate · wheel = resize · ⌃+click = pick asset behind
      </div>
      <div className="flex gap-2 flex-wrap justify-end">
        <button
          onClick={() => copy('layout')}
          className="bg-pop-pink text-pop-cream px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          {copied === 'layout' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied === 'layout' ? 'Copied' : 'Copy layout'}
        </button>
        <button
          onClick={() => copy('text')}
          className="bg-pop-pink text-pop-cream px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          {copied === 'text' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied === 'text' ? 'Copied' : 'Copy text'}
        </button>
        <button
          onClick={download}
          className="bg-pop-cream text-pop-pink px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition-transform border-2 border-pop-pink"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={reset}
          className="bg-pop-cream text-pop-ink px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition-transform border-2 border-pop-ink"
        >
          <RotateCcw className="w-4 h-4" />
          Reset all
        </button>
      </div>
    </div>
  );
};

export default EditToolbar;
