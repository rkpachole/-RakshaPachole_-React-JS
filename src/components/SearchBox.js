import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks..."
    />
  );
};

export default SearchBox;
