const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['d', 'f'],
    d: ['e'],
    e: [],
    f: []
};

hasPath = (graph, src, dst) => {
    const queue = [src];    
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;   
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}

console.log(hasPath(graph, 'a', 'd'));
console.log(hasPath(graph, 'a', 'e'));  
console.log(hasPath(graph, 'a', 'f'));
console.log(hasPath(graph, 'c', 'b'));