import React from 'react';
import ReactDOM from 'react-dom';// Instalar
import 'bootstrap/dist/css/bootstrap.css'; // Instalar e importar
//import App from './App';
import './index.css';
import './global.css'

//import Badge from './components/Badge'
//import Navbar from './components/Navbar'
//import BadgeNew from './pages/BadgeNew';
//import Badges from './pages/Badges';

import  App from './components/App';

const container = document.getElementById('root');

/*
ReactDOM.render(<Badge 
    firstName="Roy" 
    lastName="Calle" 
    jobTitle="Backend Developer" 
    twitter="rwcalles"
    avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"/>, container);
    */
   ReactDOM.render(<App />, container);
