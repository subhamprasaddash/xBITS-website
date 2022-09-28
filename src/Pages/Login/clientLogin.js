import React from 'react'
import Header from '../../Components/Authentication/Header'
import Login from '../../Components/Authentication/Login'

export default function ClientLogin() {
  return (
    <div>
     <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Login/>
    </div>
  )
}
