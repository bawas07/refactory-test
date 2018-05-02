const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

var full=[];
function adding(array){
    for (var i=0;i<array.length;i++){
        full.push(array[i]);
    }
}
function combine(first, second, third){
    var str=''
    adding(first);
    adding(second);
    adding(third);
    for(var i = 0;i<full.length;i++)
    if(i!=full.length-1){
        str = str+full[i]+' ';
    }else{
        str = str+full[i]
    };
    return str
}
console.log(combine(first,second,third))