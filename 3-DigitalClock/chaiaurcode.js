const clock=document.querySelector('#clock')
setInterval(()=>{
    let localtime=new Date().toLocaleTimeString()
    clock.innerHTML=localtime
},1000)