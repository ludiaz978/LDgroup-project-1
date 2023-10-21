import React, { useState } from 'react';

function CommentInput({ onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CommentInput;