const showPopup = document.querySelector(".show-popup");
const popContainer= document.querySelector(".popup-container");
const closeBtn= document.querySelector(".close-btn");
showPopup.onclick =()=>{
    popContainer.classList.add('active')
}
closeBtn.onclick =()=>{
    popContainer.classList.remove('active')
}