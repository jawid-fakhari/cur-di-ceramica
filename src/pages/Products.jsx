import { Environment, Html, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Ciotola } from '../gltf/Ciotola'
import { Vaso } from '../gltf/Vaso'
import ProductInterface from '../components/ProductsInterface'
import { Suspense, useState } from 'react'


export default function Products() {
    const [model, setModel] = useState(<Ciotola />)
    const [infoTextToShow, setInfoTextToShow] = useState('')
    const [selectedTexture, setSelectedTexture] = useState(null)

    const chooseTexture = (texture) => {
        // Implement texture selection logic here
        setSelectedTexture(texture)
    }

    const chooseModel = (model) => {
        setModel(model)
    }

    const visibleInfoText = (data) => {
        setInfoTextToShow(data)
    };

    const renderModel = () => {
        switch (model) {
            case 'ciotola':
                return <Ciotola onInfoText={visibleInfoText} texture={selectedTexture} />
            case 'vaso':
                return <Vaso onInfoText={visibleInfoText} texture={selectedTexture} />
            default:
                return null
        }
    }

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <color attach="background" args={["#ffddc7"]} />
                    <ambientLight intensity={1} />
                    <OrbitControls />
                    <Environment preset='sunset' />

                    {renderModel()}

                    <Html
                        as='div'
                        fullscreen={true}
                        zIndexRange={[10, 0]}
                    >
                        <ProductInterface
                            onTexture={chooseTexture}
                            onModel={chooseModel}
                            text={infoTextToShow}
                            selectedTexture={selectedTexture}
                        />
                    </Html>

                </Suspense>
            </Canvas >
        </>
    )
}





