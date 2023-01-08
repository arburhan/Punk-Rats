import { ethers } from 'ethers';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ getAddress, setGetAddress }) => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer;
    async function maskConnector() {
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        const accountAddress = await signer.getAddress();
        if (accountAddress) {
            setGetAddress(accountAddress);
        }
        else {
            console.warn('nah');
        }
    }
    async function maskDisConnector() {
        setGetAddress(null)
        console.log("log out");
    }

    return (
        <section className='px-1 md:px-12' >
            <div className="navbar">
                <div className="navbar-start">

                    <Link to='' className="btn btn-ghost normal-case text-xl text-white">Punk Rats Club</Link>
                </div>

                <div className="navbar-end gap-8">

                    {
                        getAddress &&
                        <span className='bg-white p-3 text-black rounded-md' >
                            {getAddress.slice(0, 4) +
                                "..." +
                                getAddress.slice(getAddress.length - 4, getAddress.length)}
                        </span>

                    }

                    {getAddress === null ?
                        <Link to='' onClick={maskConnector} className="text-white rounded-2xl connectButton capitalize border-0">Connect Wallet</Link>
                        : <Link to='' onClick={maskDisConnector} className="text-white rounded-2xl connectButton capitalize border-0">Log Out</Link>}

                </div>
            </div>
        </section>
    );
};

export default Navbar;