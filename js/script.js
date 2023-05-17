'use strict';

const tabs = document.querySelectorAll('.tabs-btn-wrapper'),
      tabcontentplan = document.querySelector('.tabs-content-wrapper__img'),
      tabcontentonfloor = document.querySelector('.tabs-content-wrapper__onfloor');

toggleActive(0);
changeContent();

tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
        toggleActive(index);
        changeContent();
    });
});

function toggleActive(index) {
    tabs.forEach(item => item.classList.remove('active'));
    tabs[index].classList.add('active');
}

function changeContent() {
    if (tabs[0].classList.contains('active')) {
        tabcontentplan.classList.add('show');
        tabcontentonfloor.classList.remove('show');
    } else {
        tabcontentonfloor.classList.add('show');
        tabcontentplan.classList.remove('show');
    }
}

const loopBtn = document.querySelector('.slider'),
      loopImg = document.querySelector('.tabs-onfloor-img');

loopBtn.addEventListener('input', () => {
    let loogCof = loopBtn.value;
    loopImg.style.width = `${loogCof}%`;
})

