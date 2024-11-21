// Input Fields
const geographySelect = document.getElementById("select-geography-2");
const countrySelect = document.getElementById("select-country-2");
const stateCitySelect = document.getElementById("state-city-2");
const productCard = document.querySelectorAll('.product-card-item');

geographySelect.addEventListener('change', ()=>{
  updateCountryList();
  updateStateList();
  updateCardList();
});
countrySelect.addEventListener('change', ()=>{
  updateStateList();
  updateCardList();
});
stateCitySelect.addEventListener('change', ()=>{
  updateCardList();
});

function updateGeography(){
  const geography = document.getElementById("select-geography-2").value;
  const geography = [];
  productCard.forEach(item => {
    const currentGeography = item.getAttribute('data-geography');
    if(!geography.includes(currentGeography)){
      geography.push(currentGeography);
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
  const countryList = [];
  productCard.forEach(item => {
    const currentGeography = item.getAttribute('data-geography');
    const currentCountry = item.getAttribute('data-country');
    if(currentGeography === geography && !countryList.includes(currentCountry)){
      countryList.push(currentCountry);
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
  const stateList = [];
  productCard.forEach(item => {
    const currentCountry = item.getAttribute('data-country');
    const currentState = item.getAttribute('data-state');
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

function updateCardList(){
  const geography = document.getElementById("select-geography-2").value;
  const country = document.getElementById("select-country-2").value;
  const state = document.getElementById("state-city-2").value;
  productCard.forEach(item => {
    const currentGeography = item.getAttribute('data-geography');
    const currentCountry = item.getAttribute('data-country');
    const currentState = item.getAttribute('data-state');
    item.style.display = "none";
    if(geography === currentGeography && country === currentCountry && state === currentState){
      item.style.display = "block";
    }else if(geography === currentGeography && country === currentCountry && state === ""){
      item.style.display = "block";
    }else if(geography === currentGeography && country === "" && state === ""){
      item.style.display = "block";
    }else if(geography === "" && country === "" && state === ""){
      item.style.display = "block";
    }
  });
}

updateGeography();
