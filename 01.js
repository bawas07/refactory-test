var teks = "ibu ratna antar ubi"

function huruf(str){
    var x = ''
    for(var i=str.length-1;i>=0;i--){
        x=x+str[i];
    };
    return x;
};

function kata(str){
    var x = [];
    var y = '';
    var temp = str;
    var con = true;
    var count = 0;
    var leng = str.length;
    while(con==true){
        count = temp.indexOf(' ');
        if(count==-1){
            con = false;
            x.push(temp.substr(0,temp.length))
        };
        x.push(temp.substr(0,count))
        temp = temp.substr(count+1,temp.length)
    };
    for(var i=x.length-2;i>=0;i--){
        y=y+x[i]+' ';
    };
    return y;
};

console.log(huruf(teks));
console.log(kata(teks));