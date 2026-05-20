function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){
    if(b === 0) return 'Error:doesnt div by 0'
    return a/b;
}  5
function mul(a,b){
    return a*b;
}

module.exports = {add,sub,div,mul};


