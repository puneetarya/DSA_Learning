const graph = {
  i: ['j', 'k'],
  j: ['i', 'k'],
  k: ['i', 'j', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o'],
};

const hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
    for (let neighbor of graph[src]) {
        console.log(`neighbor: ${neighbor}`);
        if (hasPath(graph, neighbor, dst, visited) === true) {            
            return true;
        }
    }  
    return false;
};

console.log(hasPath(graph, 'i', 'm'));
// console.log(hasPath(graph, 'i', 'n'));  
// console.log(hasPath(graph, 'i', 'o'));
// console.log(hasPath(graph, 'k', 'o'));
// console.log(hasPath(graph, 'o', 'n'));