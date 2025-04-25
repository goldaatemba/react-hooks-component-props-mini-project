import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const getReadTimeEmoji = (minutes) => {
    let emoji = "";
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(boxes);
    }
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getReadTimeEmoji(minutesToRead)}</p>
    </article>
  );
}

export default Article;

  
  