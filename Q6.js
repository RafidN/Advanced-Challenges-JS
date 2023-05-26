// Use a mock API to find the First Six Incomplete Todos

async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    
    const incomplete = result.filter(element => !element.completed).slice(0, 6)

    console.log(incomplete)
}

firstSixIncomplete()