'use client'
import React from "react";
import { Inter } from "next/font/google";
import { Bangers } from "next/font/google";
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function Location(){
    function sayHello(){
        console.log("");
    }
    return(
        <div className="h-[100vh]">
            
                <div className="md:flex w-[100%] md:gap-4 md:h-[42vh] md:mt-[4%] justify-center">
                    <div className="position-relative md:flex md:w-[38%] md:shrink-0 justify-center md:border-solid md:border-black md:border-[7px]">
                        <div className="">
                            <img src="/assets/bg_imgs/horseman-war.jpg" style={{
                                opacity: "0.6",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                objectFit: "cover"
                            }}></img>
                        </div>
                        
                        <div className="w-[100%] h-[18vh] md:my-[15%] md:mx-[5%]">
                            <div className="justify-center">
                                <p className="" style={{
                                    fontSize: "calc(15px + 1vw)",
                                    color: "white",
                                    filter: "drop-shadow(1px 1px 3px black)",
                                    fontWeight: "bold",
                                    textAlign: "center"
                                    
                                }}>Come check out our store in person or online!</p>
                            </div>
                            <div className="flex w-[100%] justify-center">
                                <button className="mx-auto" onClick={sayHello} style={{
                                    backgroundColor: "red",
                                    borderRadius: "8px",
                                    height: "8vh",
                                    width: "25vh",
                                    color: "white",
                                    fontWeight: "bold",
                                    filter: "drop-shadow(2px 2px 3px black)"
                                }}>ONLINE</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:w-[58%] w-[100%] my-[4%] md:my-[0%]" style={{
                    }}>
                    
                        <iframe className="w-[100%] md:h-[100%] md:border-solid md:border-black md:border-[7px]" width="400" height="400" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNY3BydRD54kRS4KB9Dw6ik8&key=AIzaSyCWNzRf3Q9H_mB3LqhskSeAhodJs1Odgqw" style={{

                        }}></iframe> 
                    </div>  
                </div>
                    <div className="flex w-[100%] justify-center">
                        <div className="flex w-[97%] position-relative md:mt-[0.75%] md:border-solid md:border-black md:border-[7px]"> 
                            <div className="">
                                <img src="/assets/bg_imgs/warhmr.jpg" style={{
                                    opacity: "0.6",
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    objectFit: "cover"
                                }}></img>
                            </div>
                            <div className="">
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Monday   -----   -----   9:00am - 6:00pm</p>
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Tuesday  -----   -----   9:00am - 6pm</p>
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Wednesday  -----   -----   9:00am - 6pm</p>
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Thursday  -----   -----   9:00am - 6pm</p>
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Friday  -----   -----   9:00am - 6pm</p>
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Saturday  -----   -----   9:00am - 6pm</p>
                                <p className="" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "calc(12px + 0.5vh)"
                                }}>Sunday  -----   -----   9:00am - 6pm</p>
                                
                            </div>
                        </div>
                    </div>
        </div>
)}

export default Location;