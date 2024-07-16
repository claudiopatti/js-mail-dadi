console.log('ciao console')

const email = prompt("Qual'è la vostra email?")
console.log('Email', email , typeof email)

const enterEmail = [
    "serenovariabile@gmail.com",
    "ernestotrottola@gmail.com",
    "carlossantos@gmail.com",
    "pierolino@gmail.com",
    "paololoto@gmail.com"
]

for (let i = 0; i < enterEmail.length; i++ ){
    // console.log('enterEmail[i]' , enterEmail[i] , typeof enterEmail[i])
   
    if (email == enterEmail[i]) {
        console.log(enterEmail[i])
        alert('Sei uno dei nostri' + " " + email)
    }
    else {
        console.log('email non presente' )
        alert('Non ti è permesso entrare')
    }
}
