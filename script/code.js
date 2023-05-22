let result = document.getElementById('screen');
function display(value) {
    result.value
    += value;
} 
document.getElementById('delete').
addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})
document.getElementById('clear')
.addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(output.length)
})

document.getElementById('answer').
addEventListener('click', (e)=>{
    result.value = eval(result.value).toFixed(2)
})
document.querySelectorAll('arithmetics').forEach( (symbols)=>{
    symbols.addEventListener('click', (e)=>{
        result.value += e.target.innerText
    })
})
document.getElementById('division')
.addEventListener('click', ()=>{
    firstOp = result.value;
    operator = "/";
    clear();
})
function display (value){
    if(value == "." && checkerArray.includes(".")){
        return
    }else if(value== "/" || value == "*" || value == "+" || value == "-") {
    }else {
        result.value += value;
        checkerArray.push(value)
    }
}