import { Float, OrbitControls, PerspectiveCamera, useScroll, Text } from "@react-three/drei";
import { Background } from "./Background";
import { Rocket } from "./Rocket";
import { Cloud } from "./Cloud";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { TextSection } from "./TextSection";
import { usePlay } from "@/context/Play";

const LINE_NB_POINTS = 15000;
const CURVE_DISTANCE = 400;
const FRICTION_DISTANCE = 10;

export const Experience = () => {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(0, 10, -10),
          new THREE.Vector3(-5, 30, -30),
          new THREE.Vector3(-8, 50, -50),
          new THREE.Vector3(0, 70, -70),
          new THREE.Vector3(10, 90, -90),
          new THREE.Vector3(15, 110, -110),
          new THREE.Vector3(10, 130, -130),
          new THREE.Vector3(0, 150, -150),
          new THREE.Vector3(0, 170, -170),
          new THREE.Vector3(0, 200, -200),
          new THREE.Vector3(0, 220, -220),
          new THREE.Vector3(5, 240, -240),
          new THREE.Vector3(0, 260, -260),
          new THREE.Vector3(0, 280, -280),
        ],
        false,
        "catmullrom",
        0.5
      ),
    []
  );

  // Define all refs at the top
  const sceneOpacity = useRef(0);
  const lineMaterialRef = useRef();
  const mainGroupRef = useRef();
  const cameraGroup = useRef();
  const rocket = useRef();
  const cameraRail = useRef();
  const scroll = useScroll();
  const { play } = usePlay();

  const linePoints = useMemo(() => curve.getPoints(LINE_NB_POINTS), [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(1, 0.08);
    return shape;
  }, [curve]);

  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(0, 50, -30),
        title: "Ideology",
        subtitle: "The core philosophy of Team Ignition can be attributed to one trait alone-Obsession.",
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(-8, 100, -100),
        title: "Culture",
        subtitle: "Continuous learning and pushing boundaries are part of the team's ethos.",
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(10, 150, -150),
        title: "About",
        subtitle: "We focus on mastering sounding rockets through interdisciplinary teamwork.",
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(-5, 200, -200),
        title: "Mission",
        subtitle: "Expanding our knowledge and pushing the limits of space technology.",
      }
    ];
  }, []);

  const rocketRotation = useRef({ x: 0, y: Math.PI / 2, z: 0 });
  const targetLookAtPosition = useRef(new THREE.Vector3());

  useFrame((_state, delta) => {
    // Update scene opacity based on play state
    if (play) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 2
      );
    } 

    // Update material opacities
    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity = sceneOpacity.current;
    }

    // Make all meshes in the scene follow the opacity
    if (mainGroupRef.current) {
      mainGroupRef.current.traverse((child) => {
        // Skip background and non-material objects
        if (child.material && 
            typeof child.material.opacity !== 'undefined' &&
            child.type !== 'Background') {  // Check object type instead of ref
          child.material.transparent = true;
          child.material.opacity = sceneOpacity.current;
        }
      });
    }

    let resetCameraRail = true;
    let friction = 1;

    // Text sections handling
    textSections.forEach((textSection) => {
      const dist = textSection.position.distanceTo(cameraGroup.current.position);
      if (dist < FRICTION_DISTANCE) {
        friction = Math.max(dist / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new THREE.Vector3(
          (1 - dist / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        targetLookAtPosition.current.copy(textSection.position);
        resetCameraRail = false;
      }
    });

    if (resetCameraRail) {
      const targetCameraRailPosition = new THREE.Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
      targetLookAtPosition.current.copy(rocket.current.position);
    }

    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

    rocket.current.position.lerp(curPoint, delta * 12 * friction);

    const yDisplacement = (pointAhead.x - curPoint.x) * 40;
    const xAxisRotation = (yDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(yDisplacement), Math.PI / 12);
    const zAxisRotation = Math.sin(scroll.offset * Math.PI * 2) * 0.05;

    rocketRotation.current.x = xAxisRotation;
    rocketRotation.current.z = zAxisRotation;

    const targetRocketQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rocketRotation.current.x,
        rocketRotation.current.y,
        rocketRotation.current.z,
        'XYZ'
      )
    );

    rocket.current.quaternion.slerp(targetRocketQuaternion, delta * 2);

    const cameraOffset = new THREE.Vector3(0, 2, 5);
    const targetCameraPosition = rocket.current.position.clone().add(cameraOffset);
    cameraGroup.current.position.lerp(targetCameraPosition, delta * 5);

    const currentCamera = cameraGroup.current.children.find(child => child.isCamera);
    if (currentCamera) {
      currentCamera.lookAt(targetLookAtPosition.current);
      currentCamera.up.set(0, 1, 0);
    }
  });

  return (
    <>
      <Background /> {/* Background always visible */}
      <group ref={mainGroupRef}> {/* Everything else fades in */}
        <group ref={cameraGroup}>
          <group ref={cameraRail}>
            <PerspectiveCamera position={[0, 0, 20]} fov={70} makeDefault />
          </group>
        </group>
        <group ref={rocket}>
          <Float floatIntensity={6} speed={7}>
            <Rocket rotation-y={Math.PI / 2} scale={[0.5, 0.5, 0.5]} position-y={-10.1} />
          </Float>
        </group>

        {textSections.map((textSection, index) => (
          <TextSection {...textSection} key={index} />
        ))}

        {Array.from({ length: 10 }).map((_, i) => (
          <Cloud
            opacity={sceneOpacity}
            scale={[1, 1, 1]}
            position={new THREE.Vector3(
              Math.random() * 20 - 10,
              i * 30 + 10,
              -i * 40 - 20
            )}
            rotation-y={(Math.random() - 0.5) * Math.PI / 4}
            key={i}
          />
        ))}

        <group position-y={-2}>
          <mesh>
            <extrudeGeometry args={[shape, { steps: LINE_NB_POINTS, bevelEnabled: false, extrudePath: curve }]} />
            <meshStandardMaterial color={"white"} ref={lineMaterialRef} transparent opacity={0} />
          </mesh>
        </group>
      </group>
    </>
  );
};