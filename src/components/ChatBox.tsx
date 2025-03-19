import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const typeMessage = async (message: Message) => {
    const content = message.content;
    let currentText = '';
    
    setMessages(prev => [...prev, { ...message, content: '', isTyping: true }]);

    for (let i = 0; i < content.length; i++) {
      currentText += content[i];
      setMessages(prev => 
        prev.map((msg, idx) => 
          idx === prev.length - 1 ? { ...msg, content: currentText } : msg
        )
      );
      await new Promise(resolve => setTimeout(resolve, 20));
    }

    setMessages(prev => 
      prev.map((msg, idx) => 
        idx === prev.length - 1 ? { ...msg, isTyping: false } : msg
      )
    );
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // 可以添加一个复制成功的提示
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        messages: [...messages, userMessage]
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.data.message 
      };
      await typeMessage(assistantMessage);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: '抱歉，出现了一些错误。请稍后再试。' 
      };
      await typeMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message: Message) => {
    return (
      <div className="relative group">
        <ReactMarkdown
          // @ts-ignore
          components={{
            code: ({ inline, className, children }) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <div className="relative">
                  <SyntaxHighlighter
                    language={match[1]}
                    style={tomorrow as any}
                    PreTag="div"
                    className="rounded-lg"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => copyToClipboard(String(children))}
                    className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    复制
                  </button>
                </div>
              ) : (
                <code className={className}>{children}</code>
              );
            }
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold">AI 助手</h2>
        <p className="text-purple-100">有什么我可以帮你的吗？</p>
      </div>

      <div className="h-[400px] overflow-y-auto p-6 bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>开始和 AI 助手对话吧！</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl shadow ${
                    message.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {renderMessage(message)}
                  {message.isTyping && (
                    <span className="inline-block ml-1 animate-pulse">▊</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl shadow bg-white text-gray-700">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-6 bg-white border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的问题..."
            className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  );
} 