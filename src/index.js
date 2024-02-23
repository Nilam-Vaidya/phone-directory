import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowSubscribers from './ShowSubscribers';
import reportWebVitals from './reportWebVitals';
import './Common/common.css'
import AddSubscriber from './AddSubscriber';
import PhoneDirectory from './PhoneDirectory';


// ReactDOM.render( <AddSubscriber/>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<PhoneDirectory/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
