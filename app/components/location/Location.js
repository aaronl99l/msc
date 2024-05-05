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
        <div className="h-[100vh] md:mt-[200px] lg:mt-[200px] 2xl:mt-[200px]">
            
            <div className="md:flex md:w-[100%] md:gap-4 md:h-[42vh] justify-center">
                    <div className="position-relative max-md:h-[30vh] md:flex md:w-[38%] md:shrink-0 justify-center md:border-solid md:border-black md:border-[7px]" style={{
                        backgroundColor: "gray",
                        }}>
                        <div className="">
                            <img src="/assets/bg_imgs/horseman-war.jpg" style={{
                                opacity: "0.6",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                objectFit: "cover"
                            }}></img>
                        </div>
                        
                        <div className="w-[100%] h-[18vh] md:my-[15%] md:mx-[5%] justify-center">
                            <div className="justify-center" >
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

                <div className="flex md:w-[58%] w-[100%] my-[4%] md:my-[0%] justify-center" style={{
                    }}>
                    
                        <iframe className="w-[100%] md:h-[100%] md:border-solid md:border-black md:border-[7px]" width="400" height="400" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNY3BydRD54kRS4KB9Dw6ik8&key=AIzaSyCWNzRf3Q9H_mB3LqhskSeAhodJs1Odgqw" style={{

                        }}></iframe> 
                </div>  
            </div>

                <div className="flex w-[100%] justify-center">
                    <div className="w-[97%] position-relative md:mt-[0.75%] md:border-solid md:border-black md:border-[7px] justify-center" style={{
                        backgroundColor: "gray"
                    }}> 
                        <div className="">
                            <img src="/assets/bg_imgs/warhmr.jpg" style={{
                                opacity: "0.6",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                objectFit: "cover"
                            }}></img>
                        </div>
                        <div className="" style={{
                            textAlign: "center"
                            }}>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Monday   -----   -----   9:00am - 6:00pm</p>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Tuesday  -----   -----   9:00am - 6pm</p>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Wednesday  -----   -----   9:00am - 6pm</p>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Thursday  -----   -----   9:00am - 6pm</p>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Friday  -----   -----   9:00am - 6pm</p>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Saturday  -----   -----   9:00am - 6pm</p>
                            <p className="" style={{
                                fontSize: "calc(15px + 1vw)",
                                color: "white",
                                filter: "drop-shadow(2px 2px 5px black)",
                                fontWeight: "bold",
                            }}>Sunday  -----   -----   9:00am - 6pm</p>       
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Location;