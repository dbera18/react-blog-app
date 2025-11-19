import {createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export function AuthProvider({children}){...}
const[user,setUser] = useState(null);