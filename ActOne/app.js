import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"


let container = document.getElementById("container")
const data = {
    title: "Aoyama Yuga",
    title2: "I Can Not Stop Twinkling.",
    para: "Yuga Aoyama, also known as the Shining Hero: Can't Stop Twinkling, is a recurring character in My Hero Academia. He is a student in Class 1-A at U.A. High School, training to become a Pro Hero. Later on, it was revealed that he was the U.A.",
    para2: "Quirk: Navel Laser; Likes: Himself",
    button: "ABOUT",
    button2: "PERSONALITY",
    button3: "ABILITY",
    button4: "EQUIPMENT",
    img: "img/cant.jpg"
}

const {title, title2, para, para2, button, button2, button3, button4, img} = data

container.append(leftDiv(title,title2,para,para2,button,button2,button3,button4))
container.append(rightDiv(img))