import React from 'react'
import { List, ListProps } from 'antd';

export interface FaiListProps extends ListProps<any>{
    children: JSX.Element;
}

const FaiList = (props: FaiListProps) => {

    return (
        <List {...props}> 
            {props.children}
        </List>
    )
}

export default FaiList