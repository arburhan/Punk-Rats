import React from 'react';
import './Home.css';
import tomCat from '../Images/Tom_Cat_original.webp';
import { useState } from 'react';
import { ethers } from 'ethers';
import { ABI } from './Shared/ABI';


const Home = ({ getAddress }) => {
    console.log(getAddress)
    let [number, setNumber] = useState(1);
    let [totalPrice, setTotalPrice] = useState(0.1);
    const [count, setCount] = useState(0);
    const ContactAddress = "0x90d3Ebb0F4e98D3e759EF993eF78e3CFE582734C"; //test
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
    // GET TOTAL COUNT
    async function getTokenCount() {
        const testNode = "https://rinkeby.infura.io/v3/22dc00a515804b3fb98cff185e0a3f32"
        const mainNode = "https://mainnet.infura.io/v3/22dc00a515804b3fb98cff185e0a3f32"
        const provider = new ethers.providers.JsonRpcProvider(mainNode)
        const contract = new ethers.Contract(ContactAddress, ABI, provider);
        const result = await contract.tokenCounter();
        setCount(result.toNumber());
    }
    getTokenCount();
    const handleMint = async () => {
        if (getAddress) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(ContactAddress, ABI, signer);
                const gas = 250000 * 5;
                let Price = totalPrice.toFixed(1);
                const options = { value: ethers.utils.parseEther(Price), gasLimit: gas };
                let x = await contract.createCollectible(number, options);
                console.log(x)

                setTimeout(getTokenCount, 5000);
                console.log('Mint succcessssssss')
            }
            catch (err) {
                console.warn(err);
            }
            console.log("mint")
        }
        else {
            console.error("Connect Wallet");
        }

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

                                <p className="py-5 text-white">{count} out of 10,000 minted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;