import { useState } from "react";
import Link from "../Links/Link";
import { HiMenuAlt1,HiX } from 'react-icons/hi';
const nav = () => {
  const [open,setOpen] = useState(false)
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/gallery', name: 'Gallery' },
    { id: 4, path: '/contact', name: 'Contact' },
  ];
  return (
    <nav className="bg-gray-200 p-5 text-black">
     <div className="md:hidden" onClick={()=>setOpen(!open)}>
      {
        open===true ?<HiX className="text-2xl"></HiX> :
        <HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
      }
     
     </div>
      <ul className={`md:flex duration-1000 absolute md:static
      ${open ? 'top-14':'-top-60' }
      bg-gray-200 px-6`}>
      {
        routes.map(route =><Link key={route.id} route={route}></Link>)
      }
      </ul>
    </nav>
  );
};

export default nav;