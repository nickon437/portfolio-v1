import './App.css';
import Main from './components/Main';
import { UiProvider } from './context/UiContext';

function App() {
  // const [ui, setUi] = useContext(UiContext);
  
  return (
    <UiProvider>
      <Main />
    </UiProvider>
  );
}

export default App;
