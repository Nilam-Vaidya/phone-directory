import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
    constructor(){
        super();
        this.state ={
            subsciberList:[{
                id:1,
                name:'nilam',
                phone:'11111111111'
            },
            {
                id:2,
                name:'nilima',
                phone:'7898789'
            }
        ]
        }
    }
    
    addSubscriberHandler = (newSubscriber)=>{
        let subscriberList=this.state.subsciberList;
        if(subscriberList.length > 0){
            newSubscriber.id=subscriberList[subscriberList.length - 1].id +1;
        }
        else {
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log("phone directory");
        console.log(this.state.subsciberList);
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscribers subsciberList={this.state.subsciberList}/>
        )
    }
}

export default PhoneDirectory;