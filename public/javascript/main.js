var redBlock = document.getElementById('red-block');
var greenBlock = document.getElementById('green-block');
redBlock.addEventListener("click",function(){
    redBlock.classList.toggle("red-block-on");
});
greenBlock.addEventListener("click", function(){
    greenBlock.classList.toggle("green-block-on");
});