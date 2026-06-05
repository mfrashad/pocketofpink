
import React, { useContext, useState, useRef, useEffect, useMemo } from 'react';
import type { ChapterId, Activity, JournalEntry, BodyPartsConnectActivity, BodyPartsSection, BodyPart, BodyPartsQuizActivity, PubertyTimelineActivity, HairHotspot, SafetyScenario, RelationshipWebGameActivity } from '../types';
import { GameContext } from '../context/GameContext';
import { BADGES, CHAPTERS } from '../constants';
import Modal from '../components/Modal';
import { Icon } from '../components/Icons';
import DrawingCanvas, { type DrawingCanvasRef } from '../components/DrawingCanvas';
import { playSound } from '../services/soundService';
import { IMAGES } from '../assets';
import Crossword from '../components/Crossword';


// --- UTILITY TO FORMAT JOURNAL DATA ---

const formatJournalData = (chapterId: ChapterId, data: any, chapterTitle: string): JournalEntry => {
    switch (chapterId) {
        case 'identity':
            return {
                type: 'journal-chapter1', chapterTitle,
                name: data.name || '', like: data.like || '', love: data.love || '', hate: data.hate || '', am: data.am || '',
                drawingUrl: data.drawing || '', reflection: data.reflection || ''
            };
        case 'rights':
             return {
                type: 'journal-chapter3', chapterTitle,
                drawingUrl: data.drawing || '',
                q1: data.q1 || '', q2: data.q2 || '', q3: data.q3 || ''
             };
        case 'safety':
             return {
                type: 'journal-chapter4', chapterTitle,
                cyberSafetyAnswers: data.cyberSafety || {},
                emergencyInfo: data.emergencyInfo || {}
             };
        case 'support':
             return {
                type: 'journal-chapter5', chapterTitle,
                emotionAnswers: data.emotions || {},
                protectionList: data.protectionList || '',
                q1: data.q1_reflection || '',
                q2: data.q2_reflection || ''
             };
        case 'express':
            return {
                type: 'journal-chapter6', chapterTitle,
                drawingUrl: data.drawing || ''
            };
        default:
            return { type: 'journal-placeholder', chapterTitle, content: 'Chapter completed!' };
    }
}

// --- RELATIONSHIP WEB GAME ACTIVITY ---

