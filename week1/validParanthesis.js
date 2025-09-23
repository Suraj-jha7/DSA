const { startTransition } = require("react");

class DSA {
    validPrentheses(str) {
        console.log("test");
        // ({[()]})
        // ({[()()()]})
        let stack = [];
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
        let openingBrackets = Object.keys(keyMapper);
        let closingBrackets = Object.values(keyMapper);

        str = str.trim();
        let keys = ['(', '{', '['];
        for(let i =0 ; i<str.length; i++) {
            // console.log(stack);
            // console.log(str.charAt(i)," ",keys.includes(str.charAt(i)));
            let char = str.charAt(i);
            if(openingBrackets.includes(char)) {
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
console.log(t1.validPrentheses("  ({[()()}()]})   "))
