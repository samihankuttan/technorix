import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
 

export default function InputBox(props) {


    return (
        <>
            <OutlinedInput
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="search button"
                            onClick={null}
                            edge="end"
                        >
                            search
                        </IconButton>
                    </InputAdornment>
                }
                label={props.label}
            />
        </>
    );
}
