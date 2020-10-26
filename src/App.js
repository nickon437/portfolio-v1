
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import { UiProvider } from './context/UiContext';

function App() {
  return (
    <UiProvider>
      <div className="App">
        <Intro />
        <About />
      </div>
    </UiProvider>
  );
}

export default App;
