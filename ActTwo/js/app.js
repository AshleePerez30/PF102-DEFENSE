import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My portfolio",
    disc : "Hi! My name is Ashlee Jaucian J. Perez, 19 years old, from purok 6, Brgy.25, Gingoog City. I am currently a 2nd year BSIT Student from GCCi.",
    btn : "About me",
    myimg : "pfp.png"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "img1.PNG",
    dis1 : "This is our final project output for the subject Robotics/IICT. We put efforts and time in making this final project and we made it sucessfully",
    btn1 : "Learn More",

    img2 : "img2.PNG",
    dis2 : "This is our midterm project output for the subject Robotics/IICT, mini-model of GCCi campus, using Arduino Uno and series leds",
    btn2 : "Learn More",

    img3 : "img3.PNG",
    dis3 : "Our final performance project for the subject Philippine History, it was all about First Voyage around the World, and it was hard but fun",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,disc,btn,myimg} = myObj1;

const {comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3} = myObj2;

sectionOne.append(info(title,disc,btn))
sectionOne.append(image(myimg))  

sectionTwo.append(cards(comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3))



