let results=document.querySelector('#results')
const submitbtn=document.querySelector('button')
const ip_height=document.querySelector('#height')
const ip_weight=document.querySelector('#weight')
//bmi=kg/m2
function bmicalculator(h,w){
    let bmi=((w)/((h*h)/100*100)).toFixed(2)
    return bmi
}

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let height=ip_height.value
    let weight=ip_weight.value
    let bmiresults
    if(height>0 && weight>0)
    {
        bmiresults=  bmicalculator(height,weight)

        if(bmiresults<18.6){
            results.innerHTML=`bmi :${bmiresults} Under Weight`
        }
        else if(bmiresults>=18.6 && bmiresults<24.9){
            results.innerHTML=`bmi :${bmiresults} Normal`
        }
        else{
            results.innerHTML=`bmi :${bmiresults} Overweight`
        }
    } 
    else{
        results.innerHTML=`Not a valid height/weight`
    } 
   
   
}); 