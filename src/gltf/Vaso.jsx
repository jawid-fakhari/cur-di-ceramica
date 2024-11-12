import * as THREE from 'three';
import React from 'react'
import { Html, useGLTF, useTexture } from '@react-three/drei'

export function Vaso(props) {
    const { nodes, materials } = useGLTF('/vaso.glb')

    const changeSkin = (data) => {
        const newSkin = useTexture(`/textures/${data}.jpg`);
        newSkin.colorSpace = THREE.SRGBColorSpace;
        newSkin.repeat.set(10, 10);
        newSkin.wrapS = THREE.RepeatWrapping;
        newSkin.wrapT = THREE.RepeatWrapping;
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
                        <div
                            id='flowerAnnotation'
                            className=" 
                                opacity-80
                                cursor-pointer 
                                border-red-600 border-4 rounded-full
                                duration-100
                                hover:opacity-100
                                hover:border-8
                                "
                            onClick={handleclick}
                        >
                        </div>
                    </Html>
                </mesh>
            </group>
        </group >
    )
}

useGLTF.preload('/vaso.glb')
