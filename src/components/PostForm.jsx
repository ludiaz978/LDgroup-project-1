import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function PostForm({ onPostSubmit }) {
  const navigate = useNavigate(); // Initialize navigate
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      image: imageUrl,
      name: name,
      description: description,
    };

    // Call the onPostSubmit callback to handle the new post
    onPostSubmit(newPost);

    // Reset form fields
    setImageUrl('');
    setName('');
    setDescription('');

    // After submitting the post, navigate back to the main feed (or any other desired route)
    navigate('/'); // Redirect to the main feed route
  };

  return (
    
    <form onSubmit={handleSubmit} className='centered-form'>
      <h1>Post to feed!!</h1>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;