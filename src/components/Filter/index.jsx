import React, { useState } from 'react';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter-select">Filter by:</label>
      <select id="filter-select" value={selectedFilter} onChange={handleFilterChange}>
        <option value="">Select an option</option>
        <option value="gender">Gender</option>
        <option value="species">Species</option>
        <option value="films">Films</option>
      </select>
    </div>
  );
};

export default Filter;
  