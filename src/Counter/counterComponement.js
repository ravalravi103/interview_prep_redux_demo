import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decrement, increamentByAmout, handleAmount } from "../Redux/slices/counterSlice"

const Counter = () => {

    const couneterState = useSelector((state) => state);
    const dispatch = useDispatch()

    console.log(couneterState.counter.value);

    return (
        <React.Fragment>
            {couneterState.counter.value}
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Button variant="contained" onClick={() => dispatch(increament())}>Increament</Button>
                    <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={({ target: { value } }) => dispatch(handleAmount(value))} />
                    <Button variant="contained" onClick={() => dispatch(increamentByAmout(couneterState.counter.amount))}>Increment By Amout</Button>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default Counter