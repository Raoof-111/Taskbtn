// Taskiniz dersde dediyim kimi, butona clikledikde 1 den 10-na kimi gelir sonrada geri qayidir



let btn = document.getElementById("btn");
let count = 1;

btn.addEventListener("click", () => {
 

  if(count< 10){
    btn.textContent = `Click me ${count++}`;
  }
  
     
  else if (count > 1 ){
    btn.textContent = `Click me ${count--}`;

  }
});




