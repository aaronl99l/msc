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
            <div className="md:flex">
                <div className="md:shrink-0 justify-center">
                    <p className= "flex w-[100%] my-[5%] p-[2%]" style={{
                        fontSize: "calc(15px + 1vw)",
                        color: "white",
                        filter: "drop-shadow(1px 1px 0px black)",
                        fontWeight: "bold",
                        textAlign: "center",
                        backgroundColor: "black",
                        filter: "drop-shadow(3px 3px 5px black)"
                    }}>Come check out our store in person or online!</p>

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
                <div className="flex w-[100%] lg:justify-center">
                   
                    <iframe className="my-[5%]" width="600" height="400" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNY3BydRD54kRS4KB9Dw6ik8&key=AIzaSyCWNzRf3Q9H_mB3LqhskSeAhodJs1Odgqw" style={{
                        border: "none",
                        borderRadius: "8px",
                        
                    }}></iframe> 
                </div>   
            </div>
            <div className="flex w-[100%] justify-center">
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
)}

export default Location;