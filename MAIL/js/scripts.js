console.log('ciao console');

// const email = prompt("Qual'è la vostra email?")
// console.log('Email', email , typeof email);


// const enterEmail = [
//     "serenovariabile@gmail.com",
//     "ernestotrottola@gmail.com",
//     "carlossantos@gmail.com",
//     "pierolino@gmail.com",
//     "paololoto@gmail.com"
// ]

// for (let i = 0; i < enterEmail.length; i++ ){
//     // console.log('enterEmail[i]' , enterEmail[i] , typeof enterEmail[i])
   
//     if (email == enterEmail[i]) {
//         console.log(enterEmail[i])
//         alert('Sei uno dei nostri' + " " + email)
//     }
//     else {
//         console.log('email non presente' )
//         alert('Non ti è permesso entrare')
//     }
// }



const infoForm = document.querySelector('form');
infoForm.addEventListener('submit' ,
    function (event) {
        event.preventDefault();

        const enterEmail = [
            "serenovariabile@gmail.com",
            "ernestotrottola@gmail.com",
            "carlossantos@gmail.com",
            "pierolino@gmail.com",
            "paololoto@gmail.com"
        ]

        const emailInput = document.getElementById('emailInput');
        console.log('emailInput.value', emailInput.value);
        
        let found = false
        
        for (let i = 0; i < enterEmail.length; i++ ){
            // console.log('enterEmail[i]' , enterEmail[i] , typeof enterEmail[i])
        
            if (emailInput.value == enterEmail[i]) {
                console.log(enterEmail[i])
                // document.getElementById('resultEmail').innerHTML = 'E\' corretta' ;
                // return i ;
                found = true

                // alert('Sei uno dei nostri' + " " + emailInput.value)
            }
            // else {
            //     console.log('email non presente' )
            //     document.getElementById('resultEmail').innerHTML = 'E\' sbagliata' ;
            //     // alert('Non ti è permesso entrare')
            // }
        }

        if (found) {
            document.getElementById('resultEmail').innerHTML = 'E\' corretta' ;
            
        }
        else {
            document.getElementById('resultEmail').innerHTML = 'E\' sbagliata' ;

        }
    }

)