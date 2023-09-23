import { useState } from "react";
import Link from "../LInk/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {

  const [open, setOpen] = useState([]);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'Not Found' },
  ];

  return (
    <nav>
      <div className="md:hidden mt-10" onClick={() => setOpen(!open)}>
        {
          open === true ? <AiOutlineMenu className="text-4xl mx-auto bg-emerald-400 w-full"></AiOutlineMenu> 
          : <AiOutlineCloseCircle className="mx-auto text-4xl bg-emerald-400 w-full"></AiOutlineCloseCircle>
        }
      
      </div>
      <ul className={`md:flex gap-5 justify-center w-20 mx-auto ${open ? 'bg-red-50' : 'hidden'} border-2 duration-1000`}>
      {
        routes.map(route => <Link key={route.id} route={route}></Link>)
      }
      </ul>
    </nav>
  );
};

export default Navbar;