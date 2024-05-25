

import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TbPhoneCalling } from "react-icons/tb";

export default function Widget() {
    return (
        <div className="flex justify-center items-center p-6 bg-zinc-50 dark:bg-zinc-800 min-h-screen">
            <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden">
                <div className="bg-orange-500 dark:bg-orange-700 p-8 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-white font-bold text-xl mb-2">Contact Us</div>
                        <p className="text-white text-base">
                        <CiLocationOn size={30} /> 32, Avenue de Newyork<br />
                            32904 Newyork
                            
                        </p>
                        <p className="text-white text-base mt-4">
                            hello@loremipsum.com
                            <CiMail size={30} />
                        </p>
                        <p className="text-white text-base mt-4">
                            +3356 1589 2105
                            <TbPhoneCalling size={30} /><br />
                           
                        </p>
                    </div>
                </div>
                <div className="p-8 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-zinc-900 dark:text-white font-bold text-xl mb-2">Get in Touch</div>
                        <p className="text-zinc-700 dark:text-zinc-400 text-sm">Feel free to drop us a line below!</p>
                        <form action="#" method="POST">
                            <div className="mt-4">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    className="mt-1 block w-full rounded-md bg-zinc-100 dark:bg-zinc-800 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" 
                                />
                            </div>
                            <div className="mt-4">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Your Email" 
                                    className="mt-1 block w-full rounded-md bg-zinc-100 dark:bg-zinc-800 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" 
                                />
                            </div>
                            <div className="mt-4">
                                <textarea 
                                    rows="3" 
                                    name="message" 
                                    placeholder="Type your message here..." 
                                    className="mt-1 block w-full rounded-md bg-zinc-100 dark:bg-zinc-800 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" 
                                />
                            </div>
                            <div className="mt-8">
                                <button 
                                    type="submit" 
                                    className="bg-orange-500 dark:bg-orange-700 hover:bg-orange-600 dark:hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



{/* // import React from 'react';

// export default function Widget() {
//     return (
//         <div className="flex flex-col md:flex-row bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg shadow-lg p-6 md:p-10">
//             <div className="bg-white p-6 rounded-lg md:w-1/2">
//                 <h2 className="text-2xl font-bold text-zinc-800 mb-4">Contact us</h2>
//                 <form className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-zinc-700">Name*</label>
//                         <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md" placeholder="Name*" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-zinc-700">Phone Number</label>
//                         <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md" placeholder="Phone Number" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-zinc-700">Email*</label>
//                         <input type="email" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md" placeholder="Email*" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-zinc-700">Message</label>
//                         <textarea className="mt-1 block w-full p-2 border border-zinc-300 rounded-md" placeholder="Message"></textarea>
//                     </div>
//                     <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md">Send</button>
//                 </form>
//             </div>
//             <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg md:w-1/2 flex flex-col justify-center">
//                 <div className="space-y-4">
//                     <div className="flex items-center">
//                         <img alt="location" src="https://placehold.co/20x20" className="mr-2" />
//                         <p>Beside old pension office, Madina colony, Jahanuma, Hyderabad - 500053.</p>
//                     </div>
//                     <div className="flex items-center">
//                         <img alt="email" src="https://placehold.co/20x20" className="mr-2" />
//                         <p>hello@funsome.in</p>
//                     </div>
//                     <div className="flex items-center">
//                         <img alt="phone" src="https://placehold.co/20x20" className="mr-2" />
//                         <p>+91 8142923712</p>
//                     </div>
//                     <div className="flex space-x-4 mt-4">
//                         <img alt="facebook" src="https://placehold.co/30x30" />
//                         <img alt="youtube" src="https://placehold.co/30x30" />
//                         <img alt="instagram" src="https://placehold.co/30x30" />
//                         <img alt="dribbble" src="https://placehold.co/30x30" />
//                         <img alt="behance" src="https://placehold.co/30x30" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// } */}

