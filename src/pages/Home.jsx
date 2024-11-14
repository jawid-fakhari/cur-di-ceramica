// Suspense lets you display a fallback until its children have finished loading.
import * as THREE from 'three'
import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Environment, ScrollControls, Scroll, Html } from '@react-three/drei'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { DepthOfField, EffectComposer, Noise } from '@react-three/postprocessing'
import GridLoader from "react-spinners/GridLoader";
import { Ciotola } from '../components/Ciotola'
import { Vaso } from '../components/Vaso'
import HomeInterface from '../components/HomeInterface'

function Sound({ url }) {
    const sound = useRef()
    const { camera } = useThree()
    const [listener] = useState(() => new THREE.AudioListener())
    const buffer = useLoader(THREE.AudioLoader, url)
    useEffect(() => {
        sound.current.setBuffer(buffer)
        sound.current.setLoop(true)
        sound.current.setVolume(0.5)
        camera.add(listener)
        sound.current.play()
        return () => {
            camera.remove(listener)
        }
    }, [])
    return <positionalAudio ref={sound} args={[listener]} />
}

function Loader() {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 4000)
    }, [])

    return (
        <Html center>
            <GridLoader
                size={30}
                color={'#ffddc7'}
                loading={loading}
            />
        </Html>
    )
}

export default function Home({ count = 100, depth = 80 }) {

    // crea un array del componente model con key(i), assegnare - z position che lo passa come props al componente model 
    const modelCloning = (count) => {
        return Array.from({ length: count }, (_, i) =>
            i % 2 === 0 ? <Ciotola key={i} z={- (i / count) * depth - 20} /> :
                <Vaso key={i} z={- (i / count) * depth - 20} />
        )
    }

    return (
        <>
            <Canvas
                gl={{ alpha: false }}
                camera={{ near: 0.01, far: 110, fov: 30 }}
            >
                <Suspense fallback={<Loader />}>
                    <color attach="background" args={["#ffddc7"]} />
                    <spotLight position={[10, 10, 10]} intensity={100} />

                    <EffectComposer>
                        <DepthOfField
                            target={[0, 0, 30]}
                            focalLength={0.5}
                            bokehScale={10}
                            height={700}
                        />
                        <Noise premultiply />
                    </EffectComposer>
                    <Environment preset='sunset' />
                    {modelCloning(count)}
                    <Sound url="/bg-music.mp3" />

                    <ScrollControls damping={0.8} pages={2.5} >
                        <Scroll html className="w-full">
                            <HomeInterface />
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </>
    )
}
