import React, {Component} from 'react';
import Header from './Header';
import './ShowSubscribers.css'
import {Link} from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

class ShowSubscribers extends Component{
  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }
  
  render(){
    // console.log("render called");
    // let subscribers= [
    //   {
    //     id:1,
    //     name:"nilam",
    //     phone: "123456789"
    //   },
    //   {
    //     id:2,
    //     name:"vishal",
    //     phone:"987654321"
    //   }
    // ]
  return (  
    <div className='body-container'>
      <Header heading='Phone Directory'/>
      <Link to='/add'><button className=' custom-btn add-btn'>ADD</button></Link>
      <div className='grid-container heading-container'>
        <span className='name-heading grid-item'> Name </span>
        <span className='phone-heading grid-item'> Phone </span>
      </div>
      {
        this.props.subscriberList.map(sub => {
          return <div className='grid-container' key={sub.id}>
          <span className='grid-item'>{sub.name}</span>
          <span className='grid-item'>{sub.phone}</span>
          <button className='custom-btn delete-btn' onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button>
          </div>
        })
      }
    </div>
  );
}
}

export default ShowSubscribers;
