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

const geographySelect = document.getElementById("select-geography-2");
const countrySelect = document.getElementById("select-country-2");
const stateCitySelect = document.getElementById("state-city-2");
const projectCards = document.querySelectorAll(".project-card-link"); // Select all project cards

// Populate Geography options
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
    location_data.find((item) => item.country === selectedCountry)?.states || [];

  stateCitySelect.innerHTML =
    '<option value="">Select State & City...</option>'; // Clear existing options
  states.forEach((state) => {
    stateCitySelect.innerHTML += `<option value="${state}">${state}</option>`;
  });
}

function filterProjects() {
  const selectedGeography = geographySelect.value;
  const selectedCountry = countrySelect.value;
  const selectedStateCity = stateCitySelect.value;

  projectCards.forEach((card) => {
    const projectGeography = card.querySelector(".filter-geography").textContent.trim();
    const projectCountry = card.querySelector(".filter-country").textContent.trim();
    const projectStateCity = card.querySelector(".filter-state-city").textContent.trim();

    let isVisible = true;

    if (selectedGeography && projectGeography !== selectedGeography) {
      isVisible = false;
    }

    if (selectedCountry && projectCountry !== selectedCountry) {
      isVisible = false;
    }

    if (selectedStateCity && projectStateCity !== selectedStateCity) {
      isVisible = false;
    }

    card.style.display = isVisible ? "block" : "none";
  });

  // Show "No Result Found" if all projects are hidden
  const visibleProjects = [...projectCards].some((card) => card.style.display === "block");
  document.querySelector(".filter-no-result").style.display = visibleProjects ? "none" : "block";
}

// Event Listeners
geographySelect.addEventListener("change", () => {
  populateCountry();
  stateCitySelect.innerHTML =
    '<option value="">Select State & City...</option>'; // Clear state & city on geography change
  filterProjects(); // Filter projects when geography changes
});

countrySelect.addEventListener("change", () => {
  populateStateCity();
  filterProjects(); // Filter projects when country changes
});

stateCitySelect.addEventListener("change", filterProjects); // Filter projects when state & city changes

// Initial population of geography options
populateGeography();
