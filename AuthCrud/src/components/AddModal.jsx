import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { Input } from '@mui/joy';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    color: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddModal = ({ openAdd, handleCloseAdd, setPrice, setName, handleAddProduct }) => {
    return (
        <>
            <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <Input
                            placeholder="name"
                            required
                            sx={{ mb: 1 }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            placeholder="price"
                            required
                            sx={{ mb: 1 }}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" onClick={handleAddProduct} sx={{ margin: '8px' }}>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default AddModal