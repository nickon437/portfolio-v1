
import './App.css';
import InfoPane from './components/InfoPane';
import Intro from './components/Intro';
import { UiProvider } from './context/UiContext';

function App() {
  return (
    <UiProvider>
      <div className="App">
        <Intro />
        <InfoPane />
      </div>
    </UiProvider>
  );
}

export default App;
