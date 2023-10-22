import React, { useState } from 'react';
import Comment from '../components/Comment';
import LikeButton from '../components/LikeButton';
import petProfiles from '../data/petProfiles';
import Header from '../components/Header';
import CommentInput from '../components/CommentInput';
import PostForm from '../components/PostForm';

function Feed() {
  const [feedItemsWithLikes, setFeedItemsWithLikes] = useState(
    petProfiles.map(pet => ({
      id: pet.id,
      profile: pet,
      comment: pet.comment || 'Random comment',
      userComment: '', /* maybe instead of comment we need to rename this bio or something because it is
                        in the "profile" */
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

  const handlePostSubmit = (newPost) => {
    const updatedFeedItems = [
      {
        id: feedItemsWithLikes.length + 1, // Assign a unique ID
        profile: newPost,
        comment: '',
        userComment: '',
        likeCount: 0,
      },
      ...feedItemsWithLikes,
    ];

    setFeedItemsWithLikes(updatedFeedItems);
  };

  return (
    <>
      <Header />
      <PostForm onPostSubmit={handlePostSubmit} />

      <div className="feed">
        {feedItemsWithLikes.map(item => (
          <div key={item.id} className="feed-item">
            <img src={item.profile.image} alt={item.profile.name} className="pet-image" />
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
