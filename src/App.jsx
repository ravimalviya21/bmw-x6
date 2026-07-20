import React from 'react';
import Header from './components/layout/Header';
import ScrollCanvas from './components/shared/ScrollCanvas';
import ClosingCTA from './components/ui/ClosingCTA';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollCanvas />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
