import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className='px-12' >
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-xl text-white">Punk Rats Club</a>
                </div>

                <div className="navbar-end">
                    <a className=" text-white p-3 rounded-2xl btn  connectButton capitalize ">Connect Wallet</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;