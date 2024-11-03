import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Rocket(props) {
  const { nodes, materials } = useGLTF('/models/rocket/model.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cone.geometry} material={materials['Material.003']} position={[0, 2.291, 3.02]} rotation={[Math.PI / 2, 0, 0]} scale={[0.479, 1.566, 1.566]} />
      <mesh geometry={nodes.Cone001.geometry} material={materials['Material.003']} position={[-2.949, 2.291, 0.006]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.479, 1.566, 1.566]} />
      <mesh geometry={nodes.Cone002.geometry} material={materials['Material.003']} position={[0.011, 2.291, -2.841]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.479, 1.566, 1.566]} />
      <mesh geometry={nodes.Cone003.geometry} material={materials['Material.003']} position={[2.971, 2.291, -0.002]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.479, 1.566, 1.566]} />
    </group>
  );
}

useGLTF.preload('/models/rocket/model.glb');
