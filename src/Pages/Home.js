import React from 'react';
import './Home.css';
import tomCat from '../Images/Tom_Cat_original.webp';

const Home = () => {
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="cardParent px-5 px-10">
                    <div className="card  bg-[rgba(116,87,84,0.75)] shadow-xl">
                        <figure>
                            <img src={tomCat} alt="tom" className="rounded-xl h-80 w-96 md:w-64" />
                        </figure>
                        <div className="card-body text-center ">
                            <p className="text-xl p-0 m-0">Punk Rats Club</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white text-center py-3">Mint Now</h1>
                        <div className='mintQuantitySec'>
                            <div className='p-3'>
                                <p className='text-[#989eaa]' >Price: <span className='text-white' > 0.01 </span>  <span className='text-[#f97316]'> ETH</span></p>
                                <p className="py-1 text-[#989eaa]">Total Price: <span className='text-white' > 0.01 </span> <span className='text-[#f97316]'> ETH</span></p>

                                <p className="p-5 flex text-[#989eaa]"> Select Quantity:
                                    <span className='quantityCounter px-3' >
                                        <span className='cursor-pointer bg-[#8b1716]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg>
                                        </span>
                                        <span className='px-3' >1</span>
                                        <span className='cursor-pointer bg-[#dc2626]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>
                                        </span>
                                    </span>
                                </p>
                                <button className="bg-[#b91c1c] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-xl">MINT</button>

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