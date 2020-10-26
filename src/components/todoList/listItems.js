import React from 'react';



function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return(

            <div className="todo-container" key={item.key}>

                <input className="todo-list todo filter-todo" type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }}/>
                    <button className='completedItemBtn'>
                        <i className="fas fa-check complete-btn"/>
                    </button>
                    <button className="deleteItemBtn" onClick={() => props.deleteItem(item.key)}>
                        <i
                        className="fas fa-trash trash-btn" />
                    </button>
            </div>
        )
    })
    return(
        <div>{listItems}</div>
    )
}




export default ListItems;