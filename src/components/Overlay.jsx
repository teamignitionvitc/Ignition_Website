import { usePlay } from "@/context/Play";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const Overlay = () => {
    const { progress } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);
    const { play, setPlay } = usePlay();

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setIsLoaded(true);
            }, 500);
        }
    }, [progress]);

    return (
        <div className={`overlay ${play ? "overlay--disable" : ""}`}>
            <div className={`loader ${isLoaded ? "loader--disappear" : ""}`} />
            {isLoaded && (
                <div className={`intro ${play ? "intro--disappear" : ""}`}>
                    <h1 className="logo">Ignition</h1>
                    <button 
                        className="explore" 
                        onClick={() => {
                            setPlay(true);
                        }}
                    >
                        Explore
                    </button>
                </div>
            )}
        </div>
    );
};