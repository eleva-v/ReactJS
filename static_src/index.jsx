
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField'
//let messages = ['Привет', 'Как дела?'];
//const MessageComponent = (props) => <div>{props.text}</div>;
//const MessageField = (props) => {
//    return props.messages.map(message => <MessageComponent text={ message } />);
//};

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
