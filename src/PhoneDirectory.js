import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const useCustomNavigate = () => {
//     const navigate = useNavigate();

//     const customNavigate = (path) => {
//         navigate(path);
//     };

//     return customNavigate;
// };

class PhoneDirectory extends Component {
    constructor(){
        super();
        this.state ={
            subscriberList:[{
                id:1,
                name:'nilam',
                phone:'11111111111'
            },
            {
                id:2,
                name:'nilima',
                phone:'7898789'
            }]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscriberList =this.state.subscriberList;
        let subscriberIndex=0;
        subscriberList.forEach(function(subscriber, index){
            if(subscriber.id === subscriberId){
                subscriberIndex=index;
            }
        },this);
        let newSubscriber=subscriberList;
        newSubscriber.splice(subscriberIndex,1);
        this.setState({subscriberList:newSubscriber});
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        // this.props.navigate('/');
        // this.navigate('/');
    }

    // navigate = useCustomNavigate(); // Use the custom hook to get the navigate function


    render(){
        return(
            <Router>
                <div className='main-container'>
                    <Routes>
                        <Route path="/" element={<ShowSubscribers subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                        <Route path="/add" element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;
