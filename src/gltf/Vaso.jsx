import * as THREE from 'three';
import React from 'react'
import { Html, useGLTF, useTexture } from '@react-three/drei'

export function Vaso(props) {
    const { nodes, materials } = useGLTF('/vaso.glb')

    const changeSkin = (data) => {
        const newSkin = useTexture(`/textures/${data}.jpg`);
        newSkin.colorSpace = THREE.SRGBColorSpace;
        newSkin.repeat.set(10, 10);
        newSkin.rotation = Math.PI * 0.25;
        const newMaterial = new THREE.MeshStandardMaterial({
            map: newSkin,
        })
        return newMaterial;
    }

    const handleclick = (e) => {
        e.preventDefault();
        props.onInfoText(e.target.id);
    }

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.vaso.geometry}
                    material={
                        !props.texture ? materials.skin :
                            changeSkin(props.texture)
                    }
                    position={[0, 0, -5]}
                    scale={0.8}
                >

                    <Html scale={10} rotation={[Math.PI * 0.5, Math.PI * 0.5, Math.PI * 0.1]} position={[10, -2, 7]} transform occlude>
                        <div className="annotation">
                            <span
                                onClick={handleclick}
                                className='
                                    font-light italic text-[0.2rem]
                                    absolute top-[0.84rem] left-[0.32rem]
                                '
                            >i</span>
                            <span
                                id='flowerAnnotation'
                                onClick={handleclick}
                                className='text-[0.5rem] cursor-pointer'
                            >
                                ⚪
                            </span>
                        </div>
                    </Html>
                </mesh>
            </group>
        </group >
    )
}

useGLTF.preload('/vaso.glb')
