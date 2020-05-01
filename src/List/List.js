import React from 'react'
import './List.scss'
import ListItem from '../ListItem/ListItem'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    quantity: 1,
                    ingredient: ''
                }
            ]
        }

        this.removeListItem = this.removeListItem.bind(this)
        this.onAddItem = this.onAddItem.bind(this)
        this.updateQuantityValue = this.updateQuantityValue.bind(this)
        this.updateTextValue = this.updateTextValue.bind(this)
    }

    removeListItem = (updateList) => (index) => {
        let items = [...this.state.items]
        items.splice(index, 1)
        this.setState({ items }, () => {
            updateList(this.state.items)
        })
    }

    onAddItem() {
        let items = [...this.state.items]
        items.push({
            quantity: 1,
            ingredient: ''
        })
        this.setState({ items })
    }

    updateQuantityValue = (updateList) => (index, quantity) => {
        let items = [...this.state.items]
        items[index] = {
            quantity,
            ingredient: items[index].ingredient
        }
        this.setState({ items }, () => {
            updateList(this.state.items)
        })
    }

    updateTextValue = (updateList) => (index, ingredient) => {
        let items = [...this.state.items]
        items[index] = {
            quantity: items[index].quantity,
            ingredient
        }
        this.setState({ items }, () => {
            updateList(this.state.items)
        })
    }

    componentWillMount() {
        document.addEventListener('keydown', event => {
            if (event.keyCode === 13){
                this.onAddItem()
            }
        })
    }

    render() {
        const { updateList } = this.props
        return (
            <div className='list-container'>
                {this.state.items.map((item, i) => (
                    <ListItem
                        key={ i }
                        index={ i }
                        textValue={ item.ingredient } 
                        updateTextValue={ this.updateTextValue(updateList) }
                        quantityValue={ item.quantity }
                        updateQuantityValue={ this.updateQuantityValue(updateList) }
                        removeListItem={ this.removeListItem(updateList) }
                    />
                ))}
                <button className='add-item' onClick={ this.onAddItem }>+</button>
            </div>
        )
    }
}

export default List
