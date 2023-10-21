import React from 'react';

function LikeButton({ onLike, likeCount }) {
  return (
    <button className="like-button" onClick={onLike}>
      Like {likeCount} <span role="img" aria-label="Paw Print">🐾</span>
    </button>
  );
}

export default LikeButton;