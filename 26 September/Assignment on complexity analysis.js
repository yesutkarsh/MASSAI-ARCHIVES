
// Q1: Constant Time Complexity
function retunrIndexOne(arr){
  return arr[0]
}

// Test Case
// console.log(retunrIndexOne([5,10,15]))

// Q2: Logarithmic Time Complexity
function LogarithmicTimeComplexity(n){
  count = 0
  for(let i = 0; n>=1; i++){
    n = n/2
    count++
  }
  return count
}


// Test Case
console.log(LogarithmicTimeComplexity(1000))

// Q3: Linear Time Complexity
function returnMaximum(array){
let max = ""
for(let i =0; i<array.length; i++){
    if(array[i]>max){
        max = array[i]
    }
}
return max
}
// Test Case 
console.log(returnMaximum([4,1,7,2,9]))

// Q4: Linear Time Complexity
function countEvenNumbers(array){
  let count = 0;
  for(let i = 0; i<array.length; i++){
    if(array[i]%2==0) count+=1
  }
  return count
}
// Test Case
console.log(countEvenNumbers([1,2,3,4,5]))

// Q:5 Quadratic Time Complexity
let arr = [1, 2, 3, 4, 5]
let target = 6;
function returnPair(arr,target){
    let array = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                array.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return array
}

// Test Case
console.log(returnPair(arr,target))


// Q:6 Cubic Time Complexity

function fibonacci(n){
    let arr = [0,1]
    for(let i = 0; i<n; i++){
        arr.push(arr[arr.length-1]+arr[arr.length-2])
    }
    return arr[5]
}

console.log(fibonacci(5))



// Q7: Spce Complexity (Linear)


function double(array){
    let newArray = []
    for(let i =0; i<array.length; i++){
        let temp = newArray.push(array[i],array[i])
    }
    return newArray
}
// Test Case
console.log(double([1,2,3]))
