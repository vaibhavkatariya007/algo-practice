import './App.css';

import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

import { Button, ThemeButton } from './ui/button';

function App() {
  return (
    <div className="App">
      {/* <CounterOne />
      <CounterTwo /> */}
      <CounterThree />
      <Button>Test Button</Button>
      <ThemeButton>Test Button</ThemeButton>
    </div>
  );
}

export default App;
