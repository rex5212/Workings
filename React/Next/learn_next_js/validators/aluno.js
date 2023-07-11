const alunosValidator = {
    Name: {
        required: 'The input Name must must be filled',
        minLength: { value: 4, message: 'The Min letter is 4'},
        maxLength: { value: 100, message: 'The Max letter is 100'}
    },
    Cpf: {
        required: 'The input Cpf must must be filled',
        minLength: { value: 11, message: 'The Min letter is 11'},
        maxLength: { value: 14, message: 'The Max letter is 14'}
    },
    Registration: {
        required: 'The input Registration must must be filled',
        minLength: { value: 11, message: 'The Min letter is 11'},
        maxLength: { value: 14, message: 'The Max letter is 14'}
    },
    Email: {
        required: 'The input E-mail must must be filled',
        pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please insert one E-mail Valide'}
    },
    Cep: {
        required: 'The input Cep must must be filled',
    },
    PublicPlace: {
        required: 'The input PublicPlace must must be filled',
        pattern: { value: /^[0-9]*$/, message: 'Only Number'}
    },
    Complement: {
        required: 'The input Complement must must be filled',
        pattern: { value: /^[0-9]*$/, message: 'Only Number'}
    },
    Number: {
        required: 'The input Number must must be filled',
        pattern: { value: /^[0-9]*$/, message: 'Only Number'}
    },
    Neighborhood: {
        required: 'The input Neighborhood must must be filled',
        pattern: { value: /^[0-9]*$/, message: 'Only Number'}
    }

}

export default alunosValidator