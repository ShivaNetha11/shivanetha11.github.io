import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Switch >
        <
        Route path = "/preview" >
        <
        ResumePreview / >
        <
        /Route> <
        Route path = "/" >
        <
        ResumeForm / >
        <
        /Route> <
        /Switch> <
        /div> <
        /Router>
    );
}

export default App;