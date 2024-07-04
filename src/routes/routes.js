import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import Home from '../containers/Home'
import PrivateRoute from './private-route'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes