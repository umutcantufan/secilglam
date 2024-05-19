import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/search';

const SearchComponent = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.search.search);

  const handleSearch = () => {
    dispatch(searchAction(keyword));
  };

  return (
    <div>
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        placeholder="Ara..." 
      />
      <button onClick={handleSearch}>Ara</button>
      <div>
        {searchResults.map(result => (
          <div key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
