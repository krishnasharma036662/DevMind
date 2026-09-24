export type RKMNodeType =
  | 'repository' | 'directory' | 'file' | 'module'
  | 'class' | 'function' | 'method' | 'variable' | 'api' | 'test';

export interface RKMNode {
  id: string;
  type: RKMNodeType;
  name: string;
  path?: string;
  language?: string;
  metadata?: Record<string, unknown>;
}

export interface RKMEdge {
  source: string;
  target: string;
  relationship: string;
  metadata?: Record<string, unknown>;
}
