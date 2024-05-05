'use client'
import React from "react";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import { Bangers } from "next/font/google";
import "react-bootstrap/cjs/Carousel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function Rotator(){
    return(
    <div> 
        <div className="h-[30vh]">
            <Carousel className=" w-[100%] d-block" style={{
                maxBlockSize: "500px",
            }}>
                <CarouselItem style={{
                }}>
                    <Image src="/assets/store_front.jpg" width={800} height={600} alt="Store" className="d-block w-100" style={{
                        objectFit: "cover",
                        objectPosition: "100% 25%",  
                        maxBlockSize: "500px" 
                    }}/> 
                    <CarouselCaption>
                        <h3 className={bangers.className} style={{
                            color: "red",
                            fontSize: "5vw",
                            filter: "drop-shadow(2px 2px 0px black)"
                        }}>In    the    heart     of   Lee,</h3>
                        <p className={bangers.className} style={{
                            color: "red",
                            fontSize: "3vw",
                            filter: "drop-shadow(2px 2px 0px black)"
                        }}>A new story begins!</p>
                    </CarouselCaption>  
                </CarouselItem>
                <CarouselItem>
                    <Image src="/assets/kaiju.jpg" width={800} height={600} alt="Kaiju" className="d-block w-100" style={{
                        objectFit: "cover",
                        objectPosition: "100% 25%",  
                        maxBlockSize: "500px" 
                    }}/>
                    <CarouselCaption>
                        <h3 className={bangers.className} style={{
                            color: "red",
                            fontSize: "5vw",
                            filter: "drop-shadow(2px 2px 0px black)"
                        }}>Bringing   you  the   classics</h3>
                        <p className={bangers.className} style={{
                            color: "red",
                            fontSize: "3vw",
                            filter: "drop-shadow(2px 2px 0px black)"
                        }}>Mythic Legions, Kaiju, Warhammer</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <Image src="/assets/comics.jpg" width={800} height={600} alt="Comics" className="d-block w-100" style={{
                        objectFit: "cover",
                        objectPosition: "100% 25%",  
                        maxBlockSize: "500px" 
                    }}/>
                    <CarouselCaption>
                        <h3 className={bangers.className} style={{
                            color: "red",
                            fontSize: "5vw",
                            filter: "drop-shadow(2px 2px 0px black)"
                        }}>And   More!</h3>
                        <p></p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </div>    
    </div>
)}

export default Rotator;