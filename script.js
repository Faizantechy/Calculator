let string=''

let buttons=document.querySelectorAll('.btn')

Array.from(buttons).forEach(function(btn){

    btn.addEventListener('click', function(e){

console.log(e.target)

if(e.target.innerHTML=='='){

    string=eval(string)


} 

else if(e.target.innerHTML=='C'){

    string=''


} 


else {
    string = string + e.target.innerHTML;
}
document.querySelector('input').value=string
    })

})


