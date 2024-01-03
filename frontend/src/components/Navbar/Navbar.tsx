import {
  Button,
  DarkThemeToggle,
  Navbar as FlowbiteNavbar,
} from 'flowbite-react';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';

export const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <FlowbiteNavbar className="absolute w-full z-50 top-0 right-0" border>
      <FlowbiteNavbar.Brand>
        <h1 className="text-xl">Ryan's Fancy Todo App</h1>
      </FlowbiteNavbar.Brand>
      <span className="flex items-center justify-center gap-8">
        <DarkThemeToggle />
        {user && <Button onClick={logout}>Logout</Button>}
      </span>
    </FlowbiteNavbar>
  );
};
