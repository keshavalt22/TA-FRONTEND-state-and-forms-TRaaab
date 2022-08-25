import React from 'react';
import menu from '../data/data';
import Item from './Item';

class Tags extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: "",
        }
    }

    handleClick = (name) => {
        this.setState({
            active : name,
        })
    }

    render(){
        let tagNames = menu.map((elm) => elm.category);
        let items;
        if(!this.state.active){
            items = menu.map(elm => elm);
        }else{
            items = menu.find((elm) => elm.category === this.state.active).category;
        }
        console.log(items);
        return (
        <>
            <ul className='flex tags'>
            {
                tagNames.filter((elm, i) => {
                    return tagNames.indexOf(elm) === i;
                }).map((name, i) => (
                    <li 
                    key={i}
                    className={ name === this.state.active ? 'active' : "" } 
                    onClick={() => this.handleClick(name)}>{name}
                    </li>
                ))
            }
        </ul>
        <Item items = {items}/>
        </>
        )
    }
}

export default Tags;