const leftbutton = document.getElementById("left");
const rightbutton = document.getElementById("right");
const centerbutton = document.getElementById("center");
const icontain = document.querySelector('#imgs');
const message = document.getElementById("message");

// setting intervals for moving the images here using setInterval
let interval = setInterval(run, 5000);

function run() {
    cnt++;
    changeImage();
}

function changeImage() {
    if (cnt < 1) cnt = 4;
    else if (cnt > 4) cnt = 1;

    icontain.classList.remove("carousel1");
    icontain.classList.remove("carousel2");
    icontain.classList.remove("carousel3");
    icontain.classList.remove("carousel4");

    icontain.classList.add(`carousel${cnt}`);
}

let cnt = 1;

// adding onclick eventlisteners
rightbutton.addEventListener('click', () => {
    cnt++;
    if (cnt > 4) cnt = 1;

    icontain.classList.remove("carousel1");
    icontain.classList.remove("carousel2");
    icontain.classList.remove("carousel3");
    icontain.classList.remove("carousel4");

    icontain.classList.add(`carousel${cnt}`);
    clearInterval(interval);
    setTimeout(() => {
        setInterval(run, 5000);
    }, 500);
})

leftbutton.addEventListener('click', () => {
    cnt--;
    if (cnt < 1) cnt = 4;

    icontain.classList.remove("carousel1");
    icontain.classList.remove("carousel2");
    icontain.classList.remove("carousel3");
    icontain.classList.remove("carousel4");

    icontain.classList.add(`carousel${cnt}`);
    clearInterval(interval);
    setTimeout(() => {
        setInterval(run, 5000);
    }, 500);
})

centerbutton.addEventListener('click', () => {
    if (interval === null) {
        interval = window.setInterval(run, 5000);
        centerbutton.innerHTML = `<i class="fas fa-pause"></i>`;
        message.innerText = "The Carousel Slider is on auto play";
    } else {
        window.clearInterval(interval);
        centerbutton.innerHTML = `<i class="fas fa-play"></i>`;
        message.innerText = "The Carousel Slider is currently paused";
        interval = null;
    }
})