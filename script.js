'use strict'
const modeToggle = document.querySelector('.lightMode');
const checkBox = document.getElementById('check');
const sunToggle = document.querySelector('.sun');
const mainText = document.getElementById('mainText');


checkBox.addEventListener('click', function(){
    sunToggle.classList.toggle('moon');
    sunToggle.classList.toggle('sun');
    sunToggle.style.transition = "0.3s"

    if(modeToggle.classList.contains("lightMode")){
        modeToggle.classList.remove("lightMode");
        modeToggle.classList.add("darkMode");
        mainText.textContent = "Dark Mode"
        modeToggle.style.transition = "0.3s"
    } else if (modeToggle.classList.contains("darkMode")){
        modeToggle.classList.remove("darkMode");
        modeToggle.classList.add("lightMode");
        mainText.textContent = "Light Mode"
        modeToggle.style.transition = "0.3s"
    }
})

