"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
  Building2,
  FileText,
  FolderKanban,
  MessageSquare,
  Network,
  Sparkles,
  User,
  Zap
} from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

// Entity types
type EntityType = 'person' | 'organization' | 'project' | 'document';

interface Entity {
  id: string;
  name: string;
  type: EntityType;
  x: number;
  y: number;
}

interface Relation {
  from: string;
  to: string;
  label: string;
}

// Graph data - Business Intelligence scenario (positions adjusted for better centering)
const ENTITIES: Entity[] = [
  { id: 'sarah', name: 'Sarah Chen', type: 'person', x: 18, y: 25 },
  { id: 'john', name: 'John Doe', type: 'person', x: 18, y: 65 },
  { id: 'delta', name: 'Project Delta', type: 'project', x: 50, y: 30 },
  { id: 'alpha', name: 'Project Alpha', type: 'project', x: 50, y: 60 },
  { id: 'proposal', name: 'Proposal_Q4.pdf', type: 'document', x: 82, y: 20 },
  { id: 'contract', name: 'Contract_2024.pdf', type: 'document', x: 82, y: 45 },
  { id: 'maju', name: 'PT Maju Bersama', type: 'organization', x: 82, y: 70 },
];

const RELATIONS: Relation[] = [
  { from: 'sarah', to: 'delta', label: 'leads' },
  { from: 'sarah', to: 'proposal', label: 'authored' },
  { from: 'john', to: 'alpha', label: 'works_on' },
  { from: 'john', to: 'maju', label: 'contacted' },
  { from: 'delta', to: 'contract', label: 'contains' },
  { from: 'delta', to: 'maju', label: 'client_of' },
  { from: 'alpha', to: 'maju', label: 'prospect' },
  { from: 'proposal', to: 'delta', label: 'belongs_to' },
];

// Query scenarios with traversal paths
const QUERIES = [
  {
    question: "Who handles the deal with PT Maju Bersama?",
    answer: "Sarah Chen leads Project Delta, which has PT Maju Bersama as client.",
    path: ['sarah', 'delta', 'maju'],
    highlightRelations: [
      { from: 'sarah', to: 'delta' },
      { from: 'delta', to: 'maju' }
    ]
  },
  {
    question: "What documents are related to Project Delta?",
    answer: "Proposal_Q4.pdf (by Sarah) and Contract_2024.pdf are linked to Project Delta.",
    path: ['delta', 'contract', 'proposal'],
    highlightRelations: [
      { from: 'delta', to: 'contract' },
      { from: 'proposal', to: 'delta' }
    ]
  },
  {
    question: "Who has contacted PT Maju Bersama?",
    answer: "John Doe contacted PT Maju Bersama for Project Alpha. Sarah is connected via Project Delta.",
    path: ['john', 'maju', 'delta', 'sarah'],
    highlightRelations: [
      { from: 'john', to: 'maju' },
      { from: 'delta', to: 'maju' },
      { from: 'sarah', to: 'delta' }
    ]
  }
];

