const canvas_cont=document.querySelector('.canvas')
const changebgColor=function(color){
    document.body.style.backgroundColor=color
}
const arr=[]
document.querySelectorAll('span.button').forEach((btn)=>{
    arr.push(btn.getAttribute('id'))
});
console.log(arr)
canvas_cont.addEventListener('click',(e)=>{
    e.stopPropagation();
    arr.map((color)=>{
        if(e.target.id===color)
        {
            changebgColor(color)
        }
    })
   
});