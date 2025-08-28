// function to get innerText
function getElement(id) {
  const getElement = document.getElementById(id);
  const getElementInnerText = getElement.innerText;
  const getElementConverted = parseInt(getElementInnerText);
  return getElementConverted;
}

// functionalities for heart button

let heartButtons = document.getElementsByClassName("heart-button");

for (let heartButton of heartButtons) {
  heartButton.addEventListener("click", function () {
    let heartCount = getElement("heart-count");
    console.log(heartCount);
    heartCountIncrease = heartCount + 1;
    document.getElementById("heart-count").innerText = heartCountIncrease;
  });
}

// functionalities for call button

let callButtons = document.getElementsByClassName("call-button");
for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
     let coinCount = getElement("coin-count");
     let serviceName =
        callButton.parentNode.parentNode.parentNode.childNodes[3].innerText
     let serviceNumber =
        callButton.parentNode.parentNode.parentNode.childNodes[7].innerText;
     let date = new Date().toLocaleDateString();
     if (coinCount >= 20) {
         coinCountReduce = coinCount - 20;
         document.getElementById("coin-count").innerText = coinCountReduce;
         alert(`calling ${serviceName} ${serviceNumber}...`);
         let callHistoryContainer = document.getElementById("call-history-container");
         callHistoryContainer.style.display='block'
         let div = document.createElement("div");
         div.innerHTML=`
        <div class="bg-[#FAFAFA] p-2  rounded-lg my-2">
            <div class="flex justify-between items-center ">
              <div>
                <h2 class="font-bold text-sm font-inter">${serviceName}</h2>
                <p class="text-sm text-[#5c5c5c] font-madurai">${serviceNumber}</p>
              </div>
              <p class="text-[#111111FF] font-madurai">${date}</p>
            </div>
        </div>`;
     callHistoryContainer.append(div);
} 
     
     else {
         alert(
         "You do not have enough coin. You need at least 20 coins for calling"
         );
     }

    
  });
}

// functionalities for clear button
document.getElementById('clear-button')
.addEventListener('click',function(){
    const callHistory=document.getElementById('call-history-container')
    callHistory.style.display='none'
    callHistory.innerHTML=''
})
