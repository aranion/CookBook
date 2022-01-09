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
  selectedValue: string,
  setSelectedValue: (value: string) => void
}

export const CustomSelect = ({list, label, name, selectedValue, setSelectedValue}: PropsSelect) => {

  const handleChangeSelect = (e: SelectChangeEvent) => {
    setSelectedValue((e.target as any).value);
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
