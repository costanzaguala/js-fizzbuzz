/*

1) Per i numeri da 1 a 100
- Verifico se sono multipli di 3 e/o 5:
    - Se il numero e' multiplo di 3 stampo Fizz
    - Se il numero e' multiplo di 5 stampo Buzz
    - Se il numero e' multiplo di 3 e 5 stampo FizzBuzz
    - Altrimenti stampo il numero
*/ 

const containerFizzbuzz = document.querySelector ('.container-fizzbuzz')


for ( let i = 1; i <=100; i++ ) {

    const square = document.createElement('div')

    let stampa = i;

    if ((i % 3 == 0) && (i % 5 == 0)) {
        stampa = 'FizzBuzz ';
        square.classList.add('fizzbuzz')
    }

    else if (i % 3 == 0) {
        stampa = ('Fizz');
        square.classList.add('fizz')
    }

    else if (i % 5 == 0) {
        stampa = ('Buzz');
        square.classList.add('buzz')
    } 

    console.log(stampa);

    square.innerHTML = stampa;

    containerFizzbuzz.append(square); 
}


