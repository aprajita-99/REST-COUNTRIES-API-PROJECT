if(window.localStorage.getItem('x') === null ) window.localStorage.setItem('x',0);
const body = document.querySelector("body");
const darkmodebutton = document.querySelector(".darkmode-text");

if(window.localStorage.getItem('x') == 0){
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
function rendercards(data){
    data.forEach((country)=>{
        const cardanchor = document.createElement('a');
    const carddiv = document.createElement('div');
    const cardflag = document.createElement('div');
    const information = document.createElement('div');
    const main_cardss = document.querySelector('.main_cards');
    carddiv.classList.add("card");
    cardflag.classList.add("flag");
    information.classList.add("information");
    cardanchor.append(carddiv);
    carddiv.append(cardflag);
    carddiv.append(information);
    main_cardss.append(cardanchor);
    const name = document.createElement('p');
    name.classList.add("name");
    const population = document.createElement('p');
    population.classList.add("population");
    const region = document.createElement('p');
    region.classList.add("region");
    const capital = document.createElement('p');
    capital.classList.add("capital");
    information.append(name,population,region,capital);
    cardflag.style.backgroundImage=`url(${country.flags.svg})`;
    name.innerHTML=`${country.name.common}`;
    population.innerHTML=`<b>Population: </b>${country.population.toLocaleString('en-IN')}`;
    region.innerHTML=`<b>Region:</b> ${country.region}`;
    capital.innerHTML=`<b>Capital:</b> ${country.capital}`;
    cardanchor.href=`index2.html?Name=${country.name.common}`;
    
    }
    )
}
let countriesdata;
fetch('https://restcountries.com/v3.1/all').then((res)=>res.json())
.then((data)=>{rendercards(data);
 countriesdata = data;
}
)
const main_cardss = document.querySelector('.main_cards');
const filterbyregion = document.querySelector(".filter");
filterbyregion.addEventListener('change',(e)=>{
    main_cardss.innerHTML='';
    fetch(`https://restcountries.com/v3.1/${e.target.value}`).then((res)=>res.json())
.then((data) => {rendercards(data);})})

const searchinput = document.querySelector('.search-box input');
searchinput.addEventListener('input',(e)=>{
    let filtered = countriesdata.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    )
    main_cardss.innerHTML='';
    rendercards(filtered);
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