const RelationshipWebGameActivityComponent: React.FC<{ activity: RelationshipWebGameActivity; onAdvance: () => void }> = ({ activity, onAdvance }) => {
  const [remainingScenarios, setRemainingScenarios] = useState(() => activity.scenarios.sort(() => Math.random() - 0.5));
  const [placedGood, setPlacedGood] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [webFeedback, setWebFeedback] = useState<'shake' | 'sparkle' | null>(null);

  const goodScenariosCount = useMemo(() => activity.scenarios.filter(s => s.isGood).length, [activity.scenarios]);

  useEffect(() => {
    if (placedGood.length === goodScenariosCount && remainingScenarios.filter(s => s.isGood).length === 0) {
      setWebFeedback('sparkle');
      setTimeout(() => {
        onAdvance();
      }, 2000);
    }
  }, [placedGood, goodScenariosCount, remainingScenarios, onAdvance]);

  const handleDragStart = (scenarioText: string) => {
    setDraggedItem(scenarioText);
  };

  const handleDrop = (isWebZone: boolean) => {
    if (!draggedItem) return;

    const scenario = activity.scenarios.find(s => s.text === draggedItem);
    if (!scenario) return;

    const isCorrect = scenario.isGood === isWebZone;

    if (isCorrect) {
      setRemainingScenarios(prev => prev.filter(s => s.text !== scenario.text));
      if (isWebZone) {
        setPlacedGood(prev => [...prev, scenario.text]);
      }
    } else {
      setWebFeedback('shake');
      setTimeout(() => setWebFeedback(null), 500);
    }
    
    setDraggedItem(null);
  };
  
  const goodSlotPositions = [
    { top: '15%', left: '-5%' }, { top: '15%', right: '-5%' },
    { top: '70%', left: '-5%' }, { top: '70%', right: '-5%' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        onDrop={() => handleDrop(true)}
        onDragOver={(e) => e.preventDefault()}
        className={`relative w-96 h-96 transition-transform duration-500 ${webFeedback === 'shake' ? 'animate-shake' : ''}`}
      >
        <img src={IMAGES.relationshipWebGame.src} alt="Relationship web" className="w-full h-full object-contain" />
        {placedGood.map((text, index) => (
          <div key={text} style={goodSlotPositions[index]} className="absolute bg-pink-200 text-pink-800 text-xs font-semibold p-2 rounded-lg shadow-sm w-32 text-center animate-in fade-in zoom-in-90">
            {text}
          </div>
        ))}
        {webFeedback === 'sparkle' && (
          <div className="absolute inset-0 flex items-center justify-center text-5xl animate-pulse">✨</div>
        )}
      </div>

      <div className="mt-4 min-h-[8rem] w-full max-w-lg flex flex-wrap justify-center items-center gap-3 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
        {remainingScenarios.length > 0 ? (
          remainingScenarios.map(scenario => (
            <div
                key={scenario.text}
                draggable
                onDragStart={() => handleDragStart(scenario.text)}
                className={`p-3 rounded-lg shadow-md cursor-grab transition-opacity bg-white text-gray-800 font-medium ${draggedItem === scenario.text ? 'opacity-30' : ''}`}
            >
                {scenario.text}
            </div>
          ))
        ) : (
           <div className="text-green-700 font-bold text-lg">You’ve built a strong web!</div>
        )}
      </div>

       <div 
            onDrop={() => handleDrop(false)}
            onDragOver={(e) => e.preventDefault()}
            className="w-full max-w-lg h-24 border-4 border-dashed rounded-lg flex flex-col items-center justify-center bg-red-100 border-red-300 p-2"
        >
          <div className="text-2xl">🗑️</div>
          <p className="font-bold text-red-700 mt-1">Drag "not good crowd" friends here</p>
        </div>
      
       {webFeedback === 'sparkle' && (
            <div className="mt-2 text-green-700 font-bold text-lg animate-in fade-in">You’re surrounded by a good crowd!</div>
        )}
      <style>{`
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};


// --- PUBERTY TIMELINE ACTIVITY ---

const PubertyTimelineActivityComponent: React.FC<{ activity: PubertyTimelineActivity; onAdvance: () => void }> = ({ activity, onAdvance }) => {
    const [stage, setStage] = useState<'hair' | 'safety'>('hair');
    const [foundHotspots, setFoundHotspots] = useState<HairHotspot[]>([]);
    const [feedback, setFeedback] = useState<{ title: string; text: string } | null>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const [scenarios, setScenarios] = useState(activity.safetyScenarios);
    const [answeredCorrectly, setAnsweredCorrectly] = useState<SafetyScenario[]>([]);
    const [draggedItem, setDraggedItem] = useState<SafetyScenario | null>(null);
    const [dropFeedback, setDropFeedback] = useState<Record<string, 'correct' | 'incorrect'>>({});
    const [isDraggingOver, setIsDraggingOver] = useState<'safe' | 'unsafe' | null>(null);

    useEffect(() => {
        if (stage === 'hair' && foundHotspots.length === activity.hairHotspots.length) {
            setTimeout(() => setStage('safety'), 1000);
        }
    }, [foundHotspots, activity.hairHotspots, stage]);
    
    useEffect(() => {
        if (stage === 'safety' && answeredCorrectly.length === scenarios.length) {
            setTimeout(() => onAdvance(), 1000);
        }
    }, [answeredCorrectly, scenarios, stage, onAdvance]);


    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageContainerRef.current) return;
        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        for (const hotspot of activity.hairHotspots) {
            const isAlreadyFound = foundHotspots.some(fh => fh.feedback === hotspot.feedback);
            if (isAlreadyFound) continue;

            const dx = x - hotspot.coords[0];
            const dy = y - hotspot.coords[1];
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= hotspot.radius) {
                setFoundHotspots(prev => [...prev, hotspot]);
                setFeedback({ title: "You found one!", text: hotspot.feedback });
                return;
            }
        }
        setFeedback({ title: "Not quite!", text: "Hair doesn’t usually grow there. Try again!" });
    };

    const handleDragStart = (scenario: SafetyScenario) => {
        setDraggedItem(scenario);
    };

    const handleDrop = (isSafeZone: boolean) => {
        if (!draggedItem) return;
        const isCorrect = draggedItem.isSafe === isSafeZone;
        
        setDropFeedback(prev => ({...prev, [draggedItem.text]: isCorrect ? 'correct' : 'incorrect'}));
        
        if (isCorrect) {
            setTimeout(() => {
                setAnsweredCorrectly(prev => [...prev, draggedItem]);
            }, 500);
        } else {
            setTimeout(() => {
                 setDropFeedback(prev => {
                    const newFeedback = {...prev};
                    delete newFeedback[draggedItem.text];
                    return newFeedback;
                 });
            }, 1000);
        }
        setDraggedItem(null);
        setIsDraggingOver(null);
    };

    const remainingScenarios = scenarios.filter(s => !answeredCorrectly.some(ac => ac.text === s.text));

    return (
        <div className="text-center space-y-4">
            {stage === 'hair' && (
                <>
                     <div className="relative bg-blue-100 border-2 border-blue-300 p-4 rounded-lg my-4 shadow-md max-w-lg mx-auto">
                        <p className="text-blue-800 font-medium">We also get to know where we are growing our hair (This comes in handy when going through puberty!)</p>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-blue-100"></div>
                    </div>
                    
                    <div className="my-4 flex justify-center">
                        <img src={IMAGES.pubertyHairGrowth.src} alt={IMAGES.pubertyHairGrowth.alt} className="max-h-96 rounded-lg" />
                    </div>

                    <p className="text-gray-600">Tap on the pulsing circles where hair starts to grow during puberty.</p>
                    <div ref={imageContainerRef} onClick={handleImageClick} className="relative mx-auto w-full max-w-xs cursor-pointer">
                        <img src={IMAGES.bodyOutline.src} alt="Body outline" className="w-full" />
                        {activity.hairHotspots.map((hotspot, i) => {
                            const isFound = foundHotspots.some(fh => fh.feedback === hotspot.feedback);
                            return (
                                <div
                                    key={i}
                                    className={`absolute rounded-full transition-all duration-300 ${
                                        isFound
                                            ? 'bg-green-500/80 flex items-center justify-center text-white font-bold text-lg animate-in fade-in zoom-in'
                                            : 'bg-pink-400/60 border-2 border-dashed border-white animate-pulse-hotspot'
                                    }`}
                                    style={{
                                        top: `${hotspot.coords[1]}%`,
                                        left: `${hotspot.coords[0]}%`,
                                        width: `${hotspot.radius * 2}%`,
                                        height: `${hotspot.radius * 2}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    {isFound ? '✓' : ''}
                                </div>
                            );
                        })}
                    </div>
                     <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-4 text-left max-w-lg mx-auto">
                        <p className="text-yellow-800">
                            💡 As your body changes, you’ll notice hair growing in new places and body parts not looking like how they were before. And that's completely normal! Knowing this helps understand your body as it grows.
                        </p>
                    </div>
                </>
            )}

            {stage === 'safety' && (
                 <>
                    <div className="relative bg-green-100 border-2 border-green-300 p-4 rounded-lg my-4 shadow-md max-w-lg mx-auto">
                        <p className="text-green-800 font-medium">Most importantly we get to know which places other people can and cannot touch.</p>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-100"></div>
                    </div>

                    <div className="my-4 flex justify-center">
                        <img src={IMAGES.quizSafety.src} alt={IMAGES.quizSafety.alt} className="max-h-96 rounded-lg" />
                    </div>

                    <p className="text-gray-600">Drag each card to the correct zone.</p>
                    <div className="grid grid-cols-2 gap-4 h-64">
                         {['safe', 'unsafe'].map(zoneType => {
                             const isSafeZone = zoneType === 'safe';
                             return (
                                <div key={zoneType}
                                    onDrop={() => handleDrop(isSafeZone)}
                                    onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(isSafeZone ? 'safe' : 'unsafe'); }}
                                    onDragLeave={() => setIsDraggingOver(null)}
                                    className={`p-4 rounded-lg border-4 border-dashed transition-colors ${
                                        isSafeZone ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'
                                    } ${isDraggingOver === zoneType ? (isSafeZone ? 'bg-green-200' : 'bg-red-200') : ''}`}
                                >
                                    <h4 className={`font-bold text-lg ${isSafeZone ? 'text-green-800' : 'text-red-800'}`}>
                                        {isSafeZone ? '✅ Safe Zone' : '❌ Not Safe Zone'}
                                    </h4>
                                </div>
                             );
                         })}
                    </div>
                     <div className="mt-4 min-h-[7rem] flex flex-wrap justify-center items-center gap-2">
                         {remainingScenarios.map(scenario => {
                             const feedbackState = dropFeedback[scenario.text];
                             let cardClass = "p-3 rounded-lg shadow-md cursor-grab transition-all duration-300 ";
                             if (feedbackState === 'correct') {
                                 cardClass += 'bg-green-200 opacity-0 scale-50';
                             } else if (feedbackState === 'incorrect') {
                                 cardClass += 'bg-red-300 animate-shake';
                             } else {
                                 cardClass += 'bg-yellow-100';
                             }

                             return (
                                <div key={scenario.text} draggable onDragStart={() => handleDragStart(scenario)} className={cardClass}>
                                    {scenario.text}
                                </div>
                             );
                         })}
                    </div>
                     <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-4 text-left max-w-lg mx-auto">
                        <p className="text-yellow-800">
                            💡 Some parts of your body are private and should only be touched by you or a trusted adult when necessary, like a doctor during a checkup. This helps keep you safe and comfortable!
                        </p>
                    </div>
                </>
            )}

            <Modal isOpen={!!feedback} onClose={() => setFeedback(null)} title={feedback?.title || ''}>
                <p>{feedback?.text}</p>
            </Modal>
             <style>{`
                @keyframes pulse-hotspot {
                    0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.05); }
                }
                .animate-pulse-hotspot { animation: pulse-hotspot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake { animation: shake 0.5s ease-in-out; }
            `}</style>
        </div>
    );
};

