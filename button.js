function number_inc()
{
    console.log("Button '+' click")
    number = document.getElementById('result');
    number = parseInt(result.innerText, 10) + 1;
    console.log("숫자 : " + number);
    result.innerText = number;
}
function number_dec()
{
    console.log("Button '-' click")
    number = document.getElementById('result');
    number = parseInt(result.innerText, 10) - 1;
    console.log("숫자 : " + number);
    result.innerText = number;
}