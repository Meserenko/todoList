import React from "react";
import ListItems from "./listItems";
import { v4 as uuidv4 } from 'uuid';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                id: '',
                completed: false
            },
            completed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(id, isDone)  {
        this.setState((state, props) => ({
            items: this.state.items.map(t => (t.id === id) ? {...t, completed: isDone} : t)
        }))
    }


    handleChange(e) {
        this.setState({
            currentItem:{
                text: e.target.value,
                id: uuidv4(),
                completed: false
            }
        })
    }
    
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem
        if(newItem.text !==""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    id: '',
                    completed: false
                }
            })
        }
    }

    deleteItem(id) {
        console.log(id)
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    }

    setUpdate(text, id) {
        this.state.items.map(item => {
            if(item.id===id) {
                item.text = text;
            }
        })
        this.setState({})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" className="todo-input" value={this.state.currentItem.text} onChange={this.handleChange}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"/>
                    </button>
                </form>
                <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate = {this.setUpdate} handleClick = {this.handleClick}/>
            </div>
        )
    }
}


export default TodoList;