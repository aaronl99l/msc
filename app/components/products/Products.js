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
            <div className="h-[100vh] my-[200px] md:my-[0%]">
                <div className="flex w-[100%] justify-center mx-auto my-auto">
                    <p className={bangers.className} style={{
                        color: "white",
                        fontSize: "calc(18px + 4vh)",
                        padding: "10px",
                        boxShadow: "10px 10px 1px red, -10px -10px 1px purple",
                        borderRadius: "5px",
                        backgroundColor: "black"
                        
                    }}>Top Products</p>
                </div>

                <div className="flex w-[100%] justify-center" style={{
                }}>
                    <div className="">
                        <div className="" style={{
                        
                        }}>
                            <div className="flex w-[100%] h-[20vh] justify-center position-relative" style={{
                                backgroundColor: "gray"
                            }}>
                                <div className="">
                                    <Image  className="position-absolute opacity-60" src="/assets/mythleg_wide.jpeg" width={2500} height={5000} alt="placeholder" style={{
                                        objectFit: "cover",
                                        height: "100%",
                                        width: "100%"                      
                                    }}/>
                                </div>

                                <div className="ml-[5%]">
                                <p className={bangers.className} style={{
                                        fontSize: "4vh",
                                        textAlign: "left",
                                        color: "white",
                                        filter: "drop-shadow(2px 2px 5px black)"
                                    }}>Mythic Legions</p>
                                    <p className=" md:text-3xl mx-auto" style={{
                                        textAlign: "left",
                                        color: "white",
                                        filter: "drop-shadow(2px 2px 1px black)"
                                    }}>Mythic Legions is a breathtaking fantasy world created by the award-winning Four Horsemen Studios. The Mythic Legions action figure line consists of a wide variety of characters ranging from heroic knights, dwarves, and elves to evil orcs, goblins, trolls, and skeleton soldiers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="" style={{
                        
                    }}>
                        <div className="w-[100%] h-[20vh] justify-center position-relative" style={{
                            backgroundColor: "gray"
                        }}>
                            <div className="">
                                <Image  className="position-absolute opacity-60" src="/assets/bg_imgs/warhmr-2.jpg" width={2500} height={5000} alt="placeholder" style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"                      
                                }}/>
                            </div>

                            <div className="ml-[5%]">
                            <p className={bangers.className} style={{
                                    fontSize: "4vh",
                                    textAlign: "left",
                                    color: "white",
                                    filter: "drop-shadow(2px 2px 2px black)"
                                }}>Warhammer</p>
                                <p className=" md:text-3xl mx-auto" style={{
                                    textAlign: "left",
                                    color: "white",
                                    filter: "drop-shadow(2px 2px 2px black)"
                                }}>Whether you fell gods in the Age of Sigmar or slay vile aliens in 40k, our warhammer inventory is endless. Collect, paint, and battle your way to glory!
                                </p>
                            </div>
                        </div>
                    </div>

                            
                    <div className="" style={{}}>
                        <div className="w-[100%] h-[20vh] justify-center position-relative" style={{
                                backgroundColor: "gray"
                        }}>
                            <div className="">
                                <Image  className="position-absolute opacity-60" src="/assets/comics_wide.jpeg" width={2500} height={5000} alt="placeholder" style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%",                    
                                }}/>
                            </div>

                            <div className="ml-[5%]">
                            <p className={bangers.className} style={{
                                    fontSize: "4vh",
                                    textAlign: "left",
                                    color: "white",
                                    filter: "drop-shadow(2px 2px 2px black)"
                                }}>Weekly Comics!</p>
                                <p className=" md:text-3xl mx-auto" style={{
                                    textAlign: "left",
                                    color: "white",
                                    filter: "drop-shadow(2px 2px 2px black)"
                                }}>Explore our weekly catalogue of comics from Marvel to DC and everything in between. Comics start at $2.99!
                                </p>
                            </div>
                        </div>
                    </div>  
                            

                    <div className="" style={{
                        
                    }}>
                        <div className="w-[100%] h-[20vh] justify-center position-relative" style={{
                            backgroundColor: "gray"
                        }}>
                            <div className="">
                                <Image  className="position-absolute opacity-60" src="/assets/bg_imgs/gojira.jpg" width={2500} height={5000} alt="placeholder" style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"                      
                                }}/>
                            </div>

                            <div className="ml-[5%]">
                            <p className={bangers.className} style={{
                                    fontSize: "4vh",
                                    textAlign: "left",
                                    color: "white",
                                    filter: "drop-shadow(2px 2px 2px black)"
                                }}>Godzilla & Kaiju</p>
                                <p className=" md:text-3xl mx-auto" style={{
                                    textAlign: "left",
                                    color: "white",
                                    filter: "drop-shadow(2px 2px 2px black)"
                                }}>
                                    Towering monsters, collapsing cityscapes, thermo-nuclear blasts. What&apos;s not to love in these Japanese classics? From standard size to oversized figurines, we have it all!
                                </p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}

    export default Products;