function rgb2hex(sRGB) {
    let rg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    let rgbs = sRGB.match(rg);
    let res = '#';
    
    for(let i = 1; i < rgbs.length; i++) {
        let m = parseInt(rgbs[i]);
        if(m >= 0 && m <= 255) {
            res += m < 16? '0' + m.toString(16): m.toString(16);
        }else {
            return sRGB;
        }
    }
    return res;
}
let res = rgb2hex('rgb(255,255,100)');
console.log(res);