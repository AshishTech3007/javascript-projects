let results=document.querySelector('#results')
const submitbtn=document.querySelector('button')
const inputheight=document.querySelector('#height')
const inputweight=document.querySelector('#weight')

//bmi=kg/m2
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let inputheightcalc_in_m=(inputheight.value)/100
    let inputweightcalc=inputweight.value
    let bmi=(inputweightcalc/(inputheightcalc_in_m*inputheightcalc_in_m)).toFixed(2)
    if(bmi<18.6){
         results.innerHTML=`bmi :${bmi} Under Weight`
    }
    else if(bmi>=18.6 && bmi<24.9){
        results.innerHTML=`bmi :${bmi} Normal`
   }
   else{
     results.innerHTML=`bmi :${bmi} Overweight`
   }
   
}); 