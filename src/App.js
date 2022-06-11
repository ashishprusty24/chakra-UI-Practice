
import './App.css';
import WithSubnavigation from './components/navbar.tsx';
import SidebarWithHeader from './components/Sidebar.tsx'
function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <SidebarWithHeader/>
    </div>
  );
}

export default App;