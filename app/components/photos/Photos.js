import React from "react";
import Image from "next/image";
import { Gallery } from "next-gallery";

function Photos(){
    const images = [
        {src: "/assets/comics_wide.jpeg", aspect_ratio: 16/9 },
        {src: "/assets/comics.jpg", aspect_ratio: 16/9 },
        {src: "/assets/kaiju.jpg", aspect_ratio: 16/9 },
        {src: "/assets/mythleg_wide.jpeg", aspect_ratio: 16/9 },
        {src: "/assets/store_front.jpg", aspect_ratio: 16/9 },
        {src: "/assets/bg_imgs/gojira.jpg", aspect_ratio: 16/9 },
    ]

    const widths = [ 500, 1000, 1600 ]
    const ratios = [2.2, 4, 6, 8 ]

    return(
        <div>
            <div>

                <Gallery {...{images, widths, ratios}}/>
            </div>
        </div>
    )
}

export default Photos;