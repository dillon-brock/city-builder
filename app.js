// import needed modules

// state
let city = {
    name: 'Moon Landing',
    environment: 'polar',
    architecture: 'deco',
    slogans: []
};

const cities = [];

// components
    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

const designerSection = document.getElementById('designer-section');
const nameInput = designerSection.querySelector('input');
const [environmentSelect, architectureSelect] = designerSection.querySelectorAll('select');
const sloganInput = designerSection.querySelector('textarea');

const citySection = document.getElementById('city-section');
const nameDisplay = citySection.querySelector('h2');
const [environmentDisplay, architectureDisplay] = citySection.querySelectorAll('img');
const sloganDisplay = citySection.querySelector('p');

function displayDesigner() {
    nameInput.value = city.name;
    environmentSelect.value = city.environment;
    architectureSelect.value = city.architecture;
    sloganInput.value = '';
}

nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

environmentSelect.addEventListener('change', () => {
    city.environment = environmentSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    
    displayCity();
});

const [addSloganButton, addCityButton] = designerSection.querySelectorAll('button');

addSloganButton.addEventListener('click', () => {
    if (sloganInput.value !== '') {
        city.slogans.push(sloganInput.value);
    }
    displaySlogans();
    sloganInput.value = '';
});

const sloganSection = document.getElementById('slogan-section');
const sloganList = sloganSection.querySelector('ul');

function displaySlogans() {

    sloganList.innerHTML = '';

    let mainSlogan = city.slogans[0];

    sloganDisplay.textContent = mainSlogan;
    city.slogans.shift();

    for (const slogan of city.slogans) {
        let li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }

    city.slogans.unshift(mainSlogan);
}

function displayCity() {
    
    nameDisplay.classList.value = '';
    sloganDisplay.classList.value = '';
    sloganSection.classList.value = '';
    citySection.classList.value = '';

    nameDisplay.textContent = city.name;
    environmentDisplay.src = `./assets/${city.environment}.png`;
    architectureDisplay.src = `./assets/${city.architecture}.png`;
    sloganDisplay.textContent = city.slogans[0];
    nameDisplay.classList.add(architectureSelect.value);
    sloganDisplay.classList.add(architectureSelect.value);
    citySection.classList.add(environmentSelect.value);
    sloganSection.classList.add(architectureSelect.value);
}

addCityButton.addEventListener('click', () => {
    cities.push(city);
    displayCities();

    city = getDefaultCity();
    displayDesigner();
    displayCity();
});

const citiesSection = document.getElementById('cities-section');
const cityTable = citiesSection.querySelector('tbody');

function displayCities() {
    cityTable.innerHTML = '';
    for (city of cities) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${city.name}</td>
        <td>${city.environment}</td>
        <td>${city.architecture}</td>
        <td>${city.slogans.length}</td>`;
        cityTable.append(tr);
    }
}

function getDefaultCity() {
    const defaultCity = {
        name: 'Moon Landing',
        environment: 'polar',
        architecture: 'deco',
        slogans: []
    };
    return defaultCity;
}

// page load actions
displayDesigner();
displayCity();

