import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Overlay } from "./Overlay";
import { PlayProvider } from "@/context/Play";
import { useEffect, useState } from "react";

function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true only on the client
  }, []);

  return (
    <PlayProvider>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.2} />
        </EffectComposer>
      </Canvas>
      {isClient && <Overlay />} {/* Render Overlay only on the client */}
    </PlayProvider>
  );
}

export default App;
