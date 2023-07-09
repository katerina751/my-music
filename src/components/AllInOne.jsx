import '../css/style.css'
import RenderLeftBar from './left-bar'
import RenderCenter from './center'
import RenderRightBar from './right-bar'
import RenderPlayerBelow from './player-below'

function App() {
  return (
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
  )
}
export default App