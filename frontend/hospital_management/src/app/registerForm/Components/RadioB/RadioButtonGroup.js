"use client";
import { Field, ErrorMessage } from 'formik';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioButtonGroup = ({ label, name, options }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Field name={name}>
        {({ field }) => (
          <RadioGroup {...field} row>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio color="primary" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      </Field>
      <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
    </FormControl>
  );
};

export default RadioButtonGroup;
