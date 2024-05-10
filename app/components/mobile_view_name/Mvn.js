import react from 'react';
import { Bangers } from 'next/font/google';
import Image from 'next/image';
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function Mvn(){
    return(
        <div className='md:hidden position-relative pt-[75px]' style={{
            
        }}>
            <div className='mx-[3%] my-[10%] flex-col justify-between ' style={{

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
                <div className='h-[20vh]' style={{
                    
                }}>
                    <p className={bangers.className} style={{
                        color: "red",
                        fontSize: "6vh",
                        filter: "drop-shadow(1px 1px 0px white)",
                        textAlign: "right"
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