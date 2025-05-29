import React, { useState } from "react";
import "./App.css";

const quotes = [
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "I am not afraid... I was born to do this. - Joan of Arc",
  "Believe you can and you’re halfway there. - Theodore Roosevelt"
];

export default function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1>Quote Generator 💬</h1>
      <div className="quote-box">
        <p className="quote">"{quotes[quoteIndex]}"</p>
        <button onClick={handleClick}>New Quote</button>
      </div>
    </div>
  );
}
