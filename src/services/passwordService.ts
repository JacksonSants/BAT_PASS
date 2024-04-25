function generatePass() {
    let password: string = ''
    let character: string = 'Aa@$#QWERTYUIOPLKjgfdsazxcvbnm'
    let passwordLength = 8

    for (let index = 0; index < passwordLength; index++) {
        password += character.charAt(
            Math.floor(Math.random() * character.length)
        )
    }


    return password;
}

export default generatePass;