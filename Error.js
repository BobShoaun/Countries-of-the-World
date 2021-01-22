function getCountriesOLD() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {

      if (response.ok)
        console.log("this is successfull")
      else {
        console.log("this is not okay");
        throw new Error("ERRRIR");
      }
      
    }).catch(err => console.log(err.message));

    // .then(data => {
    //   console.log(data);
    //   let output = "";
    //   for (let i = 0; i < data.length; i++) {
    //     output +=
    //       `
    // <div class="card">
    //   <img class="flag" src="${data[i].flag}" alt="country flag" />
    //   <h2 class="mb"> ${data[i].name} </h2>
    //   <p class="mb"> capital: ${data[i].capital} </p>
    //   <p class="mb"> region: ${data[i].region} </p>
    //   <p class="mb"> languages: ${data[i].languages.map(lang => lang.name).join(',')} </p>
    // </div>
    // `
    //   }
    //   document.getElementById('results').innerHTML = output;
    // });
}