
import './App.css';
import User from './card'
import Icon_img from './images/Icon.png'
import Icon1_img from './images/Icon1.png'
import Icon2_img from './images/Icon2.png'

import Userfeedback from './user.feedbeck'

function App() {
  return (
    <div className="App">
      <h1 className='apptitle'>Jannat Liza</h1>
      <section className='appcontainer'>
        <Userfeedback username ="Icon">
          <User image={Icon_img} date="12/02/25" msg='I am Icon'/>
        </Userfeedback>
        <Userfeedback username ="Icon1">
          <User image={Icon1_img} date="12/01/25" msg="twingle little star"/>
        </Userfeedback>

        <Userfeedback username = "Icon2">
          <User image={Icon2_img} date="11/23/25" msg="Need more rest" />
        </Userfeedback>
      </section>


    </div>
  );
}

export default App;