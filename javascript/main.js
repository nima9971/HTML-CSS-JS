// random background image every 5s
let imgContent = document.querySelector(".img");
let img = document.querySelectorAll(".img img");
let btn = document.getElementsByClassName("button")
let randomNo = document.querySelector(".random-no");
let randomYes = document.querySelector(".random-yes");
let swippingImage;
let counter = 0;
let randomBackground = true;


// console.log("nima")

//yes-no randome background pic events
randomNo.addEventListener("click", () => {
    randomBackground = false;
    if (randomBackground === false) {
        clearInterval(swippingImage);
        img[counter].classList.add("active");
        window.localStorage.setItem("backpic", counter)
        console.log("done")
        randomYes.classList.remove("rand-on");
        randomNo.classList.add("rand-off")
    }
})
randomYes.addEventListener("click", () => {
    randomBackground = true;
    window.localStorage.removeItem("backpic")
    randomPic();
    console.log("not done")
})
// calling random background fuction
randomPic(); 

function randomPic() {
    if (window.localStorage.getItem("backpic") === null) {
        if (randomBackground === true) {
            randomYes.classList.add("rand-on");
            randomNo.classList.remove("rand-off")
            swippingImage = setInterval(() => {
                if (randomBackground === true) {
                    img.forEach((img) => {
                        img.classList.remove("active");
                    })
                    counter++;
                    if (counter > img.length - 1) {
                        counter = 0;
                    }
                    if (counter < img.length) {
                        img[counter].classList.add("active");
                    }
                }
        }, 5000);
        }
    }
    // window.localStorage.removeItem("backpic")
}

// check if there is background picture in the localstorage
window.onload = () => {
    if (window.localStorage.getItem("backpic") !== null) {
        img[window.localStorage.getItem("backpic")].classList.add("active");
        randomNo.classList.add("rand-off")
    }
    if (window.localStorage.getItem("bullet") === "true") {
        let bulltesDiv = document.createElement("div");
        bulltesDiv.classList.add("bulletsDiv");
    if (colorChangeYes === true) {
        for(i = 0; i < sections.length; i++) {
            let bulletlink = document.createElement("a");
            bulletlink.href = `#${sections[i].id}`;
            let bulletSpan = document.createElement("span");
            bulletlink.classList.add('bulletSpan');
            bulletlink.classList.add("border-color");
            bulletlink.appendChild(bulletSpan)
            bulltesDiv.appendChild(bulletlink);
            console.log(`${i}`)
        }
        document.body.appendChild(bulltesDiv);
        colorChangeYes = false;
        bulletClick.forEach((clk) => {
            clk.classList.remove("on");
        })
        bulletClick[0].classList.add("on")
    }
}
}

// progress bar wdith on scroll
let progBar = document.querySelectorAll(".prog-bar");
let skills = document.querySelector(".skills-container");
let loc = skills.offsetTop;

window.onscroll = () => {
    if (loc < window.scrollY) {
        progBar.forEach((bar) =>{
            bar.style.width = bar.dataset.width;
        })
    }
}

// click on the galllery image 

let gallImage = document.querySelectorAll(".gallery-img img");
// console.log(gallImage)
gallImage.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overLay = document.createElement("div");
        let gallDiv = document.createElement("div");
        let Gallimg = document.createElement("img");
        let closeSpan = document.createElement("span");
        let closeSpanText = document.createTextNode("X");
    
        Gallimg.src = img.src;
        gallDiv.className = "img-div";
        closeSpan.className ="span-close";
        overLay.className = "over-lay";

        if (Gallimg.alt != null) {
            let gallHeader = document.createElement("h3");
            let haderText = document.createTextNode(img.alt);
            gallHeader.appendChild(haderText);
            gallDiv.appendChild(gallHeader);
        }

        closeSpan.appendChild(closeSpanText);
        gallDiv.appendChild(closeSpan);
        gallDiv.appendChild(Gallimg);
        document.body.appendChild(overLay);
        document.body.appendChild(gallDiv);
    })
});

document.addEventListener("click", function(e) {
if (e.target.className === "span-close") {
    e.target.parentNode.remove();
    document.querySelector(".over-lay").remove();
}         
})

