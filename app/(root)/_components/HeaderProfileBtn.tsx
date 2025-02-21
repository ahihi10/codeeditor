"use client"
import React from 'react'
import {User} from "lucide-react"

import { SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
const HeaderProfileBtn = () => {
  return (
   <>
   <UserButton>
        <UserButton.MenuItems>
            <UserButton.Link 
            label="Profile"
            labelIcon={<User className='size-4'/>}
            href="/profile"/>
        </UserButton.MenuItems>
   </UserButton>
   <SignedOut>
    <SignInButton/>
   </SignedOut>

   </>
  )
}

export default HeaderProfileBtn
