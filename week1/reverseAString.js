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
        if(typeof str !=='string' && typeof str!='number') return false;
        let temp = str.toString();
        temp = str.split("").reverse().join("");
        if(temp==str)return true;
        return false;
    }

    // 1*2*3*4*5
    factorial(num) {
        if(num<1)return 1;
        let ans = 1;
        for(let i = 1; i<=num; i++) {
            ans = ans*i;
        }
        return ans;
    }

    factorialRec(num) {
        if(num == 1 || num == 0 )return 1;

        return num * this.factorialRec(num-1);
    }

    // Input: 7
    // Output: 0 1 1 2 3 5 8
    fibbonacci(num) {
        let a = 0;
        let b = 1;
        let arr = [];
        if(num==1) return [0];
        arr = [0, 1];
        for(let i=2; i < num; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr;
    }

    fibbonacci(num) {
        let a = 0;
        let b = 1;
        let ans = "";
        if(num==1) return '0';
        ans+='0'+ ' '+'1'+' ';
        
        for(let i=2;i<num;i++) {
            let c = a+b;
            ans+= c.toString()+" ";
            a=b;
            b=c
        }
        return ans
    }

    fibbonacci2(num) {
        let a = "0";
        let b = "1";
        let ans = "";
       
        for(let i=2;i<num;i++) {
            ans+=a+(i==num.length-1?" ":"");
            let temp = a+b;
            a = b;
            b = temp;
        }
        return ans
    }

    checkPrimeNumber(num) {
        if(num<=1) return false;
        if(num=='2')return true;
        for(let i = 2; i<=Math.sqrt(num); i++) {
            if(num%i==0)return false;
        }
        return true;
    }

    printPrimeNumber(num) {

        for(let i = 2; i <= num; i++) {
            let flag = true;
            for(let j=2; j<=Math.sqrt(i);j++) {
                if(i%j==0)flag = false;
            }
            if(flag)console.log(i);
        }
    }
}

let t1 = new DSA();
// t1.reverseString("car");
//  t1.reverseString2("carjack");
// console.log(t1.pallindrome(1211));
// console.log(t1.factorialRec(5));
// console.log(t1.fibbonacci(0));
// console.log(t1.checkPrimeNumber(19));
t1.printPrimeNumber(30);

