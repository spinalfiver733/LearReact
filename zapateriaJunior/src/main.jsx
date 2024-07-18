import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { VentasShoes } from './VentasShoes';
//import { CounterApp } from './CounterApp';
//import { ShoesShopping } from './shoesShopping';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/*<CounterApp value={10}/>*/}
        <VentasShoes/>
    </React.StrictMode>
);
