function ctomenshe(number1, number2) {
    if (number1.length > number2.length) {
        console.log(' Первый больше')
    } else if (number1.length < number2.length) {
        console.log('Первый меньше')
    } else {
        console.log('Они равны')
    }
}
const number1= [ 2,4,5,6,7,22,333]
const number2 = [ 1,3,5,7,8,9,0,222,22]
 ctomenshe(number1, number2);