function namespace(oNamespace, sPackage) {
    let objStr = sPackage.split('.');
    let res = oNamespace;
    for(let i = 0; i < objStr.length; i++) {
        if(!(res[objStr[i]] instanceof Object)) {
            res[objStr[i]] = {};
        }
        res = res[objStr[i]];
        console.log(oNamespace);
    }
    return oNamespace;
}
let res = namespace({a: {test: 1, b: 2}}, 'a.b.c.d');
console.log(res);