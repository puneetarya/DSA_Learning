const graph =  {
a: ['b','c'],
b: ['d'],
c: ['e'],
d: ['f'],
e: [],
f: []
}

const depthFirstTraversal = (graph, start) => {
    const stack = [start];
    const result = [];
    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        graph[current].forEach(neighbor => stack.push(neighbor));  
    }
}

depthFirstTraversal(graph, 'a');