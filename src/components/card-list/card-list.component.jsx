import React from 'react'

import {Card} from '../card/card.component'

import "./card-list.styles.css"


export const CardList = props =>{
    console.log(props)
    const{monsters} = props
    return(
        <div className ="card-list">
            {/* {props.children} */}
            {
                monsters.map(item=>(
                 <Card key ={item.id} monsters = {item} />
                ))
            }
        </div>
    )
}