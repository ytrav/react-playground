import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Anton',
    lastName: 'Shevchuk'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
)

const button = (
    <div>
        <h1>
            Hello, {formatName(user)}!
        </h1>
        <button onclick={sussy}>
            Pressy pressy
        </button>
    </div>

)

function sussy() {
    alert('Anton is sus')
}

ReactDOM.render(
    button,
    document.getElementById('root')
)