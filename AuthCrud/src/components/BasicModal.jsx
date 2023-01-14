import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const BasicModal = ({ open, handleClose, detailProduct }) => {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Detail Product
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Id : {detailProduct?.id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Name : {detailProduct?.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Price : {detailProduct?.price}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Created at : {detailProduct?.created_at}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Updated at : {detailProduct?.updated_at}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default BasicModal