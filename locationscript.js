// Input Fields
const geographySelect = document.getElementById("select-geography-2");
const countrySelect = document.getElementById("select-country-2");
const stateCitySelect = document.getElementById("state-city-2");

geographySelect.addEventListener('change', ()=>{
  updateCountryList();
});
countrySelect.addEventListener('change', ()=>{
  updateStateList();
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

  var optionsList = '<option>Select Geography</option>';
  geography.forEach(item =>{
    optionsList += `<option value="${item}">${item}</option>`;
  });
  geographySelect.innerHTML = optionsList;
}

function updateCountryList(){
  const geography = document.getElementById("select-geography-2").value;
  console.log(geography);
  const projectCard = document.querySelectorAll(".project-card .project-card-title");
  const countryList = [];
  projectCard.forEach(item => {
    if(item.innerHTML == ""){
      return;
    }
    const currentGeography = item.querySelector('.filter-geography').innerText;
    const currentCountry = item.querySelector('.filter-country').innerText;
    console.log(currentGeography);
    console.log(currentCourntry);
    if(currentGeography === geography && !countryList.includes(currentCountry)){
      stateList.push(currentCountry);
    }
  });
  var optionsList = '<option>Select Country</option>';
  countryList.forEach(item =>{
    optionsList += `<option value="${item}">${item}</option>`;
  });
  countrySelect.innerHTML = optionsList;
}

function updateStateList(){
  const country = document.getElementById("select-country-2").value;
  console.log(country);
  const projectCard = document.querySelectorAll(".project-card .project-card-title");
  const stateList = [];
  projectCard.forEach(item => {
    if(item.innerHTML == ""){
      return;
    }
    const currentGeography = item.querySelector('.filter-geography').innerText;
    const currentCountry = item.querySelector('.filter-country').innerText;
    const currentState = item.querySelector('.filter-state-city').innerText;
    console.log(currentGeography);
    console.log(currentCourntry);
    console.log(currentState);
    if(currentCountry === country && !stateList.includes(currentState)){
      stateList.push(currentState);
    }
  });
  var optionsList = '<option>Select State/City</option>';
  stateList.forEach(item =>{
    optionsList += `<option value="${item}">${item}</option>`;
  });
  stateCitySelect.innerHTML = optionsList;
}

updateGeography();
