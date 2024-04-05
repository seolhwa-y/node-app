import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './frontEnd/App';
//import reportWebVitals from './frontEnd/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter 추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <Router>
        <App />
    </Router>
    //</React.StrictMode>
);

//reportWebVitals();
