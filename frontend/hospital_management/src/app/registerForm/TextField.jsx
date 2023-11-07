"use client"

import React from "react";
import { TextField } from "@material-ui/core";
import {useField} from 'formik'

const TextfieldWrapper = ({
    name,
    ...otherProps
}) => {

    const [field, meta] = useField(name)
   
    const configureTextfield  = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant: 'outlined'
    }

   if(meta && meta.touched && meta.error){
    configureTextfield.error = true;
    configureTextfield.helperText = meta.error;
   }

    return(
        <TextField {...configureTextfield}/>
    )
}

export default TextfieldWrapper