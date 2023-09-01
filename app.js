let decrease=document.querySelector('.decrease');
let increase= document.querySelector('.increase');
let reset= document.querySelector('.reset');
let value= document.querySelector('#value');

let num=0;
function incFunction(){
	value.innerText=num+=1;

}

increase.onclick=incFunction;

function decFunction(){
	value.innerText=num=num-1;
}
decrease.onclick=decFunction;
function resetFunction(){
value.innerText=num=0;

}
reset.onclick=resetFunction;