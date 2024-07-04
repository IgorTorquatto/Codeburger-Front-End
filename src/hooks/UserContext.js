import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) =>{
    const user = { name: "Igor", age: 18}
    const Otheruser = { name: "Renato", age: 18}

    return (
        <UserContext.Provider value={{user,Otheruser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () =>{
    const context = useContext(UserContext)

    if(!context){
        throw new Error("useUser must be used with UserContext")
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}