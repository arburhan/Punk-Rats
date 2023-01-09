import { ethers } from 'ethers';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import './Navbar.css';

const Navbar = ({ getAddress, setGetAddress }) => {
    const [isLoading, setIsloading] = useState(false);
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer;
    async function maskConnector() {
        setIsloading(true);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        const accountAddress = await signer.getAddress();
        if (accountAddress) {

            setGetAddress(accountAddress);

        }
        else {
            console.warn('nah');
        }
        setIsloading(false);

    }
    async function maskDisConnector() {
        setGetAddress(null);
    }
    if (isLoading) {
        return <Loading></Loading>;
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

                    {((getAddress !== null) && (getAddress.length !== 0)) ?
                        <Link to='' onClick={maskDisConnector} className="text-white rounded-2xl connectButton capitalize border-0">Log Out</Link>

                        : <Link to='' onClick={maskConnector} className="text-white rounded-2xl connectButton capitalize border-0">Connect Wallet</Link>}

                </div>
            </div>
        </section>
    );
};

export default Navbar;