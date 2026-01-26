import React, { useState } from "react";

const FAQS = [
  {
    question: "How do I place an order?",
    answer: "Browse products, add to cart, and proceed to checkout."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards and UPI."
  },
  {
    question: "How can I track my order?",
    answer: "You will receive a tracking link via email after your order is shipped."
  },
  {
    question: "How do I contact support?",
    answer: "Use the chat below or email us at support@jjshop.com."
  }
];

const CustomerSupport: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [showFaq, setShowFaq] = useState(true);

  const handleFaqClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    // Simple bot reply for demo
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: "bot", text: "Thank you for your message! Our team will get back to you soon." }]);
    }, 800);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* FAQ Section with cross button */}
      {showFaq && (
        <div className="bg-white rounded shadow-lg p-4 mb-2 w-80 relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg font-bold"
            aria-label="Close FAQ"
            onClick={() => setShowFaq(false)}
          >
            ×
          </button>
          <h3 className="font-bold text-lg mb-2">FAQs</h3>
          {FAQS.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left font-medium py-1 focus:outline-none"
                onClick={() => handleFaqClick(idx)}
              >
                {faq.question}
              </button>
              {openIndex === idx && (
                <div className="text-gray-600 pl-2 pb-2 flex items-center justify-between">
                  <span>{faq.answer}</span>
                  <button
                    className="ml-2 text-xs text-red-500 border border-red-300 rounded px-2 py-0.5 hover:bg-red-100"
                    onClick={() => setOpenIndex(null)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Chat Widget */}
      {chatOpen ? (
        <div className="bg-white rounded shadow-lg w-80 flex flex-col">
          <div className="flex justify-between items-center p-2 border-b">
            <span className="font-semibold">Customer Chat</span>
            <button onClick={() => setChatOpen(false)} className="text-gray-500">✕</button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto h-48">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 text-sm ${msg.from === "user" ? "text-right" : "text-left text-blue-600"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex border-t">
            <input
              className="flex-1 p-2 outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit" className="px-3 text-blue-600 font-bold">Send</button>
          </form>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          onClick={() => setChatOpen(true)}
        >
          Chat with us
        </button>
      )}
    </div>
  );
};

export default CustomerSupport;
