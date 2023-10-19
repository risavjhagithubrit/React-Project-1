import React, { useState } from 'react';

function WordCounter() {
  const [paragraph, setParagraph] = useState('');
  const [wordCount, setWordCount] = useState(0);

  // Function to update word count
  const updateWordCount = () => {
    const words = paragraph.trim().split(/\s+/);
    setWordCount(words.length);
  };

  // Event handler to update the paragraph and word count
  const handleParagraphChange = (event) => {
    setParagraph(event.target.value);
    updateWordCount();
  };

  return (
    <div>
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        rows="4"
        placeholder="Enter your paragraph here..."
        value={paragraph}
        onChange={handleParagraphChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
