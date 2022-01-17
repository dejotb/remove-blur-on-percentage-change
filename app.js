'use strict'

const removeBlur = function() {
    // selecting elements
    const text = document.querySelector('.text');
    const background = document.querySelector('.background');
    let number = 0;


    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    // counting percent from 0 to 100
    const percentCount = function() {
        number++;

        text.innerHTML = `${number}%`;
        text.style.opacity = scale(number, 0, 100, 1, 0);
        background.style.filter = `blur(${scale(number, 0, 100, 60, 0)}px)`;

        if (number > 99) {
            clearInterval(handleCount);
        }
    }

    const handleCount = setInterval(percentCount, 35)
}

removeBlur()

