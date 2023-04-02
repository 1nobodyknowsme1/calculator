
var inputText = "";


var btn = document.querySelectorAll('.button');


    
        
    




Array.from(btn).forEach((button)=>{
    button.addEventListener('click',function(e){
    if(e.target.innerHTML == "="){
        inputText = eval(inputText);
        document.querySelector("input").value = inputText;

    }
    else if(e.target.innerHTML =="C"){
        inputText = "";
    document.querySelector("input").value = inputText;

    }
    else{
    inputText = inputText+e.target.innerHTML;
    document.querySelector("input").value = inputText;
    }
    document.querySelector("input").value = inputText;

    var clickedBtn = this.id;
    console.log(clickedBtn)
    
    document.querySelector(`#${clickedBtn}`).classList.add('elementToFadeInAndOut');
        setTimeout(() => {
        document.querySelector(`#${clickedBtn}`).classList.remove('elementToFadeInAndOut');
        
        },100);
})
})




