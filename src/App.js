import react, {component} from 'react';
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
      <button>Add</button>
      <div>
        <span> Name </span>
        <span> Phone </span>
      </div>

      <label id="name" htmlFor="name">Name : </label>
      <input type="text" placeholder="your name" defaultValue="Nilam"></input>


    </div>
    
  );
}

export default App;
