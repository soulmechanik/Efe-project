import React from 'react'; // Ensure React is imported properly
import Hero from './components/Hero/Hero'; // Ensure the path to the Hero component is correct
import Header from './components/Header/Header'; // Ensure the path to the Header component is correct

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
