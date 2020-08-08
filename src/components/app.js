import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './title';
import Input from './input';

let text = null;

function formatName(fld) {
    return fld.firstName + '' + fld.lastName;
}

export default class App extends Component {
    
    fld(event) {
    console.log('fold');
    };
    
  render() {
    return (
        <div className="app">
            <div id="html">
                <Title />
                <Input />
            </div>
        </div>
    );
  }
}