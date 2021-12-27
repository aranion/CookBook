import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {SearchForm} from 'components/AdvancedSearch/SearchForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: '#f4f4f4',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

export const SearchModal = ({open = false, handleClose}: {open: boolean, handleClose: () => void}) => {

  return (
    <div>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SearchForm drawerWidth={800} handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
};
