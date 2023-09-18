import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/blog', name: 'Blog' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];


    return (
        <nav className=" bg-slate-200 justify-center ">
            <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>

                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu ></AiOutlineMenu>
                }





            </div>


            <ul className={`md:flex  shadow-xl duration-1000 md:static absolute  ${open ? 'top-8' : '-top-60'}`}>

                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }


            </ul>



        </nav>
    );
};

export default NavBar;