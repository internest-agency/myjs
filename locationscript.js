const location_data = [
  {
    geography: "Asia Pacific",
    country: "India",
    states: ["Tamil Nadu, Chennai", "Bengaluru"],
  },
  {
    geography: "Asia Pacific",
    country: "China",
    states: ["Shanghai", "Fujian", "Beijing, Daxing"],
  },
  {
    geography: "MEA (Middle East and Africa)",
    country: "Ethiopia",
    states: ["Oromia, Addis Ababa"],
  },
  {
    geography: "MEA (Middle East and Africa)",
    country: "Qatar",
    states: ["Al Daayen, Lusail", "Doha"],
  },
  {
    geography: "Asia Pacific",
    country: "Singapore",
    states: ["Singapore"],
  },
  {
    geography: "MEA (Middle East and Africa)",
    country: "United Arab Emirates",
    states: ["Dubai"],
  },
  {
    geography: "Asia Pacific",
    country: "Vietnam",
    states: ["Ho Chi Minh City"],
  },
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
  const states =
    location_data.find((item) => item.country === selectedCountry)?.states ||
    [];

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

// Initial population of geography options
populateGeography();

// Get the project list element
const projectList = document.querySelector('.filter-project-list');

// Function to update the project list based on selected state & city
function updateProjectList() {
  const selectedStateCity = stateCitySelect.value;

  // Filter the location data based on the selected state & city
  const filteredData = location_data.filter(item => 
    item.states.includes(selectedStateCity)
  );

  // Clear the existing project list
  projectList.innerHTML = '';

  // Iterate over the filtered data and add projects to the list
  filteredData.forEach(item => {
    const projects = document.querySelectorAll('.w-dyn-item');
    projects.forEach(project => {
      const stateCity = project.querySelector('.filter-state-city').textContent.trim();
      if (stateCity === selectedStateCity) {
        // Append the project to the list
        projectList.appendChild(project.cloneNode(true));
      }
    });
  });
}

// Add event listener to update project list when state & city changes
stateCitySelect.addEventListener('change', updateProjectList);

// Initial population of the project list
updateProjectList();
