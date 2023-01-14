import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { Input } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateProduct } from '../states/products/action';

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

const UpdateModal = ({ openUpdate, handleCloseUpdate, idProduct }) => {
    const [nameUpdate, setNameUpdate] = React.useState('');
    const [priceUpdate, setPriceUpdate] = React.useState('');
    const dispatch = useDispatch();

    const { products } = useSelector(states => states);
    const product = products.filter(product => product.id === idProduct);

    const handleSendUpdate = () => {
        if (window.confirm('Kamu yakin ingin mengubah data ini?')) {
            handleCloseUpdate();
            dispatch(asyncUpdateProduct({ product_id: idProduct, name: nameUpdate, price: priceUpdate }))
        }
    }

    return (
        <>
            {product && <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
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
                            placeholder={`${product[0]?.name}`}
                            required
                            sx={{ mb: 1 }}
                            onChange={(e) => setNameUpdate(e.target.value)}
                        />
                        <Input
                            placeholder={`${product[0]?.price}`}
                            required
                            sx={{ mb: 1 }}
                            onChange={(e) => setPriceUpdate(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" onClick={handleSendUpdate} sx={{ margin: '8px' }}>Update</Button>
                    </form>
                </Box>
            </Modal>
            }
        </>
    );
}

export default UpdateModal