const graph =  {
a: ['b','c'],
b: ['d'],
c: ['e'],
d: ['f'],
e: [],
f: []
}

breadthFirstTraversal = (graph, start) => {
    const queue = [start];
    const result = [];
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        graph[current].forEach(neighbor => queue.push(neighbor));  
    }
}

breadthFirstTraversal(graph, 'a');  

