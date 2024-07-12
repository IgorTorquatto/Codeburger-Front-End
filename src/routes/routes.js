import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home,Login,Products,SignUp } from '../containers'
import PrivateRoute from './private-route'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/produtos" element={<PrivateRoute element={Products} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes