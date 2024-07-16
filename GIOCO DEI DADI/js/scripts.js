console.log('ciao console')


const numberPerson = Math.floor(Math.random() * 6) + 1;
const numberRandomPerson = document.querySelector('.person');
numberRandomPerson.innerHTML = numberPerson
console.log('numberPerson', numberPerson, typeof numberPerson);

const numberComputer = Math.floor(Math.random() * 6) + 1;
const numberRandomComputer = document.querySelector('.computer');
numberRandomComputer.innerHTML = numberComputer
console.log('numberComputer', numberComputer, typeof numberComputer);

if (numberPerson > numberComputer ) {
    document.getElementById('resultMatch').innerHTML = 'Il vincitore è la persona'
    console.log('il vincitore è la persona');
    
}else if (numberComputer > numberPerson) {
    document.getElementById('resultMatch').innerHTML = 'Il vincitore è il computer'
    console.log('il vincitore è il computer');
    
}
else {
    document.getElementById('resultMatch').innerHTML = 'E\' pari'
    console.log('Pari');
}