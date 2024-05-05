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
            <div className="header flex w-[100%] py-[30px] justify-center">
                <nav className="w-[100%] fixed top-0" style={{
                        boxShadow: "0px 10px 100px black",
                        backgroundColor: "black",
                        zIndex: "99"
                    }}>
                        <div className='flex w-[100%] md:w-[50%] md:mx-[25%] my-[1%] justify-center' style={{
                            borderBottomStyle: "single",
                            borderTopStyle: "none",
                            borderLeftStyle: "none",
                            borderRightStyle: "none",
                            borderWidth: "3px",
                            marginBottom: "0px"
                        
                        }}>
                            <div className="flex w-[100%] gap-[20px] justify-between">

                                <div className=" justify-start my-auto">
                                    <Image className="" src="/assets/logo.jpg" width={60} height={60} alt="Business Logo" style={{
                                        maxHeight: "60px",
                                        maxWidth: "60px"
                                    }}/>
                                </div>

                                <div className="justify-center my-auto hidden lg:block">
                                    <p className={bangers.className} style=
                                    {{
                                        color: "red", 
                                        fontSize: "calc(8px + 2vw)",
                                        filter: "drop-shadow(1px 1px 0px white)"
                                    }}>Main Street Comics Toys & More</p>
                                </div>
                            
                            
                            
                                <div className="justify-end my-auto">
                                    <button onClick={btnShout}>
                                    <Image src="/assets/hamburg_red.png" width={60} height={60} alt="Menu" style={{
                                        maxHeight: "60px",
                                        maxWidth: "60px",
                                    }}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[100%] hidden md:block">
                            <div className='flex gap-[2.5%] justify-center' style={{
                            
                            }}>
                                <Image src="/assets/logos/mythleg.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/gws.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/marvel.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/dc_comics.png" height={60} width={60} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/pkmn.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/mtg.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/starwars.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/dbz.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                                <Image src="/assets/logos/gojira.png" height={50} width={50} alt="temp" style={{
                                    objectFit: "contain",
                                    width: "3vw",
                                    height: "auto"
                                }}/>
                            </div>
                        </div>
                </nav>
            </div>
        </div>

)}

export default Nav;