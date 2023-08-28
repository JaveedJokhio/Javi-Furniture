import './App.css';
import Home from './Components/AllComponents/Home';
import ThemeContext from './Components/ContextWrapeer/ThemeContext.jsx';


function App() {
  return (
    <div className="App">
     
      <ThemeContext>
     <Home/>
      </ThemeContext>
    
    </div>
  );
}

export default App;
