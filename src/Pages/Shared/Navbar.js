import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className='px-1 md:px-12' >
            <div className="navbar">
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-xl text-white">Punk Rats Club</a>
                </div>

                <div className="navbar-end">
                    <a className="text-white rounded-2xl connectButton capitalize border-0">Connect Wallet</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;