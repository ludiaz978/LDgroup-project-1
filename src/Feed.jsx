import React from 'react';

function Feed() {
  // Sample pet profiles (you can use your own data)
  const petProfiles = [
    { id: 1, name: 'Snickers', image: 'image-url-1', bio: 'Age, owner, hobbies' },
    { id: 2, name: 'Buddy', image: 'image-url-2', bio: 'Age, owner, hobbies' },
    // Add more pet profiles here
  ];

  // Function to generate a random integer
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // Function to create random feed items
  const generateRandomFeedItems = (numItems) => {
    const feedItems = [];
    for (let i = 0; i < numItems; i++) {
      const randomProfile = petProfiles[getRandomInt(petProfiles.length)];
      const randomComment = 'Random comment or like'; // You can make this more dynamic

      feedItems.push({
        profile: randomProfile,
        comment: randomComment,
      });
    }
    return feedItems;
  };

  // Generate random feed items
  const feedItems = generateRandomFeedItems(5); // Adjust the number of items as needed

  return (
    <div className="feed">
      {feedItems.map((item, index) => (
        <div key={index} className="feed-item">
          <img src={item.profile.image} alt={item.profile.name} />
          <p>{item.profile.name}</p>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;