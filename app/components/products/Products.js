import React from "react";
import { Bangers } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function Products(){
    return(
        //Outer container, do not touch
        <div>
            <div className="h-[100vh]">
                <div className="flex w-[100%] justify-center mx-auto my-auto">
                    <p className={bangers.className} style={{
                        color: "black",
                        fontSize: "calc(24px + 4vh)",

                        
                    }}>Top Products</p>
                </div>

                <div className="flex w-[100%] justify-center" style={{
                    textAlign: "center"
                }}>
                    <div className="md:justify-between md:flex grid grid-cols-2 gap-4 content-evenly">
                        <div className="justify-center" style={{
                            boxShadow: "0px 0px 7px black",
                            
                        }}>
                            <p className={bangers.className} style={{
                                fontSize: "4vh"
                            }}>Mythic Legions</p>
                            <Image  className="" src="/assets/mythleg_wide.jpeg" width={300} height={250} alt="placeholder" style={{
                                objectFit: "cover",                        
                            }}/>
                        </div>

                        <div className="justify-center" style={{
                            boxShadow: "0px 0px 7px black",

                        }}>
                            <p className={bangers.className} style={{
                                fontSize: "4vh"
                            }}>Warhammer</p>
                        </div>

                        <div className="justify-center" style={{
                            boxShadow: "0px 0px 7px black",

                        }}>
                            <p className={bangers.className} style={{
                                fontSize: "4vh"
                            }}>Weekly Comics </p>
                            <Image src="/assets/comics_wide.jpeg" width={300} height={250} alt="placeholder" style={{
                                objectFit: "cover"
                            }}/>
                        </div>

                        <div className="justify-center" style={{
                            boxShadow: "0px 0px 7px black",

                        }}>
                            <p className={bangers.className} style={{
                                fontSize: "4vh"
                            }}>Godzilla/Kaiju</p>
                            <Image  className="" src="/assets/kaiju.jpg" width={300} height={250} alt="placeholder" style={{
                                objectFit: "cover",
                            }}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default Products;