import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function SelectBox(props) {


    return (
        <>
            <Select
                style={{ width: '100%' }}
                id={props.id}
                value={props.value}
                placeholder={props.label}
                onChange={props.onChange}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <em>{props.label}</em>;
                    }

                    return selected.join(', ');
                }}
            >
                <MenuItem disabled value="">
                    <em>{props.label}</em>
                </MenuItem>
                {props.options.map((item, i) => (
                    <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}


            </Select>
        </>
    );
}
