//event listeners 2
const RevealBtn = document.querySelector('.reveal-btn');
const HiddenContent = document.querySelector('.hidden-content');
function RevealContent(){
    if(HiddenContent.classList.contains('reveal-btn')){
        HiddenContent.classList.remove('reveal-btn');
    }else {
        HiddenContent.classList.add('reveal-btn');
    }
}
RevealBtn.addEventListener('click', RevealContent);