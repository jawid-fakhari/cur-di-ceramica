import * as THREE from 'three';
import React from 'react'
import { Center, Html, useGLTF, useTexture } from '@react-three/drei'

export function Ciotola(props) {
    const { nodes, materials } = useGLTF('/ciotola.glb')

    const changeSkin = (data) => {
        const newSkin = useTexture(`/textures/${data}.jpg`);
        newSkin.colorSpace = THREE.SRGBColorSpace;
        newSkin.repeat.set(5, 5);
        newSkin.wrapS = THREE.RepeatWrapping;
        newSkin.wrapT = THREE.RepeatWrapping;
        newSkin.rotation = Math.PI * 0.25;
        const newMaterial = new THREE.MeshBasicMaterial({ map: newSkin })
        newMaterial.needsUpdate = true;
        return newMaterial;
    }

    const handleclick = (e) => {
        e.preventDefault();
        props.onInfoText(e.target.id)
    }
    return (
        <Center>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ciotola.geometry}
                    material={
                        !props.texture ? materials.skin :
                            changeSkin(props.texture)
                    }
                    scale={0.08}
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <Html scale={10} rotation={[Math.PI * 0.5, Math.PI, Math.PI * 1.05]} position={[5, 0, 9]} transform occlude>
                        <div className="annotation">
                            <span
                                className='
                                    font-light italic text-[0.2rem]
                                    absolute top-[0.84rem] left-[0.32rem]
                                '
                            >i</span>
                            <span
                                id='identity'
                                onClick={handleclick}
                                className='text-[0.5rem] cursor-pointer'
                            >
                                ⚪
                            </span>
                        </div>
                    </Html>
                </mesh>
            </group>
        </Center>
    )
}

useGLTF.preload('/ciotola.glb')
