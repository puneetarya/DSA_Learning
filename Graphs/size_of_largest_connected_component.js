const graph = {
0: ['8', '1', '5'],
1: ['0'],
5: ['0', '8'],  
2: ['3', '4'],
3: ['2', '4'],
4: ['3', '2'],
8: ['0', '5'],
};

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > longest) longest = size;
    }
  return longest;
}

const exploreSize = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;
    visited.add(String(current));
    let size = 1;
    for (let neighbor of graph[current]) {
        size += exploreSize(graph, neighbor, visited);
    }   
    return size;
}

console.log(largestComponent(graph));
// Output: 4