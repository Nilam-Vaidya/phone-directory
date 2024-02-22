import React, {Component} from 'react';
import Header from './Header'
import './AddSubscriber.css'

class AddSubscriber extends Component {
    render(){
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="body-container">
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label><br/>
                        <input id="name" type='text' className='input-control'></input><br/>
                        <label  htmlFor='phone' className='label-control'>Phone:</label><br/>
                        <input id="phone" type='text' className='input-control'></input><br/>
                    </form>
                    <div>
                        <span className='subscriber-add-info'>Subscriber to be added:</span><br/>
                        <span className='subscriber-info'>name:</span><br/>
                        <span className='subscriber-info'>phone:</span>
                    </div>
                    <button className='custom-btn add-btn'>Add</button>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;