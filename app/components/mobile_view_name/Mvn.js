import react from 'react';
import { Bangers } from 'next/font/google';
import Image from 'next/image';
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function Mvn(){
    return(
        <div className='md:hidden'>
            <div className='h-[65vh]' style={{

            }}>
                <div className='h-[20vh]'>
                    <p className={bangers.className} style={{
                        color: "red",
                        fontSize: "6vh",
                        filter: "drop-shadow(1px 1px 0px white)"
                    }}>
                        Main Street
                    </p>
                </div>
                <div className='h-[20vh] justify-end'>
                    <p className={bangers.className} style={{
                        color: "red",
                        fontSize: "6vh",
                        filter: "drop-shadow(1px 1px 0px white)",
                     
                    }}>
                        Comics, Toys
                    </p>
                </div>
                <div className='h-[20vh]'>
                    <p className={bangers.className} style={{
                        color: "red",
                        fontSize: "6vh",
                        filter: "drop-shadow(1px 1px 0px white)"
                    }}>
                        & More
                    </p>
                </div>

            </div>
        </div>
)}

export default Mvn;