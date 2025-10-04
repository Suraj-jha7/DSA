// ✅ 1. Remove duplicates without Set

// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// --------------------------------
// ✅ 2. First non-repeating character

// Input: "swiss"
// Output: 'w'



class Test {
    removeDuplicates (arr) {
        if(arr.length<2)return arr;
        let set = new Set();
        for(let value of arr) {
            set.add(value);
        }
        return set;
    }

    removeDuplicatesWithoutSet(arr) {
        let map = new Map();

        for(let key of arr) {
            if(map.get(key)){
                map.set(key, (map.get(key)+1));
            }
            else {
                map.set(key, 1);
            }
        }

        console.log(map);
        arr = [];
        for(let key of map.keys(map)){
            console.log("31 :",key);
            arr.push(key); 
        }
        console.log(arr);
    }

    removeDuplicatess(arr) {
        let ans = [];
        for(let i = 0; i<arr.length; i++) {
            if(ans[ans.length-1]!=arr[i]){
                ans.push(arr[i]);
            }
        }
        console.log(ans);
        return ans;
    }

    findNonRepeatingcharacter(str) {
        let map = new Map();

        for(let i =0; i < str.length; i++) {
            if(map.get(str.charAt(i))){
                map.set(str.charAt(i), map.get(str.charAt(i))+1);
            }
            else {
                map.set(str.charAt(i), 1);
            }
        }

        for(let [key, value] of map.entries()){
            if(value < 2)console.log(key);
        }
    }

}

let arr = [1, 2, 2, 3, 4, 4, 5];
let t1 = new Test();
// console.log(t1.removeDuplicates(arr));

// console.log(t1.removeDuplicatesWithoutSet(arr));
// console.log(t1.removeDuplicatess(arr));
t1.findNonRepeatingcharacter("swiss");