const entityConfig: Record<EntityType, { icon: typeof User; color: string; bgColor: string }> = {
  person: { icon: User, color: 'text-blue-500', bgColor: 'bg-blue-500/10 border-blue-500/30' },
  organization: { icon: Building2, color: 'text-amber-500', bgColor: 'bg-amber-500/10 border-amber-500/30' },
  project: { icon: FolderKanban, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10 border-emerald-500/30' },
  document: { icon: FileText, color: 'text-purple-500', bgColor: 'bg-purple-500/10 border-purple-500/30' },
};

// Connection line component
function ConnectionLine({
  from,
  to,
  label,
  isHighlighted,
  animationDelay
}: {
  from: Entity;
  to: Entity;
  label: string;
  isHighlighted: boolean;
  animationDelay: number;
}) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  return (
    <g>
      <motion.line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke={isHighlighted ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.1)"}
        strokeWidth={isHighlighted ? 2 : 1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: isHighlighted ? 1 : 0.4,
          stroke: isHighlighted ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.1)"
        }}
        transition={{
          duration: 0.5,
          delay: isHighlighted ? animationDelay : 0,
          ease: "easeOut"
        }}
      />

      {isHighlighted && (
        <motion.circle
          r="3"
          fill="hsl(var(--primary))"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            cx: [`${from.x}%`, `${to.x}%`],
            cy: [`${from.y}%`, `${to.y}%`],
          }}
          transition={{
            duration: 1.2,
            delay: animationDelay,
            repeat: Infinity,
            repeatDelay: 1.5
          }}
        />
      )}

      <motion.text
        x={`${midX}%`}
        y={`${midY}%`}
        textAnchor="middle"
        dy="-4"
        className={`text-[6px] md:text-[7px] font-mono uppercase ${isHighlighted ? 'fill-primary' : 'fill-foreground/20'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHighlighted ? 1 : 0.4 }}
        transition={{ delay: isHighlighted ? animationDelay + 0.2 : 0 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

// Entity node component
function EntityNode({
  entity,
  isHighlighted,
  animationDelay
}: {
  entity: Entity;
  isHighlighted: boolean;
  animationDelay: number;
}) {
  const config = entityConfig[entity.type];
  const Icon = config.icon;

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${entity.x}%`, top: `${entity.y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHighlighted ? 1.1 : 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: animationDelay
      }}
    >
      {isHighlighted && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/30 blur-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.8, opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <motion.div
        className={`
          relative flex flex-col items-center gap-0.5 p-1.5 md:p-2 rounded-lg border backdrop-blur-sm
          ${isHighlighted ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20' : config.bgColor}
          transition-colors duration-300
        `}
        whileHover={{ scale: 1.05 }}
      >
        <div className={`p-1 md:p-1.5 rounded-md ${isHighlighted ? 'bg-primary/20' : 'bg-background/50'}`}>
          <Icon className={`w-2.5 h-2.5 md:w-3 md:h-3 ${isHighlighted ? 'text-primary' : config.color}`} />
        </div>
        <span className={`text-[6px] md:text-[8px] font-medium text-center leading-tight max-w-[45px] md:max-w-[65px] truncate ${isHighlighted ? 'text-foreground' : 'text-foreground/60'}`}>
          {entity.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function KnowledgeGraphAnimation() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'querying' | 'traversing' | 'answering'>('idle');
  const [stats, setStats] = useState({ entities: 847, relations: 2341, latency: 23 });

  const currentQuery = QUERIES[currentQueryIndex];

  useEffect(() => {
    const phases: ('idle' | 'querying' | 'traversing' | 'answering')[] = ['querying', 'traversing', 'answering', 'idle'];
    let phaseIndex = 0;

    const phaseTimer = setInterval(() => {
      setPhase(phases[phaseIndex]);
      phaseIndex++;

      if (phaseIndex >= phases.length) {
        phaseIndex = 0;
        setCurrentQueryIndex((prev) => (prev + 1) % QUERIES.length);
        setStats(s => ({
          entities: s.entities + Math.floor(Math.random() * 3),
          relations: s.relations + Math.floor(Math.random() * 8),
          latency: 18 + Math.floor(Math.random() * 15)
        }));
      }
    }, 2500);

    return () => clearInterval(phaseTimer);
  }, []);

  const highlightedEntities = useMemo(() => {
    if (phase === 'traversing' || phase === 'answering') {
      return new Set(currentQuery.path);
    }
    return new Set<string>();
  }, [phase, currentQuery]);

  const highlightedRelations = useMemo(() => {
    if (phase === 'traversing' || phase === 'answering') {
      return currentQuery.highlightRelations;
    }
    return [];
  }, [phase, currentQuery]);

  const isRelationHighlighted = (from: string, to: string) => {
    return highlightedRelations.some(
      r => (r.from === from && r.to === to) || (r.from === to && r.to === from)
    );
  };

  return (
    <div className="w-full h-full bg-background relative overflow-hidden font-sans">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(var(--primary),0.06),transparent_50%)] pointer-events-none" />

      {/* Header Badge */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
        <div className="px-2.5 md:px-3 py-1 rounded-full border border-border/50 bg-background/70 backdrop-blur-md flex items-center gap-1.5 md:gap-2">
          <Network className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
          <span className="text-[6px] md:text-[8px] font-bold text-foreground uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
            Knowledge Graph Engine
          </span>
        </div>
      </div>

      {/* Graph Area - Full container */}
      <div className="absolute inset-0 pt-10 pb-24 md:pb-20 px-2 md:px-4">
        {/* SVG for connection lines */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          {RELATIONS.map((relation) => {
            const fromEntity = ENTITIES.find(e => e.id === relation.from);
            const toEntity = ENTITIES.find(e => e.id === relation.to);
            if (!fromEntity || !toEntity) return null;

            const highlighted = isRelationHighlighted(relation.from, relation.to);
            const highlightIndex = highlightedRelations.findIndex(
              r => (r.from === relation.from && r.to === relation.to) ||
                   (r.from === relation.to && r.to === relation.from)
            );

            return (
              <ConnectionLine
                key={`${relation.from}-${relation.to}`}
                from={fromEntity}
                to={toEntity}
                label={relation.label}
                isHighlighted={highlighted}
                animationDelay={highlighted ? highlightIndex * 0.3 : 0}
              />
            );
          })}
        </svg>

        {/* Entity nodes */}
        <div className="absolute inset-0 z-20">
          {ENTITIES.map((entity, i) => {
            const highlighted = highlightedEntities.has(entity.id);
            const highlightIndex = currentQuery.path.indexOf(entity.id);

            return (
              <EntityNode
                key={entity.id}
                entity={entity}
                isHighlighted={highlighted}
                animationDelay={highlighted && highlightIndex >= 0 ? highlightIndex * 0.3 : i * 0.1}
              />
            );
          })}
        </div>
      </div>

      {/* Query Panel - Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="mx-2 md:mx-4 mb-2 md:mb-3 p-3 md:p-4 bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
            {/* Query Section */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[7px] md:text-[8px] font-mono text-primary uppercase tracking-widest">
                  Graph Query
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQueryIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-start gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground/30 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] md:text-xs text-foreground font-medium leading-relaxed">
                    {currentQuery.question}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Answer Section */}
            <AnimatePresence>
              {phase === 'answering' && (
                <motion.div
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: 10, width: 0 }}
                  className="flex-1 min-w-0 md:border-l md:border-border/30 md:pl-4"
                >
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] md:text-xs text-foreground/80 leading-relaxed">
                      {currentQuery.answer}
                    </p>
                  </div>
                </motion.div>
              )}

              {phase === 'traversing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-[9px] md:text-[10px] font-mono text-foreground/50"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-3 h-3 text-primary" />
                  </motion.div>
                  <span className="hidden md:inline">Traversing:</span>
                  <span className="text-primary">{currentQuery.path.join(' → ')}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
            <div className="flex items-center gap-4 md:gap-6">
              {[
                { label: 'Entities', value: stats.entities.toLocaleString(), color: 'text-blue-500' },
                { label: 'Relations', value: stats.relations.toLocaleString(), color: 'text-emerald-500' },
                { label: 'Latency', value: `${stats.latency}ms`, color: 'text-primary' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5">
                  <span className="text-[6px] md:text-[7px] font-mono text-foreground/30 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className={`text-[10px] md:text-xs font-medium ${stat.color} font-mono`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Traversal Path Chips */}
            <AnimatePresence>
              {phase === 'answering' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="hidden md:flex items-center gap-1"
                >
                  {currentQuery.path.slice(0, 3).map((nodeId, i) => {
                    const entity = ENTITIES.find(e => e.id === nodeId);
                    if (!entity) return null;
                    const config = entityConfig[entity.type];
                    const Icon = config.icon;

                    return (
                      <motion.div
                        key={nodeId}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-0.5"
                      >
                        <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${config.bgColor}`}>
                          <Icon className={`w-2 h-2 ${config.color}`} />
                          <span className="text-[7px] font-medium text-foreground/60">{entity.name.split(' ')[0]}</span>
                        </div>
                        {i < Math.min(currentQuery.path.length, 3) - 1 && (
                          <span className="text-foreground/20 text-[8px]">→</span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
