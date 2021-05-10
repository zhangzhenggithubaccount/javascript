function formatDate(t, str) {

    function padStart(s) {
        return s < 10? '0' + s: s;
    }

    let obj = {
        yyyy : t.getFullYear(),
        yy : String(t.getFullYear()).slice(-2),
        MM : padStart(t.getMonth() + 1),
        M : t.getMonth() + 1,
        dd : padStart(t.getDate()),
        d : t.getDate(),
        HH : padStart(t.getHours()),
        H : t.getHours(),
        hh : padStart(t.getHours() % 12),
        h : t.gethours % 12,
        mm : padStart(t.getMinutes()),
        m : t.getMinutes(),
        ss : padStart(t.getSeconds()),
        s : t.getSeconds(),
        w : ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };

    return str.replace(/([a-zA-Z]+)/g, function($1) {return obj[$1]});
    
}

let time = formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w');
console.log(time);

function valid1() { 
    var localOffset = new Date().getTimezoneOffset()*60*1000; 
    var sResult = formatDate(new Date(1409894060000+localOffset), 'yy-M-d hh:m:s 星期w'); 
    console.log(sResult);
    return sResult === '14-9-5 05:14:20 星期五'; 
}
valid1();