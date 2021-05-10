function bindThis(f, oTarget) { 
    
    return function() {
        let args = Array.prototype.slice.call(arguments);
        return f.call(oTarget, ...args);
    }
    
}
function valid1() { 
    var r = bindThis(function(a, b){
            return this.test + a + b
        }, {test: 2})(2, 3); 
        
    return r === 7; 
}
console.log(valid1());