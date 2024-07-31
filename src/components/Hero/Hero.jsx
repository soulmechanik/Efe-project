import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showFeedbackInput, setShowFeedbackInput] = useState(false);

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
        setShowFeedbackInput(false);
      } else {
        setError('Not a homograph or no multiple definitions found.');
        setDefinitions([]);
        setShowFeedbackInput(true);
      }
    } catch (err) {
      setError('Error fetching definitions');
      setDefinitions([]);
      setShowFeedbackInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDefinitions();
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Add code to submit feedback to a database or API
    setFeedback('');
    setShowFeedbackInput(false);
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
          {error && (
            <div>
              <p className="error">{error}</p>
              <p>
                This word is not a Homograph in our dictionary.<br/> If you're sure it is a homograph, please send us the word and definition.<br/> We'll definitely work on it as soon as possible.
              </p>
              {showFeedbackInput && (
                <form onSubmit={handleFeedbackSubmit}>
                  <input
                    type="text"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Provide feedback (e.g. this word is a homograph with definition XYZ)"
                  />
                  <button type="submit">Submit Feedback</button>
                </form>
              )}
            </div>
          )}
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
          <Link to="/all-words">
            <button>View All Words</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;