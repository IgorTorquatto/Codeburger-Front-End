import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import SignUp from './containers/SignUp'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes