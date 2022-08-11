import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import NivoFunnel from './components/NivoFunnel';
import funnelData from './components/funnelData';

function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column parent-container"><NivoFunnel data={funnelData} /></div>
        <div className="column parent-container"><NivoFunnel data={funnelData} /></div>
        <div className="column parent-container"><NivoFunnel data={funnelData} /></div>
      </div>
      </div>  
  );
}

export default App;
