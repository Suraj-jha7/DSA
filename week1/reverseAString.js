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

    // 1*2*3*4*5
    factorial(num) {
        if(num<1)return 0;
        let ans = 1;
        for(let i = 1; i<=num; i++) {
            ans = ans*i;
        }
        return ans;
    }

    factorialRec(num) {
        if(num == 1 || num == 0 )return num;

        const ans1 = this.factorialRec(num-1);
        return ans1*num

    }
}

let t1 = new DSA();
// t1.reverseString("car");
//  t1.reverseString2("carjack");
// console.log(t1.pallindrome("madamm"));
console.log(t1.factorialRec(5));