// --- BODY PARTS QUIZ ACTIVITY ---

const BodyPartsQuizActivityComponent: React.FC<{ activity: BodyPartsQuizActivity; onAdvance: () => void }> = ({ activity, onAdvance }) => {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState<'unanswered' | 'correct' | 'incorrect'>('unanswered');
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    const currentQuiz = activity.quizzes[quizIndex];
    const imageAsset = IMAGES[currentQuiz.imageKey];

    const handleAnswerClick = (option: { text: string; isCorrect: boolean }) => {
        if (answerStatus !== 'unanswered') return;

        setSelectedAnswer(option.text);
        if (option.isCorrect) {
            setAnswerStatus('correct');
        } else {
            setAnswerStatus('incorrect');
        }
        setShowFeedbackModal(true);
    };

    const handleModalClose = () => {
        setShowFeedbackModal(false);
        if (answerStatus === 'correct') {
            if (quizIndex < activity.quizzes.length - 1) {
                setQuizIndex(quizIndex + 1);
                setAnswerStatus('unanswered');
                setSelectedAnswer(null);
            } else {
                // Last quiz was answered correctly, advance to next activity
                onAdvance();
            }
        } else {
            // Incorrect, reset to allow another try
            setAnswerStatus('unanswered');
            setSelectedAnswer(null);
        }
    };

    const feedbackText = answerStatus === 'correct' ? currentQuiz.correctFeedback : currentQuiz.incorrectFeedback;

    return (
        <div className="text-center space-y-4 relative">
             <style>{`
                @keyframes sparkle-animation {
                    0% { transform: scale(0); opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                .sparkle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100px;
                    height: 100px;
                    transform: translate(-50%, -50%);
                    background-image:
                        radial-gradient(circle, #FFF_1px, transparent_1px),
                        radial-gradient(circle, #FFF_1px, transparent_1px);
                    background-size: 10px 10px;
                    background-position: 0 0, 5px 5px;
                    animation: sparkle-animation 0.7s forwards;
                }
            `}</style>

            {quizIndex === 0 && (
                 <div className="relative bg-blue-100 border-2 border-blue-300 p-4 rounded-lg mb-4 shadow-md max-w-lg mx-auto">
                    <p className="text-blue-800">{activity.introText}</p>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-blue-100"></div>
                </div>
            )}

            {quizIndex === 1 && (
                <div className="relative bg-green-100 border-2 border-green-300 p-4 rounded-lg mb-4 shadow-md max-w-lg mx-auto">
                    <p className="text-green-800 font-medium">{activity.transitionText}</p>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-100"></div>
                </div>
            )}
            
            <div>
                <div className="relative inline-block">
                    <img src={imageAsset.src} alt={imageAsset.alt} className="rounded-lg mx-auto max-h-96" />
                    {currentQuiz.imageKey === 'quizKnee' && <span className="absolute top-1/2 right-4 text-4xl">🩹</span>}
                </div>
                <p className="text-lg font-semibold text-gray-700 my-4">{currentQuiz.prompt}</p>

                <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
                    {currentQuiz.options.map((option) => {
                        const isSelected = selectedAnswer === option.text;
                        const isCorrect = option.isCorrect;
                        let buttonClass = "w-full text-left p-4 rounded-lg font-semibold transition-all shadow-sm border-2 ";
                        if (isSelected) {
                            buttonClass += isCorrect ? 'bg-green-200 border-green-400 text-green-800' : 'bg-red-200 border-red-400 text-red-800';
                        } else {
                            buttonClass += 'bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-400';
                        }
                        return (
                             <button key={option.text} onClick={() => handleAnswerClick(option)} disabled={answerStatus !== 'unanswered'} className={buttonClass}>
                                <div className="relative">
                                    {option.text}
                                    {isSelected && isCorrect && <div className="sparkle"></div>}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {showFeedbackModal && (
                 <Modal isOpen={showFeedbackModal} onClose={handleModalClose} title={answerStatus === 'correct' ? 'Great Job!' : 'Not Quite!'}>
                    <div className="flex flex-col items-center">
                        <img src="https://i.imgur.com/Vdw7QHo.png" alt="Pocket Pal" className="h-20 mb-4" />
                        <p>{feedbackText}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
};


// --- BODY PARTS CONNECT ACTIVITY ---

const BodyPartsConnectActivityComponent: React.FC<{ activity: BodyPartsConnectActivity }> = ({ activity }) => {
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
    const [correctPairs, setCorrectPairs] = useState<Record<string, { p1: [number, number]; p2: [number, number] }>>({});
    
    const containerRef = useRef<HTMLDivElement>(null);
    const labelRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const dotRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const handleLabelClick = (partName: string, isRightColumn: boolean) => {
        if (correctPairs[partName]) return;
        setSelectedLabel(prev => prev === partName ? null : partName);
    };

    const handleDotClick = (partName: string) => {
        if (!selectedLabel || selectedLabel !== partName) return;

        const container = containerRef.current;
        const labelEl = labelRefs.current[selectedLabel];
        const dotEl = dotRefs.current[partName];
        if (!container || !labelEl || !dotEl) return;
        
        const cRect = container.getBoundingClientRect();
        const lRect = labelEl.getBoundingClientRect();
        const dRect = dotEl.getBoundingClientRect();

        const isRightColumn = labelEl.getAttribute('data-align') === 'right';

        const p1: [number, number] = [
            isRightColumn ? lRect.left - cRect.left : lRect.right - cRect.left,
            lRect.top + lRect.height / 2 - cRect.top,
        ];
        const p2: [number, number] = [
            dRect.left + dRect.width / 2 - cRect.left,
            dRect.top + dRect.height / 2 - cRect.top,
        ];

        setCorrectPairs(prev => ({ ...prev, [partName]: { p1, p2 } }));
        setSelectedLabel(null);
    };

    return (
        <div className="relative" ref={containerRef}>
             <div className="space-y-8">
                {activity.sections.map((section) => {
                    const half = Math.ceil(section.parts.length / 2);
                    const leftParts = section.parts.slice(0, half);
                    const rightParts = section.parts.slice(half);
                    const imageAsset = IMAGES[section.imageKey];

                    return (
                        <div key={section.title} className="p-2 md:p-4 border-2 border-pink-200 rounded-lg bg-pink-50/50">
                            <h3 className="text-xl font-bold text-center mb-4 text-pink-700">{section.title}</h3>
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-4 items-center">
                                {/* Left Column */}
                                <div className="space-y-2 flex flex-col items-end">
                                    {leftParts.map(part => {
                                        const isCorrect = !!correctPairs[part.name];
                                        const isSelected = selectedLabel === part.name;
                                        return (
                                            <button
                                                key={part.name}
                                                // FIX: ref callback must not return a value. The assignment expression is wrapped in curly braces to ensure a void return.
                                                ref={el => { labelRefs.current[part.name] = el; }}
                                                onClick={() => handleLabelClick(part.name, false)}
                                                disabled={isCorrect}
                                                data-align="left"
                                                className={`relative flex items-center justify-between w-full max-w-[140px] p-2 rounded-lg text-sm font-bold transition-all text-right z-99
                                                    ${isCorrect ? 'bg-green-300 text-green-800 cursor-default' : ''}
                                                    ${isSelected ? 'bg-yellow-300 ring-2 ring-yellow-500' : ''}
                                                    ${!isCorrect && !isSelected ? 'bg-pink-200 text-pink-800 hover:bg-pink-300' : ''}
                                                `}
                                            >
                                                <span>{part.name}</span>
                                                <span className="w-3 h-3 ml-2 bg-pink-500 rounded-full border-2 border-white flex-shrink-0"></span>
                                            </button>
                                        );
                                    })}
                                </div>
                                {/* Image */}
                                <div
                                    className={`relative ${imageAsset.sizeClasses || 'w-full'} ${imageAsset.marginClasses || '-z-99'}`}
                                    style={{ aspectRatio: section.aspectRatio ? String(section.aspectRatio) : 'auto' }}
                                >
                                    <img src={imageAsset.src} alt={imageAsset.alt} className="absolute inset-0 w-full h-full -z-99 object-cover" />
                                    {section.parts.map(part => {
                                        const isCorrect = !!correctPairs[part.name];
                                        return (
                                            <div
                                                key={part.name}
                                                ref={el => { dotRefs.current[part.name] = el; }}
                                                onClick={() => handleDotClick(part.name)}
                                                className={`absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all 
                                                    ${isCorrect ? 'bg-green-500 ring-2 ring-white' : 'bg-pink-500 hover:scale-150 cursor-pointer'}`}
                                                style={{ top: `${part.coords[1]}%`, left: `${part.coords[0]}%` }}
                                            />
                                        );
                                    })}
                                </div>
                                {/* Right Column */}
                                <div className="space-y-2 flex flex-col items-start">
                                    {rightParts.map(part => {
                                        const isCorrect = !!correctPairs[part.name];
                                        const isSelected = selectedLabel === part.name;
                                        return (
                                            <button
                                                key={part.name}
                                                // FIX: ref callback must not return a value. The assignment expression is wrapped in curly braces to ensure a void return.
                                                ref={el => { labelRefs.current[part.name] = el; }}
                                                onClick={() => handleLabelClick(part.name, true)}
                                                disabled={isCorrect}
                                                data-align="right"
                                                className={`relative flex items-center justify-between w-full max-w-[140px] p-2 rounded-lg text-sm font-bold transition-all text-left
                                                    ${isCorrect ? 'bg-green-300 text-green-800 cursor-default' : ''}
                                                    ${isSelected ? 'bg-yellow-300 ring-2 ring-yellow-500' : ''}
                                                    ${!isCorrect && !isSelected ? 'bg-pink-200 text-pink-800 hover:bg-pink-300' : ''}
                                                `}
                                            >
                                                <span className="w-3 h-3 mr-2 bg-pink-500 rounded-full border-2 border-white flex-shrink-0"></span>
                                                <span>{part.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                {/* FIX: Cast Object.values result to the specific type to avoid TypeScript 'unknown' type error */}
                {(Object.values(correctPairs) as { p1: [number, number]; p2: [number, number] }[]).map((pair, index) => (
                    <line
                        key={index}
                        x1={pair.p1[0]} y1={pair.p1[1]}
                        x2={pair.p2[0]} y2={pair.p2[1]}
                        stroke="#22c55e" strokeWidth="3"
                        strokeLinecap="round"
                    />
                ))}
            </svg>
        </div>
    );
};


// --- ACTIVITY RENDERER ---

interface ActivityRendererProps {
  activity: Activity;
  chapterId: ChapterId;
  tempData: any;
  updateTempData: (key: string, value: any) => void;
  canvasRef: React.RefObject<DrawingCanvasRef>;
  onAdvance: () => void;
}

const ActivityRenderer: React.FC<ActivityRendererProps> = ({ activity, chapterId, tempData, updateTempData, canvasRef, onAdvance }) => {
    
    // Map of background images for different drawing activities.
    const backgroundImageMap: Record<string, string | undefined> = {
        'identity-drawing': IMAGES.bodyOutline.src,
        'rights-consent-colors': IMAGES.bodyOutline.src,
        'express-coloring-competition': IMAGES.coloringPage.src,
    };
    
    const getBackgroundImage = () => {
        if (activity.type === 'drawing' && activity.hasTemplate) {
            return backgroundImageMap[`${chapterId}-${activity.type}`];
        }
        if (activity.type === 'consent-colors' || activity.type === 'coloring-competition') {
            return backgroundImageMap[`${chapterId}-${activity.type}`];
        }
        return undefined;
    };

    switch (activity.type) {
      case 'informational':
        return (
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-left">
              {(activity).content.map((block, index) => (
                <div key={index} className="space-y-4">
                  <p>{block.text}</p>
                  {block.imageKeys && block.imageKeys.length > 0 && (
                    <div className="flex justify-center items-center gap-4 flex-wrap pt-4">
                      {block.imageKeys.map(key => {
                        const imageAsset = IMAGES[key];
                        if (!imageAsset) return null;
                        return (
                          <img
                            key={key}
                            src={imageAsset.src}
                            alt={imageAsset.alt}
                            className={`${imageAsset.sizeClasses || 'w-auto max-h-48'} ${imageAsset.marginClasses || ''} rounded-lg shadow-md object-contain`}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
        );

      case 'text-input':
        return (
          <div className="space-y-4">
            <p className="text-pink-700 text-center mb-6">{activity.prompt}</p>
            {activity.fields.map((field) => (
              <div key={field.key} className="space-y-2">
                <label className="block text-lg font-medium text-pink-700">{field.label}</label>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none text-lg text-pink-700 placeholder:text-pink-300 bg-pink-100"
                  value={tempData[field.key] || ''}
                  onChange={(e) => updateTempData(field.key, e.target.value)}
                  placeholder="Type here..."
                />
              </div>
            ))}
          </div>
        );

      case 'drawing':
        return (
            <div className="space-y-4">
                <p className="text-gray-700 text-center mb-4">{activity.prompt}</p>
                <div className="bg-white border-4 border-pink-200 rounded-lg p-4">
                <DrawingCanvas
                    ref={canvasRef}
                    width={300}
                    height={350}
                    backgroundImageUrl={getBackgroundImage()}
                />
                </div>
            </div>
        );
      
      case 'reflection':
         return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg border-2 border-pink-200">
              <h3 className="font-bold text-pink-700 mb-4">💭 Think About It</h3>
              <p className="text-pink-700 text-lg leading-relaxed">{activity.prompt}</p>
              {activity.info && (
                <div className="mt-4 p-4 bg-white/60 rounded-lg">
                  <p className="text-gray-600 italic">{activity.info}</p>
                </div>
              )}
            </div>
            <textarea
              className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none text-pink-700 placeholder:text-pink-300 bg-pink-100"
              rows={4}
              placeholder="Write your thoughts here..."
              value={tempData.reflection || ''}
              onChange={(e) => updateTempData('reflection', e.target.value)}
            />
          </div>
        );

      case 'consent-acronym':
        return (
           <div className="space-y-4">
            <p className="text-gray-700 text-center mb-6">{activity.prompt}</p>
             <div className="flex items-end justify-center gap-2 md:gap-4">
                <img src={IMAGES.consentBoy.src} alt={IMAGES.consentBoy.alt} className="w-64 object-contain" />
                <div className="space-y-2 flex-1 max-w-sm">
                  {Object.entries(activity.acronym).map(([letter, meaning]) => (
                    <div key={letter} className="flex items-center space-x-2 md:space-x-4 bg-pink-50 p-2 md:p-3 rounded-lg border border-pink-200">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-400 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">
                        {letter}
                      </div>
                      <div className="flex-1 text-gray-700 font-medium text-xs md:text-sm">{meaning}</div>
                    </div>
                  ))}
                </div>
                 {/* This container defines the layout space, while the image inside is visually larger and overflows. */}
                <div className="relative w-64 self-stretch">
                    <img
                        src={IMAGES.consentGirl.src}
                        alt={IMAGES.consentGirl.alt}
                        className="absolute bottom-0 right-0 w-[32rem] object-contain"
                    />
                </div>
              </div>
          </div>
        );
      
      case 'consent-colors':
        return (
            <div className="space-y-6">
                <p className="text-pink-700 text-center mb-4">{activity.prompt}</p>
                <div className="bg-white border-4 border-pink-200 rounded-lg p-6">
                    <DrawingCanvas ref={canvasRef} width={300} height={350} backgroundImageUrl={getBackgroundImage()} />
                </div>
                <div className="space-y-3">
                {activity.questions.map((question, index) => (
                    <div key={index} className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                    <p className="text-pink-700 font-medium">{question}</p>
                    <textarea
                        className="w-full mt-2 p-2 border-2 border-pink-200 rounded-xl resize-none focus:border-pink-400 focus:outline-none text-pink-700 placeholder:text-pink-300 bg-pink-100"
                        rows={2}
                        placeholder="Your thoughts..."
                        value={tempData[`q${index+1}`] || ''}
                        onChange={(e) => updateTempData(`q${index+1}`, e.target.value)}
                    />
                    </div>
                ))}
                </div>
            </div>
        );
    
    case 'crossword':
        return (
            <div className="space-y-4">
                <p className="text-gray-700 text-center mb-6">{activity.prompt}</p>
                <Crossword
                    words={activity.words}
                    definitions={activity.definitions}
                />
            </div>
        );

        case 'cyber-safety':
            const cyberSafetyData = tempData.cyberSafety || {};
            return (
              <div className="space-y-4">
                <p className="text-gray-700 text-center mb-4">{activity.prompt}</p>
                <div className="text-sm text-gray-600 text-center mb-6">Get an adult for you to do this together!</div>
                <div className="space-y-3">
                  {activity.items.map((item) => (
                    <div key={item.text} className="flex items-center justify-between bg-white p-4 rounded-lg border-2 border-gray-200">
                      <span className="font-medium text-gray-700">{item.text}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            updateTempData('cyberSafety', {...cyberSafetyData, [item.text]: true})
                          }}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${cyberSafetyData[item.text] === true ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-600 hover:bg-green-200'}`}>YES</button>
                        <button
                          onClick={() => {
                            updateTempData('cyberSafety', {...cyberSafetyData, [item.text]: false})
                          }}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${cyberSafetyData[item.text] === false ? 'bg-red-400 text-white' : 'bg-gray-200 text-gray-600 hover:bg-red-200'}`}>NO</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

        case 'emergency-info':
            const emergencyInfoData = tempData.emergencyInfo || {};
            return (
              <div className="space-y-4">
                <p className="text-gray-700 text-center mb-6">{activity.prompt}</p>
                <div className="space-y-4">
                {activity.fields.map((field) => (
                    <div key={field} className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                    <label className="block font-bold text-pink-700 mb-2">{field}</label>
                    <input type="text"
                        className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none text-pink-700 placeholder:text-pink-300 bg-pink-100"
                        value={emergencyInfoData[field] || ''}
                        onChange={(e) => updateTempData('emergencyInfo', {...emergencyInfoData, [field]: e.target.value})}
                        placeholder={field.includes('NUMBER') ? 'Phone number' : field.includes('ADDRESS') ? 'Address' : 'Information'}
                    />
                    </div>
                ))}
                </div>
            </div>
            );
        
        case 'body-parts':
            return <BodyPartsConnectActivityComponent activity={activity} />;
        
        case 'body-parts-quiz':
            return <BodyPartsQuizActivityComponent activity={activity} onAdvance={onAdvance} />;

        case 'puberty-timeline':
            return <PubertyTimelineActivityComponent activity={activity} onAdvance={onAdvance} />;

        case 'relationship-web-game':
            return <RelationshipWebGameActivityComponent activity={activity} onAdvance={onAdvance} />;

        case 'emotion-faces':
            const emotionData = tempData.emotions || {};
            return (
                <div className="space-y-4">
                    <p className="text-pink-700 text-center mb-6">{activity.prompt}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[{ emoji: '😊', label: 'Happy' }, { emoji: '😢', label: 'Sad' }, { emoji: '😠', label: 'Angry' }, { emoji: '😨', label: 'Scared' }, { emoji: '😲', label: 'Surprised' }, { emoji: '🤗', label: 'Excited' }]
                    .map((emotion) => (
                        <div key={emotion.emoji} className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 text-center">
                        <div className="text-4xl mb-2">{emotion.emoji}</div>
                        <input
                            type="text" placeholder="Emotion name" className="w-full text-center border-2 border-pink-200 rounded-lg p-1 text-sm focus:border-pink-400 focus:outline-none text-pink-700 placeholder:text-pink-300 bg-pink-100"
                            value={emotionData[emotion.emoji] || ''}
                            onChange={(e) => updateTempData('emotions', {...emotionData, [emotion.emoji]: e.target.value})} />
                        </div>
                    ))}
                    </div>
                </div>
            );
        
        case 'protect-people':
             return (
                <div className="space-y-6">
                    <p className="text-pink-700 text-center mb-4">{activity.prompt}</p>
                    <div className="bg-white border-4 border-pink-200 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
                        <textarea className="p-2 border-none rounded resize-none text-center text-pink-700 placeholder:text-pink-300 bg-pink-100 w-full h-full" rows={4} cols={20}
                        placeholder="Write names of people you want to protect..."
                        value={tempData.protectionList || ''}
                        onChange={(e) => updateTempData('protectionList', e.target.value)}
                        />
                    </div>
                     <div className="space-y-4">
                    {activity.questions.map((question, index) => (
                        <div key={index} className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
                        <p className="text-pink-700 font-medium mb-2">{question}</p>
                        <textarea className="w-full p-3 border-2 border-pink-200 rounded-xl resize-none focus:border-pink-400 focus:outline-none text-pink-700 placeholder:text-pink-300 bg-pink-100" rows={2}
                            placeholder="Your thoughts..."
                            value={tempData[`q${index+1}_reflection`] || ''}
                            onChange={(e) => updateTempData(`q${index+1}_reflection`, e.target.value)}
                        />
                        </div>
                    ))}
                    </div>
                </div>
             );

        case 'coloring-competition':
             return (
                <div className="space-y-4">
                    <p className="text-gray-700 text-center mb-4">{activity.prompt}</p>
                    <div className="bg-white border-4 border-purple-200 rounded-lg p-6">
                        <DrawingCanvas ref={canvasRef} width={350} height={400} backgroundImageUrl={getBackgroundImage()} />
                    </div>
                </div>
             );

      default:
        let placeholderContent: React.ReactNode = null;
        placeholderContent = (
            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg text-center">
                <p className="text-gray-600">Interactive activity coming soon!</p>
            </div>
        );
        return (
          <div className="space-y-4">
            <p className="text-gray-700 text-center">{activity.prompt}</p>
             <div className="py-8 flex justify-center items-center">
               {placeholderContent}
             </div>
          </div>
        );
    }
}


// --- MAIN CONTAINER COMPONENT ---

interface ChapterContainerProps {
  chapterId: ChapterId;
}

const ChapterContainer: React.FC<ChapterContainerProps> = ({ chapterId }) => {
  const context = useContext(GameContext);
  const chapter = CHAPTERS.find(c => c.id === chapterId);

  const [activityIndex, setActivityIndex] = useState(0);
  const [tempData, setTempData] = useState<any>({});
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const canvasRef = useRef<DrawingCanvasRef>(null);

  useEffect(() => {
    setActivityIndex(0);
    setTempData({});
    setIsCompleting(false);
  }, [chapterId]);

  if (!context || !chapter) return null;
  const { setScreen, earnBadge, addTokens, completeChapter, addJournalEntry, triggerConfetti } = context;

  const activity = chapter.activities[activityIndex];
  const isLastActivity = activityIndex === chapter.activities.length - 1;

  const updateTempData = (key: string, value: any) => {
    setTempData((prev: any) => ({ ...prev, [key]: value }));
  };
  
  const handleNext = () => {
    if (activity.type === 'drawing' || activity.type === 'consent-colors' || activity.type === 'coloring-competition') {
        const imageData = canvasRef.current?.getImageDataUrl();
        if (imageData) {
            updateTempData('drawing', imageData);
        }
    }
    if (!isLastActivity) {
      setActivityIndex(activityIndex + 1);
    }
  };

  const handleBack = () => {
    if (activityIndex > 0) {
      setActivityIndex(activityIndex - 1);
    } else {
      setScreen('chapter-select');
    }
  };

  const handleChapterComplete = () => {
    if (isCompleting) return;
    setIsCompleting(true);

    let finalTempData = {...tempData};
    if (activity.type === 'drawing' || activity.type === 'consent-colors' || activity.type === 'coloring-competition') {
        const imageData = canvasRef.current?.getImageDataUrl();
        if (imageData) {
            finalTempData['drawing'] = imageData;
        }
    }
    
    const journalEntry = formatJournalData(chapter.id, finalTempData, chapter.title);
    addJournalEntry(chapter.id, journalEntry);
    
    earnBadge(chapter.badge);
    addTokens(10);
    completeChapter(chapter.id);
    playSound('happy');
    triggerConfetti();
    setIsRewardModalOpen(true);
  };
  
  const handleAdvance = isLastActivity ? handleChapterComplete : handleNext;

  const earnedBadge = BADGES[chapter.badge];
  const showNavButtons = activity.type !== 'body-parts-quiz' && activity.type !== 'puberty-timeline' && activity.type !== 'relationship-web-game';


  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={handleBack} className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
          <Icon name="ArrowLeft" className="w-6 h-6 text-gray-600" />
        </button>
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800">{chapter.title}</h1>
          <div className="text-sm text-gray-600">
            {activityIndex + 1} of {chapter.activities.length}
          </div>
        </div>
        <div className="text-2xl">{chapter.emoji}</div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((activityIndex + 1) / chapter.activities.length) * 100}%` }}
        ></div>
      </div>

      <div className="mb-6 min-h-[400px]">
         <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {activity.title}
        </h2>
        <p className="text-gray-700 text-center mb-6">{activity.prompt}</p>
        <ActivityRenderer activity={activity} chapterId={chapterId} tempData={tempData} updateTempData={updateTempData} canvasRef={canvasRef} onAdvance={handleAdvance} />
      </div>

      {showNavButtons && (
       <div className="flex justify-center">
        {isLastActivity ? (
            <button onClick={handleChapterComplete} className="w-full max-w-xs bg-gradient-to-r from-green-400 to-emerald-400 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Complete Chapter! 🎉
            </button>
        ) : (
            <button onClick={handleNext} className="w-full max-w-xs bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Continue →
            </button>
        )}
       </div>
      )}


      {earnedBadge && (
        <Modal isOpen={isRewardModalOpen} onClose={() => setScreen('chapter-select')} title="Chapter Complete!">
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-4">🎉</div>
            <div className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white py-3 px-6 rounded-lg mb-6">
              <div className="flex items-center justify-center">
                <Icon name="Award" className="w-6 h-6 mr-2" />
                <span className="font-bold">{earnedBadge.name}</span>
              </div>
            </div>
            <div className="text-lg text-gray-600 mb-6">
              You earned <span className="font-bold text-purple-600">10 tokens</span>!
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ChapterContainer;
