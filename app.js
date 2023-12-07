const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function pageTrnasition(){
    // btn click active cls
    // console.log(secBtn);
    for(let i = 0; i< secBtn.length; i++){
        secBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            console.log(currentBtn);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className  += ' active-btn'
        })
    }
}


pageTrnasition()