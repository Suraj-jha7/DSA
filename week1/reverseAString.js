class DSA {
    async reverseString(str) {
        let ans="";
        for(let i=0; i<str.length; i++) {
            ans +=  str.charAt(str.length-1-i);
        }
        console.log(ans);
    }

     reverseString2(str) {
        console.log( str.split("").reverse().join(""));
    }

     pallindrome(str) {
        let temp = str;
        temp = str.split("").reverse().join("");
        if(temp==str)return true;
        return false;
    }

    factorial(num) {
        
    }
}

let t1 = new DSA();
// t1.reverseString("car");
//  t1.reverseString2("carjack");
// console.log(t1.pallindrome("madamm"));
