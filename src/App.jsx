import './App.css';
import RenderLeftBar from './components/left-bar'
import RenderCenter from './components/center'
import RenderRightBar from './components/right-bar'
import RenderPlayerBelow from './components/player-below'


function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="main">
          <RenderLeftBar />
          <RenderCenter />
          <RenderRightBar />
        </main>
        <div className="bar">
          <RenderPlayerBelow />
        </div>
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
