import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ciotola({ z }) {

    const ref = useRef()
    const { nodes, materials } = useGLTF('/ciotola.glb')


    // useThree hook accedi al state model, con viewport porperty avremmo le dimensioni del Viewport
    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

    // State per gestire le posizioni e rotazioni degli oggetti
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(width / 2),
        y: THREE.MathUtils.randFloatSpread(height),
        rX: Math.random() * Math.PI / 2,
        rY: Math.random() * Math.PI / 2,
        rZ: Math.random() * Math.PI / 2,
    })

    useFrame(() => {
        ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.001), (data.rZ += 0.001))
        ref.current.position.set(data.x * viewport.width, (data.y += 0.005), z)
        if (data.y > height / 1.5) {
            data.y = -height / 1.5
        }
    })

    return (
        <mesh
            ref={ref}
            castShadow
            receiveShadow
            geometry={nodes.ciotola.geometry}
            material={materials.skin}
            scale={0.1}
            rotation={[Math.PI / 2, 0, 0]}
        />
    )
}
useGLTF.preload('/ciotola.glb')
