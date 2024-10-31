import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const vertices = [];
    const starQty = 20000;

    for (let i = 0; i < starQty; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }

    const geometryx = new THREE.SphereGeometry(1000, 100, 50);
    geometryx.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const materialx = new THREE.PointsMaterial({ color: 0xffffff });
    const points = new THREE.Points(geometryx, materialx);
    scene.add(points);

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientlight);

    let mouseX = 0;
    let mouseY = 0;
    let delZ = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    };

    const wheelMove = (e) => {
      delZ = e.deltaY;
      if (camera.position.z > 1500) {
        delZ = 0;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x += (mouseX - camera.position.x) * 0.005;
      camera.position.y += (mouseY - camera.position.y) * 0.005;
      if (camera.position.z > 1500 || camera.position.z < -1000) {
        delZ = -delZ;
      }
      camera.position.z += delZ * 0.01;
      camera.rotation.z += 0.0005;
      camera.rotation.x += 0.0005;
      camera.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', wheelMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('wheel', wheelMove);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
};

export default ThreeScene;
