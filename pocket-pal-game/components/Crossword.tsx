import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Modal from './Modal';

interface CrosswordProps {
  words: string[];
  definitions: Record<string, string>;
}

// --- Grid Generation (Static Layout) ---

const GRID_SIZE = 15;

// Word, start_row, start_col, direction (H/V)
const wordPlacements: [string, number, number, 'H' | 'V'][] = [
    ['PHYSICALABUSE', 0, 1, 'H'],
    ['EMOTIONALABUSE', 0, 13, 'V'],
    ['VERBALABUSE', 2, 0, 'H'],
    ['FINANCIALABUSE', 1, 0, 'V'],
    ['CYBERBULLY', 14, 2, 'H'],
    ['ISOLATION', 4, 5, 'V'],
    ['SEXUALABUSE', 7, 2, 'H'],
    ['BULLYING', 5, 10, 'V'],
    ['EXPLOITATION', 12, 1, 'H'],
];

const generateGridData = (words: string[]) => {
    const grid: (string | null)[][] = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));
    const wordLocations: Record<string, { start: [number, number], end: [number, number], original: string }> = {};

    const wordMap = new Map<string, string>();
    words.forEach(w => wordMap.set(w.replace(/ /g, '').toUpperCase(), w));

    wordPlacements.forEach(([word, r, c, dir]) => {
        if (wordMap.has(word)) {
            const originalWord = wordMap.get(word)!;
            let endR = r;
            let endC = c;
            for (let i = 0; i < word.length; i++) {
                if (dir === 'H') {
                    if (c + i < GRID_SIZE) grid[r][c + i] = word[i];
                    endC = c + i;
                } else {
                    if (r + i < GRID_SIZE) grid[r + i][c] = word[i];
                    endR = r + i;
                }
            }
            wordLocations[word] = { start: [r, c], end: [endR, endC], original: originalWord };
        }
    });

    // Fill empty cells with random letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === null) {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }

    return { grid: grid as string[][], wordLocations };
};


// --- Component ---

const Crossword: React.FC<CrosswordProps> = ({ words, definitions }) => {
    const { grid, wordLocations } = useMemo(() => generateGridData(words), [words]);

    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [selection, setSelection] = useState<{ r: number, c: number }[]>([]);
    
    const [modalInfo, setModalInfo] = useState<{ title: string; text: string } | null>(null);

    const isCellSelected = (r: number, c: number) => selection.some(cell => cell.r === r && cell.c === c);
    const isCellFound = (r: number, c: number) => {
        for (const word of foundWords) {
            const wordKey = word.replace(/ /g, '').toUpperCase();
            const loc = wordLocations[wordKey];
            if (loc) {
                const { start, end } = loc;
                const isHorizontal = start[0] === end[0];
                if (isHorizontal) {
                    if (r === start[0] && c >= start[1] && c <= end[1]) return true;
                } else { // Vertical
                    if (c === start[1] && r >= start[0] && r <= end[0]) return true;
                }
            }
        }
        return false;
    };

    const handleCheckSelection = useCallback(() => {
        if (selection.length < 2) return;

        const startCell = selection[0];
        const endCell = selection[selection.length - 1];

        for (const wordKey in wordLocations) {
            const loc = wordLocations[wordKey];
            const originalWord = loc.original;
            
            if (foundWords.includes(originalWord)) continue;

            const locStart = { r: loc.start[0], c: loc.start[1] };
            const locEnd = { r: loc.end[0], c: loc.end[1] };

            const selectionMatches = (
                (startCell.r === locStart.r && startCell.c === locStart.c && endCell.r === locEnd.r && endCell.c === locEnd.c) ||
                (startCell.r === locEnd.r && startCell.c === locEnd.c && endCell.r === locStart.r && endCell.c === locStart.c)
            );

            if (selectionMatches) {
                setFoundWords(prev => [...prev, originalWord]);
                setModalInfo({ title: originalWord, text: definitions[originalWord] });
                break; // Found one, stop checking
            }
        }
    }, [selection, wordLocations, definitions, foundWords]);

    const handleMouseUp = useCallback(() => {
        if (isDragging) {
            setIsDragging(false);
            handleCheckSelection();
            setSelection([]);
        }
    }, [isDragging, handleCheckSelection]);
    
    const handleMouseDown = (r: number, c: number) => {
        setIsDragging(true);
        setSelection([{r, c}]);
    };

    const handleMouseEnter = (r: number, c: number) => {
        if (!isDragging || selection.length === 0) return;
        
        const start = selection[0];
        const newSelection = [start];
        
        const dr = r - start.r;
        const dc = c - start.c;

        if (dr === 0 && dc !== 0) { // Horizontal
            const step = dc > 0 ? 1 : -1;
            for (let i = step; Math.abs(i) <= Math.abs(dc); i += step) {
                newSelection.push({r: start.r, c: start.c + i});
            }
        } else if (dc === 0 && dr !== 0) { // Vertical
            const step = dr > 0 ? 1 : -1;
            for(let i = step; Math.abs(i) <= Math.abs(dr); i += step) {
                newSelection.push({r: start.r + i, c: start.c});
            }
        } // Ignore diagonals for simplicity

        setSelection(newSelection);
    };

    // Add a global mouse up listener to catch mouse up outside the grid
    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseUp]);


    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
             <div 
                className="grid gap-1 bg-gray-300 p-2 rounded-lg select-none mx-auto touch-none"
                style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
                onMouseLeave={handleMouseUp}
             >
                {grid.map((row, r) =>
                    row.map((cell, c) => (
                        <div
                            key={`${r}-${c}`}
                            onMouseDown={() => handleMouseDown(r, c)}
                            onMouseEnter={() => handleMouseEnter(r, c)}
                            className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center font-bold text-sm uppercase cursor-pointer rounded transition-colors
                                ${isCellSelected(r, c) ? 'bg-yellow-300 scale-110' : ''}
                                ${isCellFound(r, c) ? 'bg-green-400 text-white' : 'bg-white'}
                            `}
                        >
                            {cell}
                        </div>
                    ))
                )}
            </div>

            <div className="w-full md:w-64 space-y-2 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                <h3 className="font-bold text-lg text-yellow-800">Words to Find:</h3>
                <ul className="space-y-1 text-gray-700">
                    {words.map(word => (
                        <li key={word} className={`transition-all font-medium ${foundWords.includes(word) ? 'line-through text-gray-400' : ''}`}>
                            {word}
                        </li>
                    ))}
                </ul>
            </div>

            {modalInfo && (
                <Modal
                    isOpen={!!modalInfo}
                    onClose={() => setModalInfo(null)}
                    title={modalInfo.title}
                >
                    <p>{modalInfo.text}</p>
                </Modal>
            )}
        </div>
    );
};

export default Crossword;