import React from "react";
import * as ReactDOM from 'react-dom';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    let message = "Bye there!";
    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }

    return <h1>{message}</h1>;
}

root.render(<App />);