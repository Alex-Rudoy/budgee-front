import React from 'react';
import userStore from '../../store/UserStore';
import Logo from '../Logo/Logo';
import LoggedInNavBar from './LoggedInNavBar/LoggedInNavBar';
import LoggedOutNavBar from './LoggedOutNavBar/LoggedOutNavBar';

export default function Header() {
  return (
    <header className="fixed h-16 w-full flex justify-between items-center px-8 shadow-lg">
      <Logo />
      <div className="">{userStore.isLoggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}</div>
    </header>
  );
}
