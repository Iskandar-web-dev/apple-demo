let box = document.querySelectorAll(".box")
box.forEach(boxx => {
    boxx.onmouseenter = () => {
        console.log('ss');
        boxx.classList.add('box-active')
    }
})