import React from "react";
import ListItems from "./listItems";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            },
            completed: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.setState({completed: !this.state.completed})
    }
    

    handleInput(e) {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
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
                    key: ''
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items: filteredItems
        })
    }

    setUpdate(text, key) {
        const items = this.state.items;
        items.map(item => {
            if(item.key===key) {
                item.text = text;
            }
        })
        this.setState({

        })
    }
    render() {

        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" className="todo-input" value={this.state.currentItem.text} onChange={this.handleInput}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"/>
                    </button>
                </form>
                <ListItems completed={this.state.completed} items={this.state.items} deleteItem={this.deleteItem} setUpdate = {this.setUpdate} handleClick = {this.handleClick}/>
            </div>
        )
    }
}


export default TodoList;