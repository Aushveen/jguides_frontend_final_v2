let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        //productImg.src = `./images/${i + 1}.jpg`;
        //console.log(productImg.src.split('/').pop());
        removeActiveClass();
        this.classList.add("active");
    });
}

function removeActiveClass() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
}