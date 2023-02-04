//pegar os dados da API
const fetchCountries = async () => {
    const url = path => `https://restcountries.com/v2/${path}`

    const countriesArray = []

    countriesArray.push(await fetch(url("all")).then(res => res.json()))

    const ul = document.getElementById("countryContainer__list")

//colocar os dados na lista

if (countriesArray.length === 0) {
    const loading = '<li>Carregando...</li>'
    ul.innerHTML = loading
} else {
    let contriesList = ''
    countriesArray[0].forEach(country => {
      const eachCountry = `<li class="countryCard ${country.region}">
        <div class="countryCard__inner">
          <div class="countryCard__front">
            <img class="countryCard__flags" src="${country.flags.svg}" alt="${country.name}"/>
          </div>        
          <div class="countryCard__back">
            <h3>${country.name}</h3>
            <p>Nome nativo: ${country.nativeName}</p>
            <p>Capital: ${country.capital}</p>
            <p>Região: ${country.region}</p>
            <p>Sub-região: ${country.subregion}</p>

          </div>        
        </div>
      </li>`;


      contriesList += eachCountry
      
    })
    ul.innerHTML = contriesList
  }
}

fetchCountries()
//estilizar os cartões da lista
//animar os cartões