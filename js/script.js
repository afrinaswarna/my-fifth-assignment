

const heartButtons = document.getElementsByClassName('heart-button')
let heartCount = document.getElementById('heart-count')
let heartCountInnerText = heartCount.innerText
let heartCountConverted = parseInt(heartCountInnerText)
for(let heartButton of heartButtons){
    heartButton.addEventListener('click',function(){
        heartCountConverted++
        heartCount.innerText=heartCountConverted

    })
}


