import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let __webpack_nonce__;

// Retrieve the nonce from the <meta> tag
const nonceMetaTag = document.querySelector('meta[name="csp-nonce"]');
if (nonceMetaTag) {
    __webpack_nonce__ = nonceMetaTag.getAttribute('content');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
