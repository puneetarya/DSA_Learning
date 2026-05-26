const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['d', 'f'],
    d: ['e'],
    e: [],
    f: []
};

const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) return true;
    }
    return false;
}

console.log(hasPath(graph, 'a', 'd'));
console.log(hasPath(graph, 'a', 'e'));
console.log(hasPath(graph, 'a', 'f'));
console.log(hasPath(graph, 'c', 'b'));