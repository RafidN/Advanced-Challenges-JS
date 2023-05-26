// sort array by lowest to higihest 

function sortLowToHigh(arr) {

    
    for(i=0; i<arr.length; i++) {
        for(c=0; c<arr.length; c++) {
            if(arr[c] > arr[i]) {
                let temp = arr[i]
                arr[i] = arr[c]
                arr[c] = temp
            }
        }
    }

    return arr
}

console.log(sortLowToHigh([5, 10, -1, -11, 14, 59]))