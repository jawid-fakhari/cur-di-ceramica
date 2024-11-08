import React from 'react'
import { motion } from "framer-motion"


/**
 * RENDER
 */
export default function HomeInterface() {


    return (
        <>
            <FirstSection />
            <SecondSection />
        </>
    )
}


/******************************************
 * animazione con framer-motion
 */
const FirstSection = () => {
    return (
        <>

            <div className='
                grid grid-cols-1 mt-40 px-10
                md:px-40
                lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-1 
                '
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className='
                    z-10
                    '
                >
                    <p
                        className="
                        font-cinzel font-black text-5xl
                        md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                        "
                    >
                        Ceramiche furlane, art di seculs
                    </p>
                    <p className="
                    font-cinzel text-2xl
                    md:text-3xl
                    backdrop-blur bg-white/30 p-5 rounded
                    lg:w-[600px] xl:w-full
                    "
                    >
                        La tecnica della ceramica, coltivata attraverso secoli di storia e maestria friulana.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className='
                    z-0 my-10
                    '
                >

                    <img
                        id="craftMan"
                        className='
                        rounded-full 
                        filter 
                        grayscale 
                        w-[700px]
                        '
                        src="./craftman.png"
                        alt="a ceramic craftman working"
                    />

                </motion.div>
            </div>
        </>
    );
};

function SecondSection() {
    const buttonHandler = () => {
        window.location.href = "./products";
    }
    return (
        <>
            <div className="
                px-10 mt-80
                md:px-40 
                "
            >
                <div className='h-screen flex justify-center items-center'>
                    <p className="
                        backdrop-blur bg-white/30 p-8 rounded
                        font-cinzel text-2xl
                        "
                    >
                        Un buon artigianato ceramico in Friuli risale all’epoca romana. Le prime produzioni erano terrecotte (mattoni, vasellame) concentrate nelle zone argillose lagunare (da Aquileia a Palazzolo), isontina a Gradisca, delle risorgive (Rivignano, Pordenone, Polcenigo), a ridosso della zona Morenica (Fagagna, Buja).
                        <br />E’ nel 1800 che la ceramica in Friuli si sviluppa nelle stoviglie, vasellame, piastrelle (anche con industrie nel 1900 a Pordenone e a Palazzolo) acquisendo gli stilemi decorativi tipici ancor oggi.
                    </p>
                </div>
                <button className='
                    p-8 mt-8 text-xl backdrop-blur 
                    bg-white/30 px-8 py-4 rounded
                    hover:bg-white/70
                    '
                    onClick={() => buttonHandler()}
                >
                    Vai alla pagina dei Prodotti
                    <span className="ml-2 text-xl font-bold text-red-500">
                        &#8594;
                    </span>
                </button>
            </div>
        </>
    )
}
