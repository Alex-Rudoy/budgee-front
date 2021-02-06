import React from 'react';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="fixed h-16 w-full flex">
      <Logo />
    </header>
  );
}
