import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    
        return () => (document.body.style.overflow = 'unset');
    }, [isOpen]);

    
    return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <nav className="flex items-center justify-between py-6 bg-white container mx-auto px-4">
            <div className="flex items-center flex-shrink-0 mr-6">
                <a href="/">
                    <img src="assets/images/wizardshot-logo.svg" className="w-36 md:w-24 lg:w-36" />
                </a>
            </div>
            <div className="block md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 text-black">
                    {   isOpen ?
                        <img src="assets/icons/close.svg" className="cursor-pointer" />
                        :
                        <img src="assets/icons/menu.svg" className="cursor-pointer" />
                    }
                </button>
            </div>
            <div className="hidden md:flex ">
                <ul className="flex text-md items-center justify-center gap-6">
                    <li>
                        <a href="#" className="inline-block mt-0 text-gray-700 underline text-sm lg:text-lg">Home</a>
                    </li>
                    <li>
                        <a href="#" className="inline-block mt-0 text-black hover:underline opacity-60 text-sm lg:text-lg">Features</a>
                    </li>
                    <li>
                        <a href="#" className="inline-block mt-0 text-black hover:underline opacity-60 text-sm lg:text-lg">About</a>
                    </li>
                    <li>
                        <a href="#" className="inline-block mt-0 text-black hover:underline opacity-60 text-sm lg:text-lg">Help Center & Community</a>
                    </li>
                </ul>
            </div>

            <div className="hidden md:flex gap-2 items-center">
                <a href="#" className="text-[#666666] text-sm hover:underline lg:text-lg">Login</a>
                <div className='relative'>
                    <div className="absolute -top-4 right-5 text-xs">
                        <p className="font-bold">100% free, forever 🤑</p>
                    </div>
                    <a href="#" className=" ">
                        <button className="bg-black hover:bg-gray-700 text-white rounded-lg text-center flex px-4 py-2 justify-center items-center text-sm lg:text-lg">
                            <img src="assets/icons/chrome-icon.svg" className="w-4 h-4 inline-block mr-1" />
                            Install Wizardshot
                        </button>
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white flex flex-col">
                    <div className='border-b-2 border-gray-200'>
                        <div className="py-6 container mx-auto px-4 flex items-center justify-between">
                            <a href="/">
                                <img src="assets/images/wizardshot-logo.svg" className=" w-36" />
                            </a>
                            <button className='px-3' onClick={() => setIsOpen(false)}>
                                <img src="assets/icons/close.svg" alt="Close" className="cursor-pointer w-4" />
                            </button>
                        </div>
                    </div>
                    <ul className="text-md p-5 border-b-2 border-gray-200">
                        <li><a href="#" className="block text-gray-700 underline mb-8">Home</a></li>
                        <li><a href="#" className="block text-black opacity-60 mb-8">Features</a></li>
                        <li><a href="#" className="block text-black opacity-60 mb-8">About</a></li>
                        <li><a href="#" className="block text-black opacity-60 mb-8">Help Center & Community</a></li>
                        <li><a href="#" className="block text-black opacity-60 mb-4">Login</a></li>
                    </ul>
                    <div className="flex justify-center items-center py-4">
                    <div className='relative'>
                        <div className="absolute -bottom-4 right-5 text-xs">
                            <p className="font-bold">100% free, forever 🤑</p>
                        </div>
                        <a href="#" className=" ">
                            <button className="bg-black hover:bg-gray-700 text-white rounded-lg text-center flex px-4 py-2 justify-center items-center">
                                <img src="assets/icons/chrome-icon.svg" className="w-4 h-4 inline-block mr-1" />
                                Install Wizardshot
                            </button>
                        </a>
                    </div>
                </div>
                </div>
            )}
        </nav>
    </header>
    );
}

export default Navbar;
