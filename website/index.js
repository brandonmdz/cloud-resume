const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://otmhqthlim5hi3mbfqqwbtx7eu0vbnuu.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();