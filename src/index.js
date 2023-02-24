module.exports = function check(str, bracketsConfig) {
    
    var stack = [];
    let incorrectOrder;
    
    for (let i = 0; i < str.length; i++) {
        let add = false;
        let del = false;

        if (stack.length === 0) {
            bracketsConfig.forEach(element => {
                if (str[i] === element[0] && stack.length === 0) {
                    add = true; 
                }

                if (str[i] === element[1] && element[0] !== element[1]) incorrectOrder = true;
            });

        } else { // if (stack.length !== 0)

            bracketsConfig.forEach(element => {
                // console.log('str[i] :',str[i]);

                if (str[i] === element[0] && str[i] === element[1]) { // If open and close brackets is equal (element[0] === element[1])
                    if (stack.at(-1) === str[i]) {
                        del = true; //console.log('delete equal bracket');
                    } else {
                        add = true; //console.log('add equal bracket');
                    }

                } else { //if element[0] !== element[1]
                    if (str[i] === element[0] ) {
                        // console.log(`Add ${str[i]}`);
                        add = true;
                    }
                    if (stack.at(-1) === element[0] && str[i] === element[1]) {
                        // console.log(`Del ${str[i]}`);
                        del = true;
                    }
                }
            });

        }
        
        if (add) stack.push(str[i]); //Add
        if (del) stack.pop(str[i]);
    } // for
    
    if (incorrectOrder) {
        // console.log('Incorrect order of brackets');
        return false;
    }
    if (stack.length === 0) {
        // console.log(`Stack is empty.`);
        return true;
    } else {
        // console.log(`Stack is NOT empty. Length: ${stack.length} Stack: ${stack}`);
        return false;
    }

}