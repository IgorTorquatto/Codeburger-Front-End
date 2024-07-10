import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = async userInfo => {
        setUserData(userInfo)

        //In addition to creating the context of user data, we also record it in the browser's localstorage
        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
    }

    useEffect(() => {
        //asynchronous function to capture user information that is in localStorage
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeburger:userData')

            //If there is already something in localstorage, store it in our state
            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }

        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must be used with UserContext")
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}