
function rolligDices (x){
    let x = prompt("Please, write down quantity of rollings") 
    let i = Math.round(Math.random() * 5 + 1);
    console.log((x*i));
}
rolligDices();

// Эта функция работает в связке с браузером,
// по-этому, для роботы в консоли,
// замените prompt на любое числовое значения.
