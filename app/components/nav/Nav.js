'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Bangers } from "next/font/google";
import { Button } from "react-bootstrap";
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function Nav(){
    function btnShout(){
        console.log("Logging button press");
    }
    return(
        <div>
            <div className="header flex w-[100%] py-[30px]">
                <nav className="flex w-[100%] fixed top-0 h-15" style={{
                        height: "8vh",
                        backgroundColor: "black",
                        zIndex: "99"
                    }}>

                        <div className="flex w-[85%] gap-[10px]">
                            <div>
                                <Image className="py-[5px] px-[5px]" src="/assets/logo.jpg" width={50} height={50} alt="Business Logo" style={{
                                    maxHeight: "50px",
                                    maxWidth: "50px"
                                }}/>
                            </div>

                            <div className="py-[0px] px-[5px]">
                                <p className={bangers.className} style=
                                {{
                                    color: "red", 
                                    fontSize: "calc(8px + 2vw)",
                                    filter: "drop-shadow(1px 1px 0px white)"
                                }}>Main Street Comics Toys & More</p>
                            </div>
                        </div>
                        
                        <div className="flex w-[15%] justify-end">
                            <div className=" px-[10px]">
                                <button onClick={btnShout}>
                                <Image src="/assets/hamburg_red.png" width={50} height={50} alt="Menu" style={{
                                    maxHeight: "35px",
                                    maxWidth: "35px",
                                    margin: "0 auto",
                                    marginTop: "0.5vw"
                                }}/>
                                </button>
                            </div>
                        </div>
                        
                </nav>
                <div className="w-[100%]"></div>
            </div>
        </div>

)}

export default Nav;