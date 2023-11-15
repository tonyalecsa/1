//cache the DOM
var buton = document.getElementById("button")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var img=document.getElementById("poza")
var asteptari=document.getElementById("asteptari")
var body=document.getElementById("body")
var an=document.getElementById("an")
const d= new Date()
var anc=d.getFullYear()
//Add eventlisteners
buton.addEventListener("click",altaViata)
an.addEventListener("mouseover", displayAge)
function altaViata(){
    nume.innerHTML = "Functie: Senior Java Dev"
    prenume.innerHTML="Pozitie: Director"
    img.src="C:\Users\Alecsa.Ni.Tony\Desktop\Informatica-gimnaziu-programareC-.jpg";
    asteptari.innerHTML="Experienta: 5 ani"
    body.style.backgroundColor="green"
    body.style.fontFamily="Impact,Charcoal,sans-serif"
    img.style.opacity="0.9"
    img.style.borderWidth="0.5"

}
function displayAge(){
an.innerHTML=anc-an.innerHTML
}