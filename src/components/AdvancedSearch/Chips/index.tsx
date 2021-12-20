import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import {Box, Chip, Typography, Paper, InputBase, InputAdornment, IconButton} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface ChipData {
  key: string;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Chips = ({chipsLabel, drawerWidth}: {chipsLabel: string, drawerWidth: number}) => {

  const [value, setValue] = useState('')

  const handleChange = (event: { target: { value: string } }) => {
    return setValue(event.target.value)
  }

  const handleSetChip = () => {
    if(!chipData.filter(chip => chip.label === value).length && value) {

      const newChip = {key: uuidv4(), label: value}

      setChipData(chips => ([...chips, newChip]))
      setValue('')
    }
  }

  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: '0', label: 'Картофель' },
    { key: '1', label: 'Форель' },
    { key: '2', label: 'Петрушка' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const displayGrid = 
  drawerWidth > 300 
    ? {display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', textAlign: 'right', gridGap: '16px'} as const
    : {}

  return (
    <Box>
      <Box sx={displayGrid}>
        <Typography variant="body1" color="text.secondary">{chipsLabel}</Typography>
        <Paper elevation={0}>
          <InputBase
            sx={{ width: "100%", boxSizing: "border-box", borderRadius: 1, padding: "4px 4px 4px 16px" }} 
            value={value}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  aria-label="add" 
                  onClick={handleSetChip}
                  onMouseDown={handleMouseDown}
                >
                  <AddCircleIcon color="primary"/>
                </IconButton>
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                label={data.label}
                onDelete={handleDelete(data)}
              />
            </ListItem>
          );
        })}
      </Box>
    </Box>

  );
}

export default Chips;