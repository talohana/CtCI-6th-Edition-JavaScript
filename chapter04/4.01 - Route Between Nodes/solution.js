const Graph = require('../util/Graph');
const Queue = require('../util/Queue');

const reverseGraph = (graph) => {
  const reversed = new Graph();
  const nodes = Object.keys(graph.nodes);

  for (let node of nodes) reversed.addNode(node);

  for (let node of nodes) {
    const edges = Object.keys(graph.findEdges(node));

    for (let edge of edges) reversed.addEdge(edge, node);
  }

  return reversed;
};

// Bidirectional Search to reduce the spread of the BFS search
// time - O(V + E), space - O(V + E)
// const routeBetweenNodes = (graph, s, e) => {
//   if (s === e) return true;

//   const reversedGraph = reverseGraph(graph);

//   const queueS = new Queue();
//   const queueE = new Queue();

//   const visitedS = {};
//   const visitedE = {};

//   queueS.enqueue(s);
//   queueE.enqueue(e);

//   while (!(queueS.isEmpty() || queueE.isEmpty())) {
//     const nodeS = queueS.dequeue();
//     const nodeE = queueE.dequeue();

//     visitedS[nodeS] = true;
//     visitedE[nodeE] = true;

//     // Collision in paths
//     if (nodeS in visitedE || nodeE in visitedS) return true;

//     for (let adj of Object.keys(graph.findEdges(nodeS))) {
//       if (!(adj in visitedS)) queueS.enqueue(adj);
//     }

//     for (let adj of Object.keys(reversedGraph.findEdges(nodeE))) {
//       if (!(adj in visitedE)) queueE.enqueue(adj);
//     }
//   }

//   return false;
// };

// A simple BFS with early return, time - O(V + E), space - O(V)
const routeBetweenNodes = (graph, s, e) => {
  if (s === e) return true;

  const queue = new Queue();
  const visited = {};
  queue.enqueue(s);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node === e) return true;

    visited[node] = true;
    const adjacent = Object.keys(graph.findEdges(node));

    for (let adj of adjacent) {
      if (!visited[adj]) {
        queue.enqueue(adj);
      }
    }
  }

  return false;
};

// TESTS

const graph = new Graph();

for (let i of [1, 2, 3, 4, 5]) {
  graph.addNode(i);
}

graph.addEdge('1', '2');
graph.addEdge('2', '3');
graph.addEdge('2', '4');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '5');

console.log(routeBetweenNodes(graph, '1', '5'));
console.log(routeBetweenNodes(graph, '2', '1'));
console.log(routeBetweenNodes(graph, '5', '3'));
