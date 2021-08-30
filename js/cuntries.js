const loadCuntries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCuntries();


const displayCountries = cuntries => {
//  for(const cuntry of cuntries){
     
//  }
const cuntriesDiv =document.getElementById('cuntries')

cuntries.forEach(country => {
    // console.log(country);
    const div = document.createElement('div');
    
    div.classList.add('cuntry')
    div.innerHTML = `
     <h3>${country.name}</h3>
     <p>Capital: ${country.capital}</p>
     <button onclick="loadCountryByName('${country.name}')">Details</button>

    `

    // const h3 = document.createElement('h3');
    // h3.innerText = country.name;
    // div.appendChild(h3)

    // const p = document.createElement('p')
    // p.innerText = country.capital;
    // div.appendChild(p)
    cuntriesDiv.appendChild(div)
});

}

const searchCountry = () => {
    const searchField = document.getElementById('country-flied')
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
   const full =`https://restcountries.eu/rest/v2/name/${searchText}?fullText=true`
    fetch(full)
    .then(res => res.json())
    .then( data =>displayCountriesDeatils(data[0]))
    }



const  loadCountryByName= name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDeatils(data[0]));
}


const displayCountriesDeatils = country => {
    const countryDiv =document.getElementById('country-deatils');
    countryDiv.innerHTML = `
    <h6>Country: ${country.name}</h6>
    <p>Population: ${country.population}</p>
    <p>Subregion: ${country.subregion}</p>
    <p>Area: ${country.area}</p>
    <p>Number Code: ${country.numericCode}</p>
    <img width="200px" src="${country.flag}">
    `
    
// console.log(country);
}
// arra