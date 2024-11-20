// Input Fields
const geographySelect = document.getElementById("select-geography-2");
const countrySelect = document.getElementById("select-country-2");
const stateCitySelect = document.getElementById("state-city-2");

geographySelect.addEventListener('change', (e)=>{
  updateCountryList(e.target.value);
});
countrySelect.addEventListener('change', (e)=>{
  updateStateList(e.target.value);
});

function updateGeography(){
  // Card Details
  const geographyList = document.querySelectorAll(".filter-geography");
  const geography = [];
  geographyList.forEach(item => {
    if(!geography.includes(item.innerText)){
      geography.push(item.innerText);
    }
  });

  var optionsList = '';
  geography.forEach(item =>{
    optionsList += `<option value="${item}">${item}</option>`;
  });
  geographySelect.innerHTML = optionsList;
}

function updateCountryList(){
  const geography = document.getElementById("select-geography-2").innerText;
  const projectCard = document.querySelectorAll(".project-card .project-card-title");
  const countryList = [];
  projectCard.forEach(item => {
    console.log(item);
    const currentGeography = item.querySelector('.filter-geography').innerText();
    const currentCountry = item.querySelector('.filter-country').innerText();
    if(currentGeography === geography && !countryList.includes(currentCountry)){
      stateList.push(currentCountry);
    }
  });
  var optionsList = '';
  countryList.forEach(item =>{
    optionsList += `<option value="${item}">${item}</option>`;
  });
  countrySelect.innerHTML = optionsList;
}

function updateStateList(){
  const country = document.getElementById("select-country-2").innerText;
  const projectCard = document.querySelectorAll(".project-card .project-card-title");
  const stateList = [];
  projectCard.forEach(item => {
    console.log(item);
    const currentGeography = item.querySelector('.filter-geography').innerText();
    const currentCountry = item.querySelector('.filter-country').innerText();
    const currentState = item.querySelector('.filter-state-city').innerText();
    if(currentCountry === country && !stateList.includes(currentState)){
      stateList.push(currentState);
    }
  });
  var optionsList = '';
  stateList.forEach(item =>{
    optionsList += `<option value="${item}">${item}</option>`;
  });
  stateCitySelect.innerHTML = optionsList;
}

updateGeography();
