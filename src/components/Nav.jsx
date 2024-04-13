import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" height={30} width={130} />
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <a href={navLink.href} className="font-montserrat leading-normal text-lg text-slate-gray">{navLink.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <img src={hamburger} alt="Menu" height={25} width={25} className="lg:hidden"/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
