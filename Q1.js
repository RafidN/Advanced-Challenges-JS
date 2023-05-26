//show rating , turn number value eg. 4.5 --> ****.

function showRating(num) {
    let rating = ""
    while(num-1 > -1) {
        if(num === 0.5) {
            rating += "."
            return rating
        }
        else{
            rating += "*"
        }
        num-=1
    }
    return rating 
}

console.log(showRating(4.5))