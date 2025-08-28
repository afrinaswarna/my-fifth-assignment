// function to get innerText 
function getElement(id){
const getElement = document.getElementById(id)
const getElementInnerText = getElement.innerText
const getElementConverted = parseInt(getElementInnerText)
return getElementConverted
}

// functionalities for heart button

let heartButtons = document.getElementsByClassName('heart-button')

for(let heartButton of heartButtons){
    heartButton.addEventListener('click',function(){
        let heartCount = getElement('heart-count')
        console.log(heartCount)
        heartCountIncrease = heartCount+1
        document.getElementById('heart-count').innerText=heartCountIncrease

    })
}

// functionalities for call button

let callButtons = document.getElementsByClassName('call-button')
for(let callButton of callButtons){
  callButton.addEventListener('click',function(){
    let coinCount = getElement('coin-count')
    
    if(coinCount >= 20){
        coinCountReduce = coinCount - 20
        document.getElementById('coin-count').innerText=coinCountReduce
        const serviceName = callButton.parentNode.parentNode.parentNode.childNodes[5].innerText
        const serviceNumber = callButton.parentNode.parentNode.parentNode.childNodes[7].innerText
        console.log(serviceNumber)
        alert(`calling ${serviceName} ${serviceNumber}...`)
    }
    else{
        alert('You do not have enough coin. You need at least 20 coins for calling') 
    }
})

}