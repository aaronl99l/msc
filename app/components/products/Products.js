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
            <div>
                <div className="flex w-[100%] justify-center">
                    <p className={bangers.className} style={{
                        color: "black",
                        fontSize: "10vh",
                        borderBottomWidth: "10px",
                        borderBottomStyle: "single",
                        borderColor: "black",
                        boxShadow: " 0px 10px 25px yellow"
                    }}>Top Products</p>
                </div>
                <div className="flex w-[100%] justify-center" style={{
                    textAlign: "center"
                }}>
                    <div className="md:flex grid grid-cols-2 gap-4 content-evenly">
                    <div className="justify-center" style={{
                        boxShadow: "0px 0px 7px black",
                        height: "25vh",
                        width: "25vh"
                    }}>
                        <p className={bangers.className} style={{
                            fontSize: "4vh"
                        }}>Mythic Legions</p>
                        <Image  className="" src="/assets/mythleg_wide.jpeg" width={999} height={999} alt="placeholder"/>
                    </div>

                    <div className="justify-center" style={{
                        boxShadow: "0px 0px 7px black",
                        height: "25vh",
                        width: "25vh"
                    }}>
                        <p className={bangers.className} style={{
                            fontSize: "4vh"
                        }}>Warhammer</p>
                    </div>

                    <div className="justify-center" style={{
                        boxShadow: "0px 0px 7px black",
                        height: "25vh",
                        width: "25vh"
                    }}>
                        <p className={bangers.className} style={{
                            fontSize: "4vh"
                        }}>Comics</p>
                        <Image src="/assets/comics_wide.jpeg" width={300} height={250} alt="placeholder" style={{
                            objectFit: "cover"
                        }}/>
                    </div>

                    <div className="justify-center" style={{
                        boxShadow: "0px 0px 7px black",
                        height: "25vh",
                        width: "25vh"
                    }}>
                        <p className={bangers.className} style={{
                            fontSize: "4vh"
                        }}>Godzilla/Kaiju</p>
                        <Image  className="" src="/assets/kaiju.jpg" width={999} height={999} alt="placeholder"/>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default Products;