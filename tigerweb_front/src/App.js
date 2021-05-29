import './App.scss'
import Container from './component/container/Container'


function App() {
  return (
    <div className='grid-container' onLoad={() => window.scroll(0, 5000)}>
      <div id='stars'/>
      <div className="App">
        <Container/>
      </div>
      <div className='TopRight'>

      </div>
    </div>
  );
}

export default App;
