const location_data = [
  {
    geography: "Asia Pacific",
    country: "India",
    states: ["Tamil Nadu, Chennai", "Bengaluru"],
  },
  // ... other data
];

// Populate Geography options
const geographySelect = document.getElementById("select-geography-2");
const countrySelect = document.getElementById("select-country-2");
const stateCitySelect = document.getElementById("state-city-2");

function populateGeography() {
  const geographies = [...new Set(location_data.map((item) => item.geography))];
  geographySelect.innerHTML = '<option value="">Select ...</option>'; // Clear existing options
  geographies.forEach((geo) => {
    geographySelect.innerHTML += `<option value="${geo}">${geo}</option>`;
  });
}

function populateCountry() {
  const selectedGeography = geographySelect.value;
  const countries = [
    ...new Set(
      location_data
        .filter((item) => item.geography === selectedGeography)
        .map((item) => item.country)
    ),
  ];

  countrySelect.innerHTML = '<option value="">Select Country...</option>'; // Clear existing options
  countries.forEach((country) => {
    countrySelect.innerHTML += `<option value="${country}">${country}</option>`;
  });
  populateStateCity(); // Populate state and city when country changes
}

function populateStateCity() {
  const selectedCountry = countrySelect.value;
  const states = location_data.find((item) => item.country === selectedCountry)?.states || [];

  stateCitySelect.innerHTML =
    '<option value="">Select State & City...</option>'; // Clear existing options
  states.forEach((state) => {
    stateCitySelect.innerHTML += `<option value="${state}">${state}</option>`;
  });
}

// Event Listeners
geographySelect.addEventListener("change", () => {
  populateCountry();
  stateCitySelect.innerHTML =
    '<option value="">Select State & City...</option>'; // Clear state & city on geography change
});

countrySelect.addEventListener("change", populateStateCity);

// Ensure functions are executed only after the page is fully loaded
window.addEventListener('load', () => {
  // Initial population of geography options
  populateGeography();
});
