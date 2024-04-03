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
        console.log("U suck!! :3");
    }
    return(
        <div>
            <div className="flex w-[100%]">
                <div className="w-[50%]">
                    <p className= "my-[5%] px-[15%] pt-[0%]" style={{
                        fontSize: "2vw",
                        color: "white",
                        filter: "drop-shadow(1px 1px 0px black)",
                        fontWeight: "bold",
                        textAlign: "center",
                        backgroundColor: "black",
                        filter: "drop-shadow(3px 3px 5px black)"
                    }}>Come check out our store in person or online!</p>
                    
                    <button className="mx-[35%]" onClick={sayHello} style={{
                        backgroundColor: "red",
                        borderRadius: "8px",
                        height: "10vh",
                        width: "20vw",
                        color: "white",
                        fontWeight: "bold",
                        filter: "drop-shadow(2px 2px 3px black)"
                    }}>ONLINE</button>
                </div>
                <div className="flex w-[50%] mr-[5px]">
                   
                <iframe className="mx-[5%] my-[5%]" width="600" height="400" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNY3BydRD54kRS4KB9Dw6ik8&key=AIzaSyCWNzRf3Q9H_mB3LqhskSeAhodJs1Odgqw" style={{
                    border: "none",
                    borderRadius: "8px",
                    
                }}></iframe> 
                </div>
            </div>
        </div>
)}

export default Location;