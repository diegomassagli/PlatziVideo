import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld'


// ReactDOM.render tiene dos partes: el componente y donde lo voy a empujar
ReactDOM.render(<HelloWorld />, document.getElementById('app'));