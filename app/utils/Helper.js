'use strict';

import * as fs from "fs";
import {STUDENT_IMAGE_FOLDER_DIR} from "./Constants.js";
import e from "express";

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

export function SaveImageFromBase64 (base64Image, imageName) {
    const base64ImageData = base64Image.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64ImageData, 'base64');
    const filePath = STUDENT_IMAGE_FOLDER_DIR.dir + imageName;

    if (!fs.existsSync(STUDENT_IMAGE_FOLDER_DIR.dir)) {
        fs.mkdirSync(STUDENT_IMAGE_FOLDER_DIR.dir)
    }
    fs.writeFileSync(filePath, imageBuffer, 'base64');
}

export function ConvertBase64ImageToBuffer (base64Image) {
    const base64ImageData = base64Image.replace(/^data:image\/\w+;base64,/, '');
    return Buffer.from(base64ImageData, 'base64')
}

export function ConvertBase64ImageToBLOB (base64Image) {
    const byteCharacters = atob(base64Image);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/png' })
}