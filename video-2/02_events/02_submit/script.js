const main = document.querySelector("#main");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(inputs[0].value);
    console.log(inputs[1].value);

    let cardHtml = 
    `<div class="card">
        <div class="profilePic">
            <img src="${inputs[3].value}" alt="" srcset="">
        </div>

        <h3>${inputs[0].value}</h3>
        <p>${inputs[1].value}</p>
        <p>${inputs[2].value}</p>

    </div>`

    main.innerHTML = cardHtml;
    inputs.forEach((input) => {
        input.value = "";
    })
})