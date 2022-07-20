import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function SelectBox(props) {


    return (
        <>
            <Select
             style={{width:'100%'}}
                id={props.id}
                value={props.value}
                label={props.label}
                onChange={props.onChange}
            >
                {props.options.map((item,i)=>(
                    <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
                
               
            </Select>
        </>
    );
}
