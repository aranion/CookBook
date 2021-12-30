import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";

export type TSelect = { 
  [index: string]: string 
}

interface PropsSelect {
  list: TSelect,
  label: string,
  name: string,
}

export const CustomSelect = ({list, label, name}: PropsSelect) => {

  const [ selectedValue, setSelectedValue ] = useState('');

  const handleChangeSelect = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);
  }
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel id={name}>
        {label}
      </InputLabel>
      <Select
        labelId={name}
        label={label}
        name={name}
        value={selectedValue}
        onChange={handleChangeSelect}
      >
        {Object.keys(list).map((key: keyof TSelect) => {
          return <MenuItem key={key} value={list[key]} >
            {list[key]}
          </MenuItem>
        })}
      </Select>
    </FormControl>
  );
};
