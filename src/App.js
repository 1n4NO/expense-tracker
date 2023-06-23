import './App.css';
import AppHeader from './components/AppHeader';
import SankeyContainer from './components/SankeyContainer';
import DataTable from './components/DataTable';
import SankeyController from './components/SankeyController';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <SankeyContainer />
      <DataTable />
      <SankeyController />
    </div>
  );
}

export default App;
