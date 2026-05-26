
// Recursive version

const graph =  {
a: ['b','c'],
b: ['d'],
c: ['e'],
d: ['f'],
e: [],
f: []
}

const depthFirstTraversal = (graph, start, visited = new Set()) => {
    if(visited.has(start)) return;
    console.log(start);
    visited.add(start);
    graph[start].forEach(neighbor => depthFirstTraversal(graph, neighbor, visited));
}   

depthFirstTraversal(graph, 'a');