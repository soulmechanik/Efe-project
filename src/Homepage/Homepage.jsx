import React from 'react'; // Ensure React is imported properly
import Hero from '../../src/components/Hero/Hero'; // Ensure the path to the Hero component is correct
import Header from '../../src/components/Header/Header'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
