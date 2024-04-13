import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full sticky flex items-center justify-between py-4">
      <Link href="/">
        <Logo />
      </Link>

      {/* my links */}
      <div className="flex items-center gap-x-2">
        <Link href="mailto:adigunoluwadabira@gmail.com">
          <Mail className="h-5 w-5" />
        </Link>
        <Link href="https://github.com/Asonance11" target="_blank">
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/adigun-samuel-294083247/"
          target="_blank"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
