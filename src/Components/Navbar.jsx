

import { NavLink } from "react-router-dom";
import Logo from "./Logo";



const Navbar = () => {
    return (
        <div className="container mx-auto">
            

            <div className="navbar flex flex-col md:flex-row">
                <div className="flex-1">
                    <a className=" normal-case"><Logo></Logo></a>
                </div>
                <div className="flex pt-4 items-center">
                    <ul className="flex items-center">
                        <li className="mr-4 text-xl"><NavLink to='/'
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                        >Home</NavLink></li>
                        <li className="mr-4 text-xl"><NavLink to='/donation'
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                        >Donation</NavLink></li>
                        <li className="mr-4 text-xl"><NavLink to='/statistics'
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                        >Statistics</NavLink></li>
                        
                        
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;