import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(asyncSetAuthUser({ email, password }))
        setPassword('')
        setPassword('')
    }

    return (
        <CssVarsProvider>
            <main>
                <Sheet
                    sx={{
                        width: 300,
                        mx: 'auto', // margin left & right
                        my: 20, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Welcome!</b>
                        </Typography>
                        <Typography level="body2">Sign in to continue.</Typography>
                    </div>
                    <TextField
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        name="password"
                        type="password"
                        placeholder="password"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ mt: 1 }} onClick={handleLogin}>Log in</Button>
                </Sheet>
            </main>
        </CssVarsProvider>
    )
}

export default Login