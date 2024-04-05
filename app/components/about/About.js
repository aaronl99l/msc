import React from "react";
import { Bangers } from "next/font/google";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
})

function About(){
return(
    <div style={{

    }}>
        <div style={{
            margin: "25px"
        }}>
            <p className={inter.className} style={{
                fontSize: "8vh",
                color: "red",
                filter: "drop-shadow(1px 1px 0px black)",
                fontWeight: "bold",
                width: "100%",
                textAlign: "center"
            }}>
                The   Story   Goes
            </p>
        </div>
        <div>
            <p className="px-[15%]" style={{
                fontSize: "calc(12px + 1vw)",
                color: "black",
                fontWeight: "bold"
            }}>
                As a life long lover of comic books, 
                toys and all things Sci-Fi, horror and genre related, 
                it had always been my dream to someday have a shop 
                where I could feature amazing products that could 
                spark the excitement inside everyone. This is that shop!
            </p>
        </div>
    </div>
)}

export default About;