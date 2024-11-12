import { motion } from "framer-motion"

export default function ProductsInterface(props) {

    /**
     * Button Handlers
     * passano id attraverso onXXXXXX callback function al Product Page
     */

    const textureButtonHandler = (e) => {
        e.preventDefault();
        props.onTexture(e.target.id)
    }

    const modelButtonHandler = (e) => {
        e.preventDefault();
        props.onModel(e.target.id);
    }
    /**
     * Functions
     */

    // return testo informativo in base al modelButtonHandler 
    const informationText = () => {
        if (props.text === 'identity') {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className="
                        flex flex-col w-80 ml-auto mr-10
                        p-8 mt-8 backdrop-blur 
                        bg-white/30 px-8 py-4 rounded
                        "
                >
                    <p className="font-semibold">Identià</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto obcaecati aliquid ipsum laborum dignissimos recusandae nihil, ab assumenda sit aspernatur dolor sapiente asperiores eius laudantium. Exercitationem itaque mollitia soluta eius officiis quos ad aperiam.
                    </p>
                </motion.div>
            )
        } else if (props.text === 'flowerAnnotation') {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className="
                        flex flex-col w-80 ml-auto mr-10
                        p-8 mt-8 backdrop-blur 
                        bg-white/30 px-8 py-4 rounded
                        "
                >
                    <p className="font-semibold">Disegni floreali</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi autem nihil, consectetur quisquam exercitationem ipsum odio laborum neque explicabo iure doloribus doloremque ea, est assumenda molestias hic omnis! Ipsam soluta aspernatur ad amet voluptatem eius veritatis unde fugiat maxime, facilis reprehenderit dolor quidem labore odit nostrum velit aliquam minima. Odio.
                    </p>
                </motion.div>
            )
        }
        return null;
    }


    return (
        <>
            <div className="font-cinzel h-full flex items-center justify-start ">
                <div className="sideBar w-48 ml-5 ">
                    <button id="vaso" className='
                    w-full
                    p-8 mt-8 text-xl backdrop-blur 
                    bg-white/30 px-8 py-4 rounded
                    hover:bg-white/70
                    '
                        onClick={modelButtonHandler}
                    >
                        Vaso
                        <span className="ml-2 text-xl font-bold text-red-500">
                            &#8594;
                        </span>
                    </button>

                    <button id="ciotola" className='
                    w-full
                    p-8 mt-8 text-xl backdrop-blur 
                    bg-white/30 px-8 py-4 rounded
                    hover:bg-white/70
                    '
                        onClick={modelButtonHandler}
                    >
                        Ciotola
                        <span className="ml-2 text-xl font-bold text-red-500">
                            &#8594;
                        </span>
                    </button>

                </div>

                {/* Texture buttons */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  texture-buttons w-96">
                    {/* <p className="text-xl mb-4 text-start">Textures</p> */}
                    <div className="grid grid-cols-4 gap-4">
                        <button
                            className="
                            p-2 backdrop-blur
                            bg-white/30 rounded
                            hover:bg-white/70 transition-colors
                            "
                            onClick={textureButtonHandler}
                        >
                            <img
                                id="floreal-indigo"
                                src="/textures/floreal-indigo.jpg"
                                alt="Floreal Indigo"
                                className="w-full h-16 object-cover rounded"
                            />
                        </button>
                        <button
                            className="
                            p-2 backdrop-blur
                            bg-white/30 rounded
                            hover:bg-white/70 transition-colors
                            "
                            onClick={textureButtonHandler}
                        >
                            <img
                                id="floreal-pink"
                                src="/textures/floreal-pink.jpg"
                                alt="Floreal Pink"
                                className="w-full h-16 object-cover rounded"
                            />
                        </button>
                        <button
                            className="
                            p-2 backdrop-blur
                            bg-white/30 rounded
                            hover:bg-white/70 transition-colors
                            "
                            onClick={textureButtonHandler}
                        >
                            <img
                                id="floreal-yellow"
                                src="/textures/floreal-yellow.jpg"
                                alt="Floreal Yellow"
                                className="w-full h-16 object-cover rounded"
                            />
                        </button>
                        <button
                            className="
                            p-2 backdrop-blur
                            bg-white/30 rounded
                            hover:bg-white/70 transition-colors
                            "
                            onClick={textureButtonHandler}
                        >
                            <img
                                id="modern"
                                src="/textures/modern.jpg"
                                alt="Modern"
                                className="w-full h-16 object-cover rounded"
                            />
                        </button>
                    </div>
                </div>

                {informationText()}

            </div >
        </>


    )

}
