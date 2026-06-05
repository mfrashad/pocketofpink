
import React, { useState, useRef, useEffect } from 'react';
import { chatService } from '../services/geminiService';
import { playSound } from '../services/soundService';

interface Message {
  sender: 'user' | 'pal';
  text: string;
}

// Helper function to parse inline markdown (**bold**, *italic*)
const parseInlineFormatting = (text: string): React.ReactNode => {
  // Split text by markdown tokens, keeping the tokens
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
};

// Helper component to render text with markdown support for paragraphs, lists, bold, and italics.
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 my-2">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      const content = trimmedLine.substring(2);
      currentList.push(<li key={index}>{parseInlineFormatting(content)}</li>);
    } else {
      flushList(); // End any existing list
      if (trimmedLine.length > 0) {
        elements.push(<p key={index} className="my-1">{parseInlineFormatting(line)}</p>);
      }
      // Empty lines are treated as paragraph breaks by the logic above
    }
  });

  flushList(); // Flush any remaining list at the end

  return <>{elements}</>;
};


const AskPal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Manages the lifecycle of the chat session based on the UI state
  useEffect(() => {
    const initializeChat = async () => {
        chatService.start();
        setIsLoading(true);
        // FIX: Simplified the initial prompt for a more direct and effective opening message.
        const palResponse = await chatService.sendMessage("A child has just opened the chat. Please provide a warm and engaging opening message.");
        const palMessage: Message = { sender: 'pal', text: palResponse };
        setMessages([palMessage]);
        setIsLoading(false);
    };

    if (isOpen) {
        playSound('open');
        initializeChat();
    } else {
        // End the session and clear messages when the chat is closed
        chatService.end();
        setMessages([]);
    }
  }, [isOpen]);


  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const palResponse = await chatService.sendMessage(input);
    const palMessage: Message = { sender: 'pal', text: palResponse };
    setMessages(prev => [...prev, palMessage]);
    setIsLoading(false);
  };

  if (!process.env.API_KEY) {
    return null; // Don't render if API key is not set
  }

  return (
    <>
      {/* Message board that shows when chat is closed */}
      {!isOpen && (
        <div className="no-print fixed bottom-12 right-24 w-60 bg-[#FBE29F] p-3 rounded-lg shadow-lg z-30 animate-in fade-in-0 zoom-in-95">
          <p className="text-sm text-gray-800 font-medium text-center">
            Got questions? 🎉 I’ve got answers! Chat with me while you play.
          </p>
          {/* Triangle pointer */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#FBE29F]"></div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="no-print fixed bottom-6 right-6 bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform z-40"
        aria-label="Ask Pocket Pal"
      >
        <img src="https://i.imgur.com/Vdw7QHo.png" alt="Ask Pocket Pal" className="h-14 object-contain" />
      </button>

      {isOpen && (
        <div className="no-print fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col z-40 animate-in fade-in-0 slide-in-from-bottom-5">
          <div className="bg-[#A7E3D8] p-3 rounded-t-2xl text-center">
            <h3 className="font-bold text-white">Ask Pocket Pal</h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-xs text-sm ${
                    msg.sender === 'user' ? 'self-end bg-blue-500 text-white' : 'self-start bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.sender === 'pal' ? <FormattedText text={msg.text} /> : msg.text}
                </div>
              ))}
              {isLoading && (
                 <div className="self-start bg-gray-200 text-gray-800 p-2 rounded-lg max-w-xs text-sm">
                    ...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="p-2 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 p-2 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none text-sm text-pink-700 placeholder:text-pink-300 bg-pink-100"
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading} className="bg-[#FBE29F] p-2 rounded-lg text-gray-700 font-bold disabled:opacity-50">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskPal;
