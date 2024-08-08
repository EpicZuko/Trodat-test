const rangeLeft = document.querySelector('.thumb-left');
const rangeRight = document.querySelector('.thumb-right');
const filledTrack = document.querySelector('.filled-track');

function setFill() {
    const min = parseInt(rangeLeft.value);
    const max = parseInt(rangeRight.value);
    filledTrack.style.left = (min / rangeLeft.max) * 100 + '%';
    filledTrack.style.width = ((max - min) / rangeLeft.max) * 100 + '%';
}

rangeLeft.addEventListener('input', setFill);
rangeRight.addEventListener('input', setFill);

// Initialize fill on load
setFill();

/* 2 */

const rangeLeft2 = document.querySelector('.thumb-left-2');
const rangeRight2 = document.querySelector('.thumb-right-2');
const filledTrack2 = document.querySelector('.filled-track-2');

function setFill2() {
    const min2 = parseInt(rangeLeft2.value);
    const max2 = parseInt(rangeRight2.value);
    filledTrack2.style.left = (min2 / rangeLeft2.max) * 100 + '%';
    filledTrack2.style.width = ((max2 - min2) / rangeLeft2.max) * 100 + '%';
}

rangeLeft2.addEventListener('input', setFill2);
rangeRight2.addEventListener('input', setFill2);

// Initialize fill on load
setFill2();