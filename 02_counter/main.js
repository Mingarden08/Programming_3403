let button = document.getElementById("button");
let number = document.getElementById("number");

// button.addEventListener('click', () => {
//     let tmp = parseInt(number.textContent);
//     number.textContent = tmp + 1;
// }); 

button.onclick = () => {
    let tmp = parseInt(number.textContent);
    number.textContent = tmp + 1;
};