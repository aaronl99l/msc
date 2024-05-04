import React from "react";
import { Bangers } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function About(){
return(
    <div className="h-[100vh] w-[100%]">
        <div className="md:flex w-[100%] h-[35vh] justify-center">

            <div className="w-[100%] flex md:w-[50%] justify-center">
                <Image className="w-[75%] md:[50%] h-[100%] justify-center" src="/assets/store_front.jpg" width={600} height={1200} alt="Place Holder Image"
                style={{
                    borderRadius: "5px",
                    objectFit: "cover",
                    boxShadow: "10px 10px 1px red, -10px -10px 1px purple",
        

                }}/>
            </div>

            <div className=" md:w-[50%] mx-[5%]">
                
                <p className='' style={{
                    fontSize: "calc(18px + 4vh)",
                    color: "red",
                    filter: "drop-shadow(1px 1px 0px black)",
                    fontWeight: "bold",  
                }}>
                    The   Story   Goes
                </p>     
                
                <p className="" style={{
                    fontSize: "calc(12px + 2vh)",
                    color: "white",
                    fontWeight: "bold",
                    filter: "drop-shadow(1px 1px 1px black)"
                }}>
                            As a life long lover of comic books, 
                            toys and all things Sci-Fi, horror and genre related, 
                            it had always been my dream to someday have a shop 
                            where I could feature amazing products that could 
                            spark the excitement inside everyone. This is that shop!
                        </p>
                  
                
            </div>
        </div>
    </div>
)}

export default About;