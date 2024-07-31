import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Allwords.scss';

const AllWords = () => {
  const [allWords, setAllWords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllWords = async () => {
      try {
        const response = await axios.get('https://random-word-api.herokuapp.com/word?number=1000');
        const data = response.data;

        if (Array.isArray(data)) {
          setAllWords(data);
        } else {
          console.error('Unexpected response format');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllWords();
  }, []);

  return (
    <div className="all-words-container">
      <h1>All Words</h1>
      <ul className="word-list">
        {allWords.map((word, index) => (
          <li key={index}>
            <div className="word">{word}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllWords;