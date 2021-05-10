function cssStyle2DomStyle(sName) {
    sName = sName.split('');
    if(sName[0] === '-') {
        sName.splice(0, 1);
    }
    for(let i = 0; i < sName.length; i++) {
        if(sName[i] === '-') {
            //string 没有splice方法
            sName.splice(i, 1);
            sName[i] = sName[i].toUpperCase();
        }
    }
    return sName.join('');
}
let sName = cssStyle2DomStyle('font-size');
console.log(sName);
