import './App.css';
import { useState } from 'react';


function App() {

  //const[name, setName] = useState('')
  const[inputs, setInputs] = useState({})

  const submitform = function(e){
    e.preventDefault()
    alert(`Entered name = ${inputs.username}\nAge = ${inputs.age}`)
  }

  const handleinputs = function(e){
    const name = e.target.username
    const value = e.target.value
    setInputs(values=>({...values,[name]:value}))
  }

  const [textcomment, setTextcomment] =useState('')
  const submitcomment = function(e){
    setTextcomment (e.target.value)
  }

  const[gender, selectgender] = useState('')
  const selectedgender = function(e){
    selectgender(e.target.value)
  }
  

  return (
    <div className="App">
      <form onSubmit={submitform}> 
        <fieldset>
          <legend> Form in ReactJS</legend>
          <div className='formcontrol'>
          <label for='username'>Enter a name</label> 
          <input
          type='text'
          id='username'
          name='username'
          value = {inputs.username}
          onChange={handleinputs}
          />
        </div>

        <div className='formcontrol'>
            <label for='age'>Enter an age: </label>
            <input
            type='number'
            id='age'
            name='age'
            value={inputs.age}
            onChange={handleinputs}
            />
          </div>
        
        <div className='formcontrol'>
          <label for='comments'>Any suggestions?</label>
          <textarea
          id='comments'
          value={textcomment}
          onChange={submitcomment}
          />
        </div>

        <div className='formcontrol'>
          <label for='g'>select a gender</label>
          <select value={gender} onChange={selectedgender} id='g'>
            <option value='female'>Female</option>
            <option value='Male'>Male</option>
            <option value='Other'>other</option>
          </select>
        </div>
      </fieldset>


        <div className='formcontrol'>          
          <button type='submit'>Submit a form</button>
        </div>
      </form>

    
      <p>Name = {inputs.username}</p>
      <p>age = {inputs.age}</p>
      <p>comments = {textcomment}</p>
      <p>gender= {gender}</p>
    </div>
  );
}

export default App;
