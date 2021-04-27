const Graph = require('../util/Graph');

// Time and Space O(V + E) where V is the number of projects and E is the number of deps
const buildOrder = (projects, deps) => {
  const graph = buildGraph(projects, deps);
  const order = orderProjects(graph);

  return order;
};

const buildGraph = (projects, deps) => {
  const graph = new Graph();
  for (let p of projects) graph.addNode(p);
  for (let [a, b] of deps) graph.addEdge(a, b);

  return graph;
};

const orderProjects = (graph) => {
  const order = [];
  const visited = {};
  const visiting = {};

  const visit = (node) => {
    if (visiting[node]) {
      return false; // Error
    }

    if (!visited[node]) {
      const adjacent = Object.keys(graph.findEdges(node));

      visiting[node] = true;

      for (let adj of adjacent) {
        if (!visit(adj)) {
          return false;
        }
      }

      visiting[node] = false;
      visited[node] = true;
      order.unshift(node);
    }

    return true;
  };

  for (let node of graph.getNodes()) {
    if (!visited[node]) {
      if (!visit(node)) {
        return null;
      }
    }
  }

  return order;
};

// TESTS

const p1 = ['a', 'b', 'c', 'd', 'f', 'g', 'k'];
const d1 = [
  ['f', 'c'],
  ['f', 'b'],
  ['f', 'a'],
  ['b', 'a'],
  ['b', 'c'],
  ['a', 'k'],
  ['d', 'g'],
];

const order1 = buildOrder(p1, d1);
console.log(order1.join(' -> '));

const p2 = ['a', 'b', 'c'];
const d2 = [
  ['a', 'b'],
  ['b', 'c'],
  ['c', 'a'],
];

const order2 = buildOrder(p2, d2);
console.log(order2);
