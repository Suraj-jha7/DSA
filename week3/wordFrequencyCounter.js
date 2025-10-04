// ✅ 5. Flatten nested array

// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]


// ✅ 7. Pair sum (Two Sum)

// Input: arr = [2, 7, 11, 15], target = 9
// Output: [2, 7]


// ✅ 8. Valid parentheses

// Input: "()[]{}" → true
// Input: "(]" → false

class Test {
    flatterArray(arr){
        let ans = arr.reduce((acc, curr) => {
           return acc.concat(Array.isArray(curr)?this.flatterArray(curr):curr);
        }, []);

        return ans;
    }

    wordFrequencyCounter(str){
        let arr = str.split(" ");
        let map = new Map();

        for(let i = 0 ; i < arr.length ; i++) {
            if(map.get(arr[i])){
                map.set(arr[i], map.get(arr[i])+1);
            }
            else {
                map.set(arr[i], 1);
            }
        }
        console.log(map);
    }

    twoSum(arr, target){
        let l = 0;
        let r = arr.length-1;

        while(l<=r) {
            console.log(arr[l]+arr[r] , target);
            if(arr[l]+arr[r] === target){
                return [arr[l], arr[r]];
            }
            
            else if(arr[l]+arr[r] < target) {
                l++;
            }

            else if(arr[l]+arr[r] > target) {
                r--;
            }
            console.log("left is ",l,"right is",r);

        }
        return 0;
    }

}

let t1 = new Test();
// console.log(t1.flatterArray([1, [2, [3, 4], 5], 6]));,
// t1.wordFrequencyCounter("this is a test this is");
console.log(t1.twoSum([2, 7, 11, 15], 9));
