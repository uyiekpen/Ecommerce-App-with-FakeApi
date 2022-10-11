import React, { PropsWithChildren } from 'react'
import { authData } from './Global/Global'
import {useRecoilValue} from "recoil"
import Home from './Home'
import SignUp from './SignUp'

export const ProtectedRoutes: React.FC<PropsWithChildren>= ({children}) => {
    const user = useRecoilValue(authData)


  return user ? (
    <div>
        <Home/>
    </div>): (
        <div>
            <SignUp/>
        </div>
    )
    
}

