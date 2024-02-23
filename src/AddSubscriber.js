import React, {Component} from 'react';
import Header from './Header'
import './AddSubscriber.css'

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        }
        console.log(this.state);
    }
    inputchangedHandler = (e) => {
        const state = this.state;
        state[e.target.id]=e.target.value;
        this.setState(state);
        console.log(this.state);
        
    }
    render(){
        const {name,phone} = this.state;
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="body-container">
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label><br/>
                        <input id="name" type='text' className='input-control' onChange={this.inputchangedHandler}></input><br/>
                        <label  htmlFor='phone' className='label-control'>Phone:</label><br/>
                        <input id="phone" type='text' className='input-control' onChange={this.inputchangedHandler}></input><br/>
                    </form>
                    <div>
                        <span className='subscriber-add-info'>Subscriber to be added:</span><br/>
                        <span className='subscriber-info'>name:{name}</span><br/>
                        <span className='subscriber-info'>phone:{phone}</span>
                    </div>
                    <button className='custom-btn add-btn'>Add</button>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;