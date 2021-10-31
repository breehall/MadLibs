

const madLibsForm = document.getElementById('madlibs-form');
const loader = document.getElementById('loading-icon');
const storySection = document.getElementById('completed-story');

var userSubmission = {};

const submitMadLibs = (event) => {
    //required to prevent the form from reloading on submit
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    userSubmission = Object.fromEntries(form);
    console.log(userSubmission.number);

    let story = `
        <h3>Your completed story:</h3>
        <p>Winter is one of <span class="inserted-text">${userSubmission.number}</span> seasons of the year. 
        The other seasons are <span class="inserted-text">${userSubmission.adjective_1}</span>, <span class="inserted-text">${userSubmission.noun_1}</span>, and
        <span class="inserted-text"> ${userSubmission.noun_2}</span>.
        Winter is the time of year with the <span class="inserted-text">${userSubmission.noun_3}</span> 
        is the furthest from the Earth. The weather tends to be <span class="inserted-text">${userSubmission.adjective_2}</span> in the winter, with
        <span class="inserted-text">${userSubmission.noun_4} </span>
        fall and cold temperatures. Some winter sports include <span class="inserted-text">${userSubmission.sport_1}</span>, 
        <span class="inserted-text">${userSubmission.sport_2}</span>, and <span class="inserted-text">${userSubmission.sport_3}</span>.
        Hot <span class="inserted-text">${userSubmission.beverage}</span>
         with <span class="inserted-text">${userSubmission.food}</span> on top is a popular winter drink.</p>
    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `
        <button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>
    `;
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}
