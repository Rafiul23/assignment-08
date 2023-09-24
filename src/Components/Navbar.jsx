

import { NavLink } from "react-router-dom";
import Logo from "./Logo";



const Navbar = () => {
    return (
        <div className="px-4">
            

            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case"><Logo></Logo></a>
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