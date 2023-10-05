const buttonStartEl = document.querySelector('button[data-start');
const buttonStopEl = document.querySelector('button[data-stop]');
let timerColor = null;
const LOCAL_KEY = 'background-color-state';
let colorData;

buttonStartEl.addEventListener('click', onStart);
buttonStopEl.addEventListener('click', onStop);

function onStart() {
  buttonStartEl.setAttribute('disabled', 'true');
  buttonStopEl.removeAttribute('disabled');
  timerColor = setInterval(() => {
    var colorRandom = getRandomHexColor();
   colorData = localStorage.setItem(LOCAL_KEY, colorRandom);
    document.body.style.cssText = `background-color: ${colorRandom}`;
  }, 1000);
  
}

function onStop() {
  clearInterval(timerColor);
  buttonStopEl.setAttribute('disabled', 'true');
  buttonStartEl.removeAttribute('disabled');
  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


refreshColor();

function refreshColor() {
        var savedData = localStorage.getItem(LOCAL_KEY);
        if (!savedData) return;
            document.body.style.cssText = `background-color: ${savedData}`;
};


// button clear 

const newButton = document.createElement('button');
newButton.textContent = 'Clear cache';
newButton.setAttribute('type', 'submit');
newButton.setAttribute('data-clear', '');
newButton.style.cssText = `width: 100px;
height: 20px;
margin-left: 5px;
color: #3a86ff;
font-size: 10px;
background-color: #8ecae6;
border: none;
border-radius: 10px;
box-shadow: 1px 1px #888888;`;

buttonStopEl.after(newButton);

const buttonClearEl = document.querySelector('button[data-clear]');

buttonClearEl.addEventListener('click', clickClear);

function clickClear() {
  localStorage.removeItem(LOCAL_KEY);
  location.reload();
};

