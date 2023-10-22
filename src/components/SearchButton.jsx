import React, { useState, useEffect } from 'react';

function SearchButton() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [matches, setMatches] = useState([]);
  const [customWidgetValue, setCustomWidgetValue] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setMatches([]); // Clear previous search matches
    }
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const elementsWithText = document.querySelectorAll('*:not(script):not(style):not(iframe)');

    const foundMatches = [];

    elementsWithText.forEach((element) => {
      if (element.textContent.toLowerCase().includes(query)) {
        foundMatches.push(element);
      }
    });

    setMatches(foundMatches);
  };

  useEffect(() => {
    if (matches.length > 0) {
      matches.forEach((match) => {
        const textNodes = [];
        const walker = document.createTreeWalker(match, NodeFilter.SHOW_TEXT, null, false);

        while (walker.nextNode()) {
          textNodes.push(walker.currentNode);
        }

        textNodes.forEach((textNode) => {
          const text = textNode.textContent;
          const highlightedText = text.replace(
            new RegExp(searchQuery, 'gi'),
            (match) => `<mark>${match}</mark>`
          );

          if (highlightedText !== text) {
            const span = document.createElement('span');
            span.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(span, textNode);
          }
        });
      });
    }
  }, [matches, searchQuery]);

  return (
    <div className="search-bar">
      <button onClick={toggleSearch}>Search</button>
      {searchVisible && (
        <div>
          <input
            className='searchbox'
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default SearchButton;