import React from "react";
import * as ReactDOM from 'react-dom';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    const inputType = 'number';
    const minValue = 5
    return <input style={{ border: '3px solid red' }} type={inputType} min={minValue} />;
}

root.render(<App />);