import React, {Component} from 'react';
import Header from './Header';
import './App.css'

class App extends Component{
  render(){
    let subscribers= [
      {
        id:1,
        name:"nilam",
        phone: "123456789"
      },
      {
        id:2,
        name:"vishal",
        phone:"987654321"
      }
    ]
  return (
    
    <div className='body-container'>
      <Header/>
      <button className=' custom-btn add-btn'>Add</button>
      <div className='grid-container heading-container'>
        <span className='name-heading grid-item'> Name </span>
        <span className='phone-heading grid-item'> Phone </span>
      </div>
      {
        subscribers.map(sub => {
          return <div className='grid-container' key={sub.id}>
          <span className='grid-item'>{sub.name}</span>
          <span className='grid-item'>{sub.phone}</span>
          </div>
        })
      }
      
    </div>
  );
}
}

export default App;
