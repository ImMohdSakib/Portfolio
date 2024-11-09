import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Mohd Sakib", "Hi, I'm Mohd Sakib", "Hi, I'm Mohd Sakib"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    // Set larger text size on small screens and normal size on larger screens
    <div className="text-2xl md:text-6xl transition ease duration-300 change fade-in">
      {currenText}
    </div>
  );
};

export default TextChange;
