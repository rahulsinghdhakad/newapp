import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ h3, text, hasBtn = true, btnTxt, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor,
    btnBgColor, btnColor
}) => {
    const headingMotion= {
        initial:{
            y:'-100%',
            opacity:0,
        },
        whileInView:{
            y:'0%',
            opacity:1,
        }
    }
    const textMotion={
        ...headingMotion,
        transition:{
            delay:0.5,
            ease:'easeIn'
        }
    }

    const imgMotion={
        initial:{
            scale:0.1,
            opacity:0,
        },
        whileInView:{
            scale:1,
            opacity:1,
        },
        transition:{
            delay:1,
        }
    }
    return (
        <section className='section' style={{
            backgroundColor: backgroundColor,
        }}>
           
            <div > 
                <motion.h3 style={{
                    color: headingColor,
                }}
                {...headingMotion}
                >{h3}</motion.h3>

                <motion.p style={{
                    color: textColor,
                }}
                {...textMotion}>{text}</motion.p>

                {hasBtn && <motion.button style={{
                    color: btnColor,
                    backgroundColor: btnBgColor
                }}
                >{btnTxt}</motion.button>}

                <div>
                    <motion.img src={imgSrc} alt="img" style={{
                        width:imgSize
                    }} {...imgMotion} />
                </div>
            </div>
        </section>
    )
}

export default Section