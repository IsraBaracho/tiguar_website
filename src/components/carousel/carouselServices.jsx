import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./carousel.css";

import CardAndroid from "../cards/android"
import CardWebsites from "../cards/websites"
import CardAplicacoes from "../cards/aplicacoesWeb"
import CardConsultoria from "../cards/consultoria"

const cards = [CardAndroid, CardWebsites, CardAplicacoes, CardConsultoria]

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