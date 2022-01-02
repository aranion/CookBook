import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import { Box, Chip, Typography, Paper, InputBase, InputAdornment, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useActions } from "hooks/useActions";
import { ChipData } from 'models/Search';
import { RootState, useAppSelector } from 'store';
import { SearchState } from "store/search/types";

type ChipsProps = {
  chipsLabel: string;
  drawerWidth: number;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Chips: React.FC<ChipsProps> = ({chipsLabel, drawerWidth}) => {

  const chipData: ChipData[] = useAppSelector((state: RootState) => 
    (state.searchRecipe as SearchState).chips
  );

  const {setSearchChips, deleteSearchChips} = useActions()
  
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: string } }) => {
    return setValue(event.target.value);
  }

  const handleSetChip = () => {
    if(!chipData.filter(chip => chip.label === value).length && value) {

      const newChip: ChipData = { key: uuidv4(), label: value };

      setSearchChips(newChip)
      setValue('');
    }
  }

  const handleDelete = (chipToDelete: ChipData) => () => {
    deleteSearchChips(chipToDelete);
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