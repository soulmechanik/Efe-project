import React, { useState } from 'react';
import axios from 'axios';
import './Hero.scss';

const Hero = () => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState(null);
  const [allWords, setAllWords] = useState([]);

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const fetchDefinitions = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data;

      if (data.length > 0 && data[0].meanings.length > 1) {
        setDefinitions(data);
        setError(null);
      } else {
        setError('Not a homograph or no multiple definitions found.');
        setDefinitions([]);
      }
    } catch (err) {
      setError('Error fetching definitions');
      setDefinitions([]);
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDefinitions();
  };

  const handleViewAllWords = () => {
    fetchAllWords();
  };

  return (
    <div className="hero_container">
      <div className="hero_wrapper">
        <div className="hero">
          <h1>Homograph Detector</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={word}
              onChange={handleInputChange}
              placeholder="Enter a word"
            />
            <button type="submit">Check</button>
          </form>
          {error && <p className="error">{error}</p>}
          {definitions.length > 0 && (
            <div className="definitions">
              <h2>The word "{word}" has {definitions.length} homographs:</h2>
              {definitions.map((def, index) => (
                <div key={index} className="definition">
                  <h3>{def.word}</h3>
                  {def.meanings.map((meaning, idx) => (
                    <div key={idx}>
                      <h4>{meaning.partOfSpeech}</h4>
                      <ul>
                        {meaning.definitions.map((d, i) => (
                          <li key={i}>{d.definition}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          <button onClick={handleViewAllWords}>View All Words</button>
          {allWords.length > 0 && (
            <div className="all-words">
              <h2>All Words:</h2>
              <ul>
                {allWords.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;