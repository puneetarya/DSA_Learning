const graph = {
    1: ['2'],
    2: ['1'],
    3: [],
    4: ['6'],
    5: ['6'],
    6: ['4', '5', '7', '8'],
    7: ['6'],
    8: ['6'],
};

function connectedComponentsCount(graph) {
    let visited = new Set();
    let count = 0;
    for (let node in graph) {   
        console.log(`Checking node: ${node}`); // Print the current node being checked
        if (!visited.has(node)) {
            dfs(node, graph, visited);
            console.log('visited:', visited); // Print the visited set after DFS
            count++;
        }
    }
    return count;
}
function dfs(node, graph, visited) {
    visited.add(node);
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, graph, visited);
        }
    }
}               
console.log(connectedComponentsCount(graph)); // Output: 3  }