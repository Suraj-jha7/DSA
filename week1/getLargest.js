class DSA {
   
      largest2ndLargest(arr) {
        let min = Number.MIN_VALUE;
        let max = Number.MIN_VALUE;
        for(let i=0; i<arr.length; i++) {
            if(arr[i]>max) {
                min = max;
                max = arr[i];
            }
        }
        return `largest values is ${max} end 2nd largest is ${min}`;
    }

    missingNumberInSortedArray(arr) {
        if(arr.length ==1)return arr[0];
        for(let i=1; i<arr.length; i++) {
            if(arr[i-1]+1 !==arr[i]) return arr[i]-1;
        }

    }

    missingNumberInunSortedArray (arr) {
        let sortedArr = this.getSortedArr(arr);
        console.log(sortedArr);
         if(arr.length ==1)return arr[0];
        for(let i=1; i<arr.length; i++) {
            if(arr[i-1]+1 !==arr[i]) return arr[i]-1;
        }
    }

    getSortedArr(arr) {
        for(let i=0 ; i<arr.length; i++) {
            for(let j=0; j<arr.length-1-i; j++) {
                if(arr[j]>arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;

    }
    
    findDuplicates(arr) {
        let sortedArr = this.getSortedArr(arr);
        for(let i =0; i<arr.length-1; i++) {
            if(sortedArr[i] == sortedArr[i+1]) return sortedArr[i];
        }
    }

    findDuplicatesWithoutSorting(arr) {
        let charCount = {};

        for(let i = 0; i<arr.length; i++) {
            charCount[arr[i]]?charCount[arr[i]]=charCount[arr[i]]+1: charCount[arr[i]]=1;
             console.log(charCount);
            if(charCount[arr[i]]>1)return arr[i];
        }
        console.log(charCount);
    }

    findDuplicatesWithoutSortingwithMao(arr) {
        let charCount = new Map();
         for(let i =0; i<arr.length; i++) {
            charCount.has(arr[i])? charCount.set(arr[i], charCount.get(arr[i])+1): charCount.set(arr[i], 1);
            //  console.log(charCount);
         }
         console.log(charCount);
         for(let [key, value] of charCount.entries()) {
            if(value > 1)
            {
                return key;
            }
         }
         return null;
    }

    frequencyCharater(str) {
        let charCount = {}

        for(let i =0; i<str.length; i++) {
            charCount[str.charAt(i)]?charCount[str.charAt(i)] = charCount[str.charAt(i)]+1: charCount[str.charAt(i)] = 1;
        }
        console.log(charCount);
    }

    frequencyCharaterr(str) {
        let charCount = new Map();

        for(let i =0; i<str.length; i++) {
            charCount.get(str.charAt(i))? charCount.set(str.charAt(i), charCount.get(str.charAt(i))+1) : charCount.set(str.charAt(i), 1)
        }
        console.log(charCount);
    }

    anagramCheck(str1, str2) {
        let feqCount = new Map();
        for(let i = 0; i<str1.length; i++) {
            feqCount.get(str1.charAt(i))?feqCount.set(str1.charAt(i), feqCount.get(str1.charAt(i))+1): feqCount.set(str1.charAt(i), 1);
        }
        console.log("102 -",feqCount);
        for(let i = 0; i<str2.length;i++) {
            if(feqCount.get(str2.charAt(i)))
             feqCount.set(str2.charAt(i), feqCount.get(str2.charAt(i))-1);
            else {
                return false;
            }
        }
        for(let [key, value] of feqCount.entries()) {
            if(value>0)return false;
        }
        console.log(feqCount);
        return true;
    }

    validPrentheses(str) {
        console.log("test");
        // ({[()]})
        // ({[()()()]})
        let stack = [];
        stack.push();
        stack.pop();
        // let keyMapper = {
        //     ')':'(',
        //     '}':'{',
        //     ']':'['
        // }
         let keyMapper = {
            '(':')',
            '{':'}',
            '[': ']'
        }
        let keys = ['(', '{', '['];
        for(let i =0 ; i<str.length; i++) {
            console.log(stack);
            if(keys.includes(str.charAt(i))) {
                stack.push(str.charAt(i));
            }
            else {
                if(str.charAt(i)!==keyMapper[stack.pop()])return false;
            }
        }
        if(stack.length===0)return true;
        console.log("gsgsg");
        return false;
    }

}

let t1 = new DSA();
// console.log(t1.largest2ndLargest([1,4,-30, 99, 199]));

// console.log(t1.missingNumberInSortedArray([1,4,41,991,]))
// console.log(t1.missingNumberInunSortedArray([1,3,2,5,7,6]));
// console.log(t1.findDuplicates([1, 3, 4, 2, 2]));
// console.log(t1.findDuplicatesWithoutSorting([1, 3, 4, 2, 2, 19, 10, 19, 19]));
// console.log(t1.findDuplicatesWithoutSortingwithMao([1, 3, 4, 2, 2, 19, 10, 19, 19]));
// t1.frequencyCharaterr("fkajfafaf");
// console.log(t1.anagramCheck("listen", "listenn"))
// console.log(t1.anagramCheck("({[()]})"));
console.log(t1.validPrentheses( "({[()]})"));