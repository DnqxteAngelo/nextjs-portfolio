"use client"

import React, { useState, useEffect } from 'react'
import ThemeToggler from "./ThemeToggler"
import Logo from "./Logo"
import Nav from './Nav'
import MobileNav from './MobileNav'
import { Separator } from './ui/separator'

export default function Header() {
  return (
    <header className="w-full border-b md:border-0" >
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <Nav />
          <div className='hidden md:flex'>
            <ThemeToggler />
          </div>
          <div className='xl:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  )
}