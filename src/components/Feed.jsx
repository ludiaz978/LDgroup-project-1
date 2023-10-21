import React, { useRef, useState } from 'react';
import Comment from '../components/Comment';
import LikeButton from '../components/LikeButton';
import petProfiles from '../data/petProfiles';
import './Feed.css';
import Header from '../components/Header';
import CommentInput from '../components/CommentInput';

function Feed() {
  const feedRef = useRef();

  const scrollToTop = () => {
    if (feedRef.current) {
      feedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [feedItemsWithLikes, setFeedItemsWithLikes] = useState(
    petProfiles.map(pet => ({
      id: pet.id,
      profile: pet,
      comment: pet.comment || 'Random comment',
      userComment: '',
      likeCount: Math.floor(Math.random() * 100), // Generate random like counts
    }))
  );

  const handleCommentSubmit = (comment, itemId) => {
    const updatedFeedItems = feedItemsWithLikes.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          userComment: comment,
        };
      }
      return item;
    });
    setFeedItemsWithLikes(updatedFeedItems);
  };

  const handleLike = (itemId) => {
    const updatedFeedItems = feedItemsWithLikes.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          likeCount: item.likeCount + 1,
        };
      }
      return item;
    });
    setFeedItemsWithLikes(updatedFeedItems);
  };

  return (
    <>
      <Header />

      <div className="feed">
        {feedItemsWithLikes.map(item => (
          <div key={item.id} className="feed-item">
            <img src={item.profile.image} alt={item.profile.name} />
            <p>{item.profile.name}</p>
            <Comment text={item.comment} />
            <CommentInput
              onCommentSubmit={(comment) => handleCommentSubmit(comment, item.id)}
            />
            <p className="user-comment">{item.userComment}</p>
            <LikeButton onLike={() => handleLike(item.id)} likeCount={item.likeCount} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Feed;