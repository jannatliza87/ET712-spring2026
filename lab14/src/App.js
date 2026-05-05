
import './App.css';
import { useState } from 'react';



const messages = [
  'I think, therefore I am',
  'I have a dream',
  'The only thing we have to fear is itself'
]

function App() {
  const [counter, setCounter] = useState(2)

  //Open and Close button
  const[isopen, setisopen] = useState(true)

  return (
    <div className="App">
      <h1 className='title'> Slice card by Jannat Liza </h1>

      <section className='slicewrapper'> 
        <div className='numberWrapper'>
          <div className={counter==1? "active":""}><p>1</p></div>
          <div className={counter==2? "active":""}><p>2</p></div>
          <div className={counter==3? "active":""}><p>3</p></div>
        </div>

        <p className='msg'>Messages {counter} '{messages[counter-1]}'</p>

        <div className='btngriup'>
          <button onClick={function(){if(counter>1) setCounter(counter-1)}}>Previus</button>
          <button onClick= {function(){if(counter<messages.length) setCounter(counter+1)}}>Next</button>
        </div>
     
      </section>

      <h2>Open and Close button</h2>
      <div><p><b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat <button onClick={function(){setisopen(!isopen)}}> REad More </button> </p></div>
      <section>
        {
          isopen &&
          (
            <div className='readmore'>
            <p>Did you know that not even a century ago, few cats lived entirely indoors at all? In fact, for more than 10,000 years, cats have lived outdoor lives, sharing the environment with birds and wildlife. Understanding cats’ place in history and human evolution reveals how very recently domestic cats came indoors and how millions of this species—who we call community cats—continue to live healthy lives outdoors today, as all domestic cats are biologically adapted to do.
        
            </p>
             </div>
          )
        }
      </section>

     </div>
  );
}

export default App;
