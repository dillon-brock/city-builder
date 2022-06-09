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

function displayDesigner() {
    nameInput.value = city.name;
    environmentSelect.value = city.environment;
    architectureSelect.value = city.architecture;
    sloganInput.value = '';
}

const citySection = document.getElementById('city-section');
const nameDisplay = citySection.querySelector('h2');
const [environmentDisplay, architectureDisplay] = citySection.querySelectorAll('img');
const sloganDisplay = citySection.querySelector('p');

function displayCity() {
    nameDisplay.textContent = city.name;
    environmentDisplay.src = `./assets/${city.environment}.png`;
    architectureDisplay.src = `./assets/${city.architecture}.png`;
    sloganDisplay.textContent = city.slogans[0];
}

const [addSlogan, addCity] = designerSection.querySelectorAll('button');

addSlogan.addEventListener('click', () => {
    if (sloganInput.value !== '') {
        city.slogans.push(sloganInput.value);
    }
});



// page load actions
displayDesigner();
displayCity();

