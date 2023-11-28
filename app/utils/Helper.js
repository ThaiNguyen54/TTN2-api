'use strict';


export function VariableTypeChecker (value, type, length) {
    let result;
    let minLength;
    result = !(typeof  value !== type || value == null || value.length <= minLength)
    return result
}

export function GetAge(birthDate) {
    const today = new Date()
    const birthdate = new Date(birthDate)
    return today.getFullYear() - birthdate.getFullYear()
}

