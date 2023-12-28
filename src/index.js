import React from "react";
import * as ReactDOM from 'react-dom';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    return <h1>Hi there!</h1>;
}

root.render(<App />);