import React from 'react';
import cx from 'classnames'


function ListItems(props) {
    const listItems = props.items.map(item => {
        return(
            <div className="todo-container" key={item.key}>

                <input className={cx({
                    'todo-list':true,
                    'todo':true,
                    'filter-todo':true,
                    'completed': item.completed
                })} type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }}/>
                    <button className='completedItemBtn' onClick={() => props.handleClick(item.key)}>
                        <i className="fas fa-check complete-btn"/>
                    </button>
                    <button className="deleteItemBtn" onClick={() => props.deleteItem(item.key)}>
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