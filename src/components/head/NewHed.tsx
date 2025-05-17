"use client"

import { useState } from 'react'
import { Menu, MenuItem, HoveredLink } from '../ui/navbar-menu'
import { ModeToggle } from '../mood/MoodTogol'
import UserDrop from '../user/UserDrop'

const NewHed = () => {
    const [active, setActive] = useState <string | null>(null);
    return (
    
    <div>
        <header className="w-full px-6 py-4 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold text-black dark:text-white"
        >
          vTickets
        </a>

        {/* Nav Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Menu setActive={setActive}>
            <MenuItem item="Home" active={active} setActive={setActive}>
              <HoveredLink href="/">Go to Home</HoveredLink>
            </MenuItem>

            <MenuItem item="Activities" active={active} setActive={setActive}>
              <HoveredLink href="/about">View Activities</HoveredLink>
            </MenuItem>

            <MenuItem item="Events" active={active} setActive={setActive}>
              <HoveredLink href="/upevent">Upcoming Events</HoveredLink>
            </MenuItem>

            <MenuItem item="Contact" active={active} setActive={setActive}>
              <HoveredLink href="/contact">Get in Touch</HoveredLink>
            </MenuItem>
          </Menu>
        </div>

        {/* Tools like Theme Toggle and User Dropdown */}
        <div className="hidden md:flex items-center space-x-3">
          <ModeToggle />
          <UserDrop />
        </div>
      </div>
    </header>

    </div>
  )
}

export default NewHed;