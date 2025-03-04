import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./carousel.css";

import CardOne from "../cards/cardOne"
import CardTwo from "../cards/cardTwo"
import CardThree from "../cards/cardThree"

const cards = [CardOne, CardTwo, CardThree]

export default function App() {

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])


    return (
        <div className="App">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className="inner" 
                drag="x"
                dragConstraints={{right: 0, left: - width}}>

                    {cards.map((Card, index) =>(
                        <motion.div className="item" key={index}>
                            <Card/>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    );
}