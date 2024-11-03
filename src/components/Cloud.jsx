import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Cloud({ opacity, scale, position, ...props }) { // Destructure props properly
  const { nodes, materials } = useGLTF('/models/cloud/model.glb');
  return (
    <group {...props} dispose={null} position={position} scale={scale}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial {...materials['lambert2SG']} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/cloud/model.glb');
