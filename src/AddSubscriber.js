import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        };
    }

    inputchangedHandler = (e) => {
        const state = this.state;
        state[e.target.id] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0, name: '', phone: ''});
    }

    render(){
        const { name, phone } = this.state;
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="body-container">
                    <Link to='/'><button className='custom-btn'>Back</button></Link>
                    <form className='subscriber-form' onSubmit={this.onFormSubmitted}>
                        <label htmlFor='name' className='label-control'>Name:</label><br/>
                        <input id="name" type='text' className='input-control' onChange={this.inputchangedHandler}></input><br/>
                        <label  htmlFor='phone' className='label-control'>Phone:</label><br/>
                        <input id="phone" type='text' className='input-control' onChange={this.inputchangedHandler}></input><br/>
                    
                        <div>
                            <span className='subscriber-add-info'>Subscriber to be added:</span><br/>
                            <span className='subscriber-info'>name:{name}</span><br/>
                            <span className='subscriber-info'>phone:{phone}</span>
                        </div>
                        <button type="submit" className='custom-btn add-btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;
