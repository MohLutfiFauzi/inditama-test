import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete, MdUpdate, MdDetails, MdAddBox, MdLogout } from 'react-icons/md';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddProduct, asyncDeleteProduct, asyncGetAllProduct } from '../states/products/action';
import { asyncGetDetailProduct } from '../states/detailProduct/action';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import BasicModal from '../components/BasicModal';
import AddModal from '../components/AddModal';
import UpdateModal from '../components/updateModal';

const Dashboard = () => {
    const dispatch = useDispatch()
    const { products, detailProduct } = useSelector(states => states);
    const [open, setOpen] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [idProduct, setIdProduct] = React.useState('');

    const handleCloseAdd = () => setOpenAdd(false);
    const handleCloseUpdate = () => setOpenUpdate(false);
    const handleClose = () => setOpen(false);

    const handleUpdateProduct = (product_id) => {
        setIdProduct(product_id);
        setOpenUpdate(true)
    }

    const handleAddProduct = () => {
        setOpenAdd(false);
        dispatch(asyncAddProduct({ name, price }))
    }

    const handleDetailProduct = (product_id) => {
        setOpen(true);
        dispatch(asyncGetDetailProduct(product_id))
    }

    const handleDeleteProduct = (product_id) => {
        if (window.confirm('Kamu yakin ingin menghapus data ini ?')) {
            dispatch(asyncDeleteProduct(product_id))
        }
    }

    const handleLogout = () => {
        if (window.confirm('Kamu yakin ingin logout ?')) {
            dispatch(asyncUnsetAuthUser())
        }
    }

    React.useEffect(() => {
        dispatch(asyncGetAllProduct());
    }, [dispatch])

    return (
        <>
            <BasicModal handleClose={handleClose} open={open} detailProduct={detailProduct} />
            <AddModal handleCloseAdd={handleCloseAdd} openAdd={openAdd} setName={setName} setPrice={setPrice} handleAddProduct={handleAddProduct} />
            <UpdateModal handleCloseUpdate={handleCloseUpdate} openUpdate={openUpdate} idProduct={idProduct} />
            <TableContainer component={Paper} sx={{ maxWidth: '50%', margin: 'auto', marginTop: 10, border: '1px solid white' }} >
                <Button variant="contained" color="success" sx={{ margin: '8px' }} onClick={() => setOpenAdd(true)}>
                    <MdAddBox size={20} />
                </Button>
                <Button variant="contained" color="secondary" sx={{ margin: '8px' }} onClick={handleLogout}>
                    <MdLogout size={20} />
                </Button>
                <Table sx={{ minWidth: 650, backgroundColor: '#09090D' }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: 'white' }} >Nomer</TableCell>
                            <TableCell sx={{ color: 'white' }} align="right">Id</TableCell>
                            <TableCell sx={{ color: 'white' }} align="right">Name</TableCell>
                            <TableCell sx={{ color: 'white' }} align="right">Price</TableCell>
                            <TableCell sx={{ color: 'white' }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow
                                key={product.id}
                            >
                                <TableCell sx={{ color: 'white' }} component="th" scope="row">{index + 1}</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">{product.id}</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">{product.name}</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">{product.price}</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">
                                    <Button variant="contained" color="info" sx={{ margin: '8px' }} onClick={() => handleDetailProduct(product.id)}>
                                        <MdDetails size={20} />
                                    </Button>
                                    <Button variant="contained" color="error" sx={{ margin: '8px' }} onClick={() => handleDeleteProduct(product.id)}>
                                        <MdDelete size={20} />
                                    </Button>
                                    <Button variant="contained" color="warning" sx={{ margin: '8px' }} onClick={() => handleUpdateProduct(product.id)}>
                                        <MdUpdate size={20} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Dashboard