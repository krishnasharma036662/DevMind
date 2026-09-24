export class RepoGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  addNode(node) {
    this.nodes.set(node.id, node);
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  getNode(id) {
    return this.nodes.get(id);
  }

  getOutgoing(id) {
    return this.edges.filter(edge => edge.source === id);
  }

  getIncoming(id) {
    return this.edges.filter(edge => edge.target === id);
  }
}
