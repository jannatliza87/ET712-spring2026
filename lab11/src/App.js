
import './App.css';
import cat from './image/cat.jpg'

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'olive', textAlign: 'center'}}> Jannat Liza</h1>
      <h2 className='subtitle'> JavaScript XML</h2>
      <p> There is two type of componant in ReactJS</p>
      <ul>
        <li>function</li>
        <li>class</li>
      </ul>
      <figure  className='introimg'>
        <img src={cat}/>
      </figure>
      <footer className='footer'>
        introduction to reactJS @ Jannat Liza - 2026
      </footer>
    
    </div>
  );
}

export default App;
