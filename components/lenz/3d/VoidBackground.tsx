"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Generate random particles
    const particlesPosition = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }

        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#8b5cf6" // Violet/Purple accent
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function VoidBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-background pointer-events-none">
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80 z-10" />

            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
                {/* Fog removed to respect theme transparency */}
                <ParticleField />
            </Canvas>
        </div>
    );
}
