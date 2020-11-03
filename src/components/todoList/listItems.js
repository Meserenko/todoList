import React from 'react';
import cx from 'classnames'
import './list.css'

function ListItems(props) {
    const listItems = props.items.map(item => {
        return(
            <div className="todo-container" id={item.id}>

                <input className={cx({
                    'todo-list':true,
                    'todo':true,
                    'filter-todo':true,
                    'completed': item.completed
                })} type="text" id={item.id} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.id)
                }}/>
                    <button className='completedItemBtn' onClick={() => props.handleClick(item.id, !item.completed)}>
                        <i className="fas fa-check complete-btn"/>
                    </button>
                    <button className="deleteItemBtn" onClick={() => props.deleteItem(item.id)}>
                        <i className="fas fa-trash trash-btn" />
                    </button>
            </div>
        )
    })
    return(
        <div>{listItems}</div>
    )
}




export default ListItems;