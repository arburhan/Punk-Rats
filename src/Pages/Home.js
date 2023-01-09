import React from 'react';
import './Home.css';
import tomCat from '../Images/Tom_Cat_original.webp';
import { useState } from 'react';


const Home = ({ getAddress }) => {
    console.log(getAddress)
    let [number, setNumber] = useState(1);
    let [totalPrice, setTotalPrice] = useState(0.1);
    const handleIncreement = () => {
        if ((number < 10) || (totalPrice < 0.10)) {
            setNumber(number + 1);
            setTotalPrice((parseFloat(totalPrice) + parseFloat(0.1)).toFixed(1));
        }
    }
    const handleDecreement = () => {
        if ((number > 1) || (totalPrice > 0.1)) {
            setNumber(number - 1);
            setTotalPrice((parseFloat(totalPrice) - parseFloat(0.1)).toFixed(1));
        }
    }
    const handleMint = () => {
        console.log("mint")

    }

    return (
        <section>
            <div className="hero min-h-screen">
                <div className="cardParent px-5 md:px-10">
                    <div className="card  bg-[rgba(116,87,84,0.75)] shadow-xl">
                        <figure>
                            <img src={tomCat} alt="tom" className="rounded-xl h-80 w-96 md:w-64" />
                        </figure>
                        <div className="card-body text-center p-2">
                            <p className="text-xl p-0">Punk Rats Club</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white text-center py-3">Mint Now</h1>
                        <div className='mintQuantitySec'>
                            <div className='p-3'>
                                <p className='text-[#989eaa]' >Price: <span className='text-white' > 0.01 </span>  <span className='text-[#f97316]'> ETH</span></p>
                                <p className="py-1 text-[#989eaa]">Total Price: <span className='text-white' >{totalPrice}</span> <span className='text-[#f97316]'> ETH</span></p>

                                <p className="p-5 flex text-[#989eaa]"> Select Quantity:
                                    <span className='quantityCounter px-3' >
                                        <button disabled={number === 1 ? true : false} onClick={handleDecreement} className='cursor-pointer bg-[#dc2626] disabled:bg-[#8b1716]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                            </svg>
                                        </button>
                                        <span className='px-3' >{number}</span>
                                        <button disabled={number === 10 ? true : false} onClick={handleIncreement} className='cursor-pointer bg-[#dc2626] disabled:bg-[#8b1716]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>
                                        </button>
                                    </span>
                                </p>
                                <button onClick={handleMint} className="bg-[#b91c1c] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-xl my-5">MINT</button>

                                <p className="py-5 text-white">0 out of 10,000 minted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;