const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++


    // Counts 1-100 check on this
if (load > 99) {
    clearInterval (int)

}
// Starts counting up to 100
    loadText.innerText =`${load}%`

    // amount of time want to happen 1 to 0 opacity 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    // background filters the blur and scales 
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}
// This maps a range of numbers to another range of numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
    // console.log(load) // start fully opacity 
// map 0 to 100  soild to dissapear