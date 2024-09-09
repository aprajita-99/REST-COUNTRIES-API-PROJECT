const countryname = new URL(window.location.href).searchParams.get("Name");
const flag = document.querySelector(".flag");
const namee = document.querySelector(".country_name");
const native_name = document.querySelector(".Native-name");
const population = document.querySelector(".Population");
const region= document.querySelector(".Region");
const subregion= document.querySelector(".Sub-Region");
const capital= document.querySelector(".Capital");
const top_Level_domain= document.querySelector(".top-level-domain");
const currencies= document.querySelector(".Currencies");
const Languages= document.querySelector(".Languages");
const bordercountries = document.querySelector('.borders');
const backbutton = document.querySelector('.backbutton');
const body = document.querySelector("body");
const darkmodebutton = document.querySelector(".darkmode-text");

backbutton.addEventListener('click',(e)=>{
    history.back();
})

if(window.localStorage.getItem('x') == 0) {
    body.classList.add('darkmode');
    darkmodebutton.children[1].innerHTML='&nbsp;&nbsp;Light mode';
    darkmodebutton.children[0].classList.add("fa-sun");
    darkmodebutton.children[0].classList.remove("fa-moon");
}
else {
    body.classList.remove('darkmode');
    darkmodebutton.children[1].innerHTML='&nbsp;&nbsp;Dark mode';
    darkmodebutton.children[0].classList.add("fa-moon");
    darkmodebutton.children[0].classList.remove("fa-sun");
}

fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`).then((res)=>res.json())
.then((data)=> {
    console.dir(data);
    flag.style.backgroundImage=`url(${data[0].flags.svg})`;
    namee.innerHTML = countryname;

    if(data[0].name.nativeName){
    const namekey = (Object.keys(data[0].name.nativeName))[0];
    native_name.innerHTML =`<b> Native name: </b>${data[0].name.nativeName[namekey].common}`;}
    else { native_name.innerHTML =`<b> Native name: </b>NONE`; }
   
    population.innerHTML =`<b>Population: </b>${data[0].population}`;
    region.innerHTML =`<b> Region: </b>${data[0].region}`;
    if(data[0].subregion){
    subregion.innerHTML =`<b> Sub Region: </b>${data[0].subregion}`;}
    else {
        subregion.innerHTML =`<b> Sub Region: </b>NONE`; 
    }

    if(data[0].capital){
    capital.innerHTML =`<b> Capital: </b>${data[0].capital.join(",")}`;}
    else{ capital.innerHTML =`<b> Capital: </b>NONE`; }

    top_Level_domain.innerHTML =`<b> Top Level Domain: </b>${data[0].tld[0]}`;

     if(data[0].currencies){
     currencies.innerHTML =`<b>Currencies: </b>${data[0].currencies[Object.keys(data[0].currencies)[0]].name}`;}
     else{
        currencies.innerHTML =`<b>Currencies: </b>NONE`;}

    if(data[0].languages){
    Languages.innerHTML =`<b> Languages: </b>${Object.values(data[0].languages).join(",")}`;}
    else {
        Languages.innerHTML =`<b> Languages: </b>NONE`;}

   if(data[0].borders){ 

        data[0].borders.forEach((border)=>{
        const Border = document.createElement('a');
        const Borderdiv = document.createElement('div');
        Border.append(Borderdiv);
        bordercountries.append(Border);
        fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json()).then((dataa)=>
        {
            Borderdiv.innerHTML=`${dataa[0].name.common}`;
            Border.href = `index2.html?Name=${dataa[0].name.common}`;
            Border.style.textDecorationLine = "None";
            Border.style.color = "Black";
        })
        
    })}
    else{
        const Border = document.createElement('a');
        const Borderdiv = document.createElement('div');
        Border.append(Borderdiv);
        bordercountries.append(Border);
       Borderdiv.innerHTML="NO BORDER COUNTRY";
    }
})


let xx = window.localStorage.getItem('x');
darkmodebutton.addEventListener('click',(e)=>{
    body.classList.toggle('darkmode');
    darkmodebutton.children[0].classList.toggle("fa-sun");
    darkmodebutton.children[0].classList.toggle("fa-moon");
   if(xx == 1) darkmodebutton.children[1].innerHTML='&nbsp;&nbsp;Light mode';
    else darkmodebutton.children[1].innerHTML='&nbsp;&nbsp;Dark mode';
     xx = xx^1;
    window.localStorage.setItem('x',`${xx}`);
    
})