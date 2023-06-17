function countZeroes(arr) {

    if (arr[0] === 1 && arr[arr.length - 1] === 1) {
        console.log('no zeros found, count:')
        return 0
    }

    if (arr[0] === 0 && arr[arr.length - 1] === 0) {
        console.log('all zeros found, count:')
        return arr.length
    }


    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex)
    {   
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] === 1) {
            leftIndex = middleIndex
        }
        else if(arr[leftIndex] === arr[rightIndex]) {
            console.log('zero/s count:')
            return arr[rightIndex] - arr[leftIndex] + 1
        }
    }

}

module.exports = countZeroes

/*
             L         R
                 L     R 
                   L   R
                     
countZeroes([1,1,1,1,0,0])
             0,1,2,3,4,5
*/