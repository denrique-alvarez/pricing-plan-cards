import './App.css';
import { Card1 } from './components/card-1/Card1';
import { Card2 } from './components/card-2/Card2';
import { Card3 } from './components/card-3/Card3';

function App() {
  return (
    <div className="container">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default App;
