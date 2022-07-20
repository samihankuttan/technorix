import * as React from 'react';
import Select from '@mui/material/Select';
import { OptionGroupUnstyled, OptionUnstyled } from '@mui/base';

export default function SelectBox(props) {


    return (
        <>
            <Select
                 
                id={props.id}
                value={props.value}
                label={props.label}
                onChange={props.onChange}
            >
                {options.map((item,i)=>(
                    <MenuItem value={item.value}>item.name</MenuItem>
                ))}
                
               
            </Select>
        </>
    );
}
