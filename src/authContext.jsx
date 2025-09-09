import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("users")
        return saved? JSON.parse(saved) : []
    })

    const [currentUser, setCurrentUser] = useState(() => {
        const saved = localStorage.getItem("currentUser")
        return saved ? JSON.parse(saved) : null
    })

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }, [currentUser])

    const signup = ({username, email, password}) => {
        const exists = users.find((u) => u.email === email)
        if (exists) return {error: "Email already exists"} 

        const newUser = { username, email, password, cart: []}
        setUsers((prev) => [...prev, newUser])
        setCurrentUser(newUser)
        return {};
    }

    const login = ({email, password}) => {
        const user = users.find((u) => u.email === email && u.password === password)
        if (!user) return { error: "Invalid credentials"}
        setCurrentUser(user)
        return {};

    }

    const logout = () =>{
        setCurrentUser(null)
    }

    const updateCart = (cart) => {
        setUsers((prev) =>
        prev.map((u) => 
            u.email === currentUser.email ? {...u, cart} : u    
        ))
        setCurrentUser((prev) => ({...prev, cart}))
    }

    return (
        <AuthContext.Provider
          value={{users,currentUser,signup,login,logout,updateCart}}>
            {children}
          </AuthContext.Provider>
    )









}