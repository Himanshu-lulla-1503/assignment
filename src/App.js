import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {createStore} from 'redux';
import Register from './Register';
import Login from './Login';

const App = () => {
    return (
    <Router>
    <Routes>
        <Route exact path="/"  element={<Register/>} />
        <Route exact path="/login"  element={<Login/>} />
    </Routes>
    </Router>
    )
}

export default App
