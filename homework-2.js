var a = prompt('Введите первое число', '');
var b = prompt('Введите второе число', '');
var c = prompt('Введите третье число', '');

if (a > b && c > b)
{alert(b)}

else if (b > a && c > a) {
    alert(a) 
}

else {
    alert(c)
}
