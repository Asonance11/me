import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.png"
        alt="Logo"
        width={50}
        height={50}
        className="hidden dark:block"
      />
    </>
  );
};

export default Logo;
