
document.getElementById('addOption').onclick = function () {
    const newOption = document.createElement('input');
    newOption.type = 'text';
    newOption.className = 'options';
    newOption.placeholder = 'New Option';
    newOption.required = true;
    document.getElementById('createPoll').appendChild(newOption);
};

document.getElementById('create').onclick = function () {
    const question = document.getElementById('question').value;
    document.getElementById('pollQuestion').innerText = question;

    const options = document.getElementsByClassName('options');
    const form = document.getElementById('optionsForm');
    for (let option of options) {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'pollOptions';
        radioBtn.value = option.value;
        radioBtn.required = true;

        const label = document.createElement('label');
        label.appendChild(radioBtn);
        label.appendChild(document.createTextNode(option.value));

        form.appendChild(label);
        form.appendChild(document.createElement('br'));
    }

    document.getElementById('createPoll').hidden = true;
    document.getElementById('votePoll').hidden = false;
};

document.getElementById('vote').onclick = function () {
    const selectedOption = document.querySelector('input[name="pollOptions"]:checked').value;

    // Simulate storing the vote and getting results
    const results = document.getElementById('resultContainer');
    results.innerHTML = `<p>${selectedOption} has been selected by the user.</p>`;

    document.getElementById('votePoll').hidden = true;
    document.getElementById('results').hidden = false;
};
