import React from 'react';
//Componentsand Pages
import Home from './pages/Home'; 
//Global Styling
import GlobalStyles from './components/GlobalStyles';
function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Home/>
    </div>
  );
}

export default App;
