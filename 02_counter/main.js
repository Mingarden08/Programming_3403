let button = document.getElementById("button");
let number = document.getElementById("number");
// const resultH1 = document.getElementById("result");

// button.addEventListener('click', () => {
//     let tmp = parseInt(number.textContent);
//     number.textContent = tmp + 1;
// }); 

button.onclick = () => {
    let tmp = parseInt(number.textContent);
    number.textContent = tmp + 1;
};