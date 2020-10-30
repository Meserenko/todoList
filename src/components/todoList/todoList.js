import React from "react";
import ListItems from "./listItems";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
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

    handleClick(key)  {
        this.setState((state, props) => ({
            items: this.state.items.map(t => (t.key === key) ? {...t, completed:true} : t)
        }))
    }


    handleChange(e) {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now(),
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
                    key: '',
                    completed: false
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
        this.state.items.map(item => {
            if(item.key===key) {
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