//change page color 
let newColor = document.querySelectorAll(".color-list li");
// console.log(newColor);

newColor.forEach( (color) => {
    color.addEventListener("click", (e) => {
        newColor.forEach((color) => {
            color.classList.remove("active");
        })
        e.target.classList.add("active");
    })
} )

let fontColor = document.querySelectorAll(".chan-color");
let backColor = document.querySelectorAll(".back-color");
// let str = window.getComputedStyle(document.querySelector('.container'), ':before');
// console.log(str.backgroundColor)

document.addEventListener("click", (e) => {
    let colorBorder = document.querySelectorAll(".border-color");
    if (e.target.className === "active") {
        fontColor.forEach((ele) => {
            ele.style.color = e.target.dataset.color;
            
        })
        backColor.forEach((ele) => {
            ele.style.backgroundColor  = e.target.dataset.color;
        })
        if( colorBorder !== null) {
            colorBorder.forEach((ele) => {
                ele.style.borderColor  = e.target.dataset.color;
            })
        }
        // str.backgroundColor = e.target.dataset.color
    }
})

//get the gear and show the sidebar

let showBar = document.querySelector(".side-bar")
let gearBox = document.querySelector(".ico");
let gear = document.querySelector(".ico i");
let gearMove = true;

gearBox.onclick = function() {
    if (gearMove === true) {
        gear.classList.add("rotate");
        showBar.classList.add("show");
        gearMove = false;
    }else if (gearMove === false) {
        gear.classList.remove("rotate");
        showBar.classList.remove("show");
        gearMove = true;
    }
};

//create the bullets
let createBullet = document.querySelector(".bullets-yes");
let removeBullets = document.querySelector(".bullets-no");
let sections = document.querySelectorAll(".section");
let sectionsArray = Array.from(sections);
let bulletClick = document.querySelectorAll(".bullet")
let colorChangeYes = true;

createBullet.addEventListener("click", (e) => {
    let bulltesDiv = document.createElement("div");
    bulltesDiv.classList.add("bulletsDiv")
    if (colorChangeYes === true) {
        for(i = 0; i < sections.length; i++) {
            let bulletlink = document.createElement("a");
            bulletlink.href = `#${sections[i].id}`;
            let bulletSpan = document.createElement("span");
            bulletlink.classList.add('bulletSpan');
            bulletlink.classList.add("border-color");
            bulletlink.appendChild(bulletSpan)
            bulltesDiv.appendChild(bulletlink);
        }
        bulletClick.forEach((clk) => {
            clk.classList.remove("on");
        })
        e.target.classList.add("on")
        colorChangeYes = false;
    }
    document.body.appendChild(bulltesDiv);
    window.localStorage.setItem("bullet", "true");
})
removeBullets.addEventListener("click", (e) => {
    let div = document.querySelector(".bulletsDiv");
    if ( colorChangeYes === false) {
        div.remove();
        colorChangeYes = true;
        bulletClick.forEach((clk) => {
            clk.classList.remove("on");
        })
        e.target.classList.add("on")
        window.localStorage.removeItem("bullet")
    }
})

// reset button 

let resetBtn = document.querySelector(".reset-button");
console.log(resetBtn);
let restFalse = true;
let mainColor = false;

resetBtn.onclick = (e) => {
    if (restFalse === true) {
        if (randomBackground === false) {
            randomBackground = true;
            window.localStorage.removeItem("backpic")
            randomPic();
            console.log("reset");
        }
        if (colorChangeYes === false) {
            let div = document.querySelector(".bulletsDiv");
            let no = document.querySelector(".No-button");
            window.localStorage.removeItem("bullet")
            div.remove();
            colorChangeYes = true;
            bulletClick.forEach((clk) => {
            clk.classList.remove("on");
            })
            no.classList.add("on")
        }
        if (mainColor === false) {
            newColor.forEach( (color) => {
                color.classList.remove("active");
                })
            }
            newColor[0].classList.add("active");
            fontColor.forEach((ele) => {
                ele.style.color = newColor[0].dataset.color;
                
            })
            backColor.forEach((ele) => {
                ele.style.backgroundColor  = newColor[0].dataset.color;
            })
        }
}

