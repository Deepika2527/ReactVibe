export const valdiateName =(name)=>{
    const regex = /^[A-Za-z ]{5,}$/
    return regex.test(name)
}
export const validateEmail = (email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)

}

export const valdiatePassword = (password) =>{
    // const regex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,}$/
    const regex = /^[A-Za-z\d]{6,}$/
    return regex.test(password)
}


export const validatePhone = (phone) =>{
    const regex = /^[6-9][0-9]{9}$/
    return regex.test(phone)
}