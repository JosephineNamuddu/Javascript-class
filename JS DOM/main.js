const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const introParagraph = document.querySelector(".intro-paragraph");
console.log(introParagraph);

const allParagraphs = document.querySelectorAll(".intro-Paragraph");
console.log(allParagraphs);

//Selecting the second paragraph Option
const secondParagraph = allParagraphs[1];
console.log(secondParagraph);

const secondParagraphByNthChild = document.querySelector("p:nth-child(2)");
console.log(secondParagraphByNthChild);

//Using getElementByID
const mainHeadingByID = document.getElementById("main-heading");
console.log(mainHeadingByID)

const introParagraphByClassName = document.getElementsByClassName("intro-paragraph");
console.log(introParagraphByClassName);

//Manupulating the DOM
mainHeading.textContent = "Hello, JavaScript in the DOM";
mainHeading.style.color = "Purple";
mainHeading.style.fontSize = "54px";

mainHeading.style.fontFamily = "Arial"
//Event handling
//examples of events 
//1. click event, 2. Mouseover event, 3. keydown event, 4. Input event, 5.Submit event

const changeButton = document.querySelactor("#change-paragraph");
changeButton.addEventListener("click",function(){
    secondParagraph.textContent = "paragraph has been changed!";
    secondParagraph.style.color = "Green";
    secondParagraph.style.fontsive = "27px";
    secondParagraph.style.fontfamily = "cursive"
})