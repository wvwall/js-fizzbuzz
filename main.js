// Stampare numeri da 1 a 100 ;
// Multipli3 = Fizz ;
// Multilipli5 = Buzz ;
// Multipli3 5 = FizzBuzz ;


for (var i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz-Buzz");
        document.getElementById("lista").innerHTML += "<li>" + "Fizz-Buzz" + "</li>";
    } else if (i % 3 == 0) {
        document.getElementById("lista").innerHTML += "<li>" + "Fizz" + "</li>";
        console.log("Fizz");
    } else if (i % 5 == 0){
        document.getElementById("lista").innerHTML += "<li>" + "Buzz" + "</li>";
        console.log("Buzz");
    } else {
        document.getElementById("lista").innerHTML += "<li>" + i + "</li>";
        console.log(i);
    }
    
}

