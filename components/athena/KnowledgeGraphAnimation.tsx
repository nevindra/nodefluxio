"use client";

import { Float, PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Database,
    FileText,
    Globe,
    Layout,
    Link,
    Network,
    Search,
    Settings,
    Share2,
    Shield,
    Table,
    Zap
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

// --- 3D Components ---

function DynamicGraph({ activeNodes }: { activeNodes: boolean }) {
  const ref = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 150; i++) {
      const radius = 4 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  const lines = useMemo(() => {
    const segments = [];
    const nodeCoords = [];
    for (let i = 0; i < nodes.length; i += 3) {
      nodeCoords.push(new THREE.Vector3(nodes[i], nodes[i+1], nodes[i+2]));
    }

    for (let i = 0; i < nodeCoords.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeCoords.length && connections < 2; j++) {
        const dist = nodeCoords[i].distanceTo(nodeCoords[j]);
        if (dist < 2.5) {
          segments.push(nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z);
          segments.push(nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z);
          connections++;
        }
      }
    }
    return new Float32Array(segments);
  }, [nodes]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      if (activeNodes) {
        ref.current.rotation.x += 0.0005;
      }
    }
  });

  return (
    <group ref={ref}>
      <Points positions={nodes} stride={3}>
        <PointMaterial
          transparent
          color="#9333ea"
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#9333ea"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      
      {/* Core Glow */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#9333ea" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

// --- 2D Components ---

const SOURCES = [
    { name: 'Enterprise ERP', icon: Database, color: '#3b82f6' },
    { name: 'Salesforce CRM', icon: Layout, color: '#0ea5e9' },
    { name: 'Internal Docs', icon: FileText, color: '#a855f7' },
    { name: 'Public Web', icon: Globe, color: '#10b981' },
    { name: 'Legacy SQL', icon: Table, color: '#6366f1' }
];

export default function KnowledgeGraphAnimation() {
  const [ingesting, setIngesting] = useState(0);
  const [stats, setStats] = useState({ nodes: 14208, relations: 84322, accuracy: 99.8 });

  useEffect(() => {
    const timer = setInterval(() => {
      setIngesting((prev) => (prev + 1) % SOURCES.length);
      setStats(s => ({
        nodes: s.nodes + Math.floor(Math.random() * 5),
        relations: s.relations + Math.floor(Math.random() * 20),
        accuracy: 99.8
      }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] bg-[#05060a] relative overflow-hidden flex flex-col md:flex-row font-sans">
      {/* 1. SOURCES COLUMN (LEFT) */}
      <div className="w-full md:w-1/4 p-8 border-r border-white/5 flex flex-col gap-8 z-20 bg-black/20 backdrop-blur-md">
        <div>
            <div className="text-[10px] font-mono text-primary tracking-widest uppercase mb-2">Ingestion Pipeline</div>
            <h3 className="text-lg font-medium text-white mb-4">Data Sources</h3>
        </div>

        <div className="space-y-3">
            {SOURCES.map((src, i) => (
                <motion.div 
                    key={src.name}
                    animate={{ 
                        opacity: ingesting === i ? 1 : 0.4,
                        x: ingesting === i ? 10 : 0,
                        borderColor: ingesting === i ? src.color : 'rgba(255,255,255,0.05)'
                    }}
                    className={`flex items-center gap-4 p-3 border rounded-xl bg-white/[0.02] transition-colors`}
                >
                    <div className="p-2 rounded-lg bg-white/5">
                        <src.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs text-white font-medium">{src.name}</div>
                        <div className="text-[8px] text-white/40 uppercase font-mono">
                            {ingesting === i ? 'Syncing...' : 'Connected'}
                        </div>
                    </div>
                    {ingesting === i && (
                        <motion.div 
                            layoutId="flow-line"
                            className="w-2 h-2 rounded-full bg-primary"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ repeat: Infinity }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
        
        <div className="mt-auto">
            <div className="p-4 border border-white/5 bg-white/5 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-white/40 uppercase">
                    <span>Sync Status</span>
                    <span className="text-green-500">Live</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        animate={{ width: ['0%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
        </div>
      </div>

      {/* 2. CENTRAL KNOWLEDGE GRAPH (3D) */}
      <div className="flex-1 relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="px-4 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-md flex items-center gap-3">
                <Network className="w-3 h-3 text-primary" />
                <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">Knowledge Graph Engine</span>
            </div>
        </div>

        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#9333ea" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <DynamicGraph activeNodes={true} />
          </Float>
        </Canvas>

        {/* Floating Relationship Markers */}
        <AnimatePresence>
            {ingesting !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute bottom-12 left-12 right-12 md:left-auto md:right-8 p-6 border border-white/5 bg-black/60 backdrop-blur-xl z-20 max-w-xs"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <Share2 className="w-4 h-4 text-primary" />
                        <div className="text-xs font-bold text-white uppercase tracking-tight">Active Relationship Extraction</div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px]">
                            <span className="text-white/40">Entity Alpha</span>
                            <span className="text-white font-mono">PROD_REF_01</span>
                        </div>
                        <div className="h-px bg-white/5 w-full" />
                        <div className="flex justify-between text-[10px]">
                            <span className="text-white/40">Entity Beta</span>
                            <span className="text-white font-mono">CUST_LOG_88</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* 3. MANAGEMENT PANEL (RIGHT) */}
      <div className="w-full md:w-1/4 p-8 border-l border-white/5 flex flex-col gap-6 z-20 bg-black/20 backdrop-blur-md">
        <div>
            <div className="text-[10px] font-mono text-primary tracking-widest uppercase mb-2">Knowledge Base</div>
            <h3 className="text-lg font-medium text-white mb-4">Control Plane</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
            {[
                { label: 'Total Nodes', value: stats.nodes.toLocaleString(), icon: Zap },
                { label: 'Relationships', value: stats.relations.toLocaleString(), icon: Link },
                { label: 'Veracity', value: stats.accuracy + '%', icon: Shield }
            ].map((stat, i) => (
                <div key={i} className="p-4 border border-white/5 bg-white/[0.02] rounded-xl flex items-center justify-between">
                    <div>
                        <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-xl font-light text-white tracking-tighter">{stat.value}</div>
                    </div>
                    <stat.icon className="w-5 h-5 text-white/10" />
                </div>
            ))}
        </div>

        <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 bg-primary/10 border border-primary/30 rounded-lg text-[10px] uppercase tracking-[0.2em] font-bold text-primary hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                <Settings className="w-3.5 h-3.5" />
                Manage Ontology
            </button>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors flex items-center justify-center gap-2">
                <Search className="w-3.5 h-3.5" />
                Query Explorer
            </button>
        </div>

        <div className="mt-auto border-t border-white/5 pt-6">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-500" />
                </div>
                <div>
                    <div className="text-[10px] text-white font-medium">Enterprise Security</div>
                    <div className="text-[8px] text-white/30 uppercase">Role-Based Access On</div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}
