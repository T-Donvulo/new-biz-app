import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const StyledTextField = styled(TextField)`
width:100%;

  & .MuiFormLabel-root.Mui-focused {
    color: rgb(${tokens.colors.turquoise});
  }

  & .MuiInputBase-root::after {
    border-bottom-color: rgb(${tokens.colors.turquoise});
  }
`;

/**
 *
 * @typedef {object} props
 * @propert {string} label
 * @property {string} value
 * @propert {'text' | 'password' | 'email'} accepts
 * @propert {(value: string) => void} onChange
 */

/**
 * 
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Input = (props) => {
  const { accepts, label,onChange, value } = props;
  const handleChange = (event) => onChange(event.target.value);

  return (
    <StyledTextField
     value={value}
     label={label}
     disabled= {!onChange}
      onChange={handleChange}
      fullWidth
      inputProps = {{type: accepts}}
      variant="filled"
    />
  );
};

export default Input;
