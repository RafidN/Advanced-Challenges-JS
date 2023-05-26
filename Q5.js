//Find all the posts by a single user calling a mock API 

async function postsByUser(userID) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json() 

    const posts = result.filter(element => element.userId === userID)

    console.log(posts)
}



postsByUser(4)