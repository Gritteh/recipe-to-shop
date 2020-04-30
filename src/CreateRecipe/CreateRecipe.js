import React from 'react'
import './CreateRecipe.scss'
import List from '../List/List'

class CreateRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipeName: '',
            ingredients: [
                {
                    quantity: 1,
                    ingredient: ''
                }
            ],
        }

        this.onSaveClick = this.onSaveClick.bind(this)
        this.updateList = this.updateList.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    onSaveClick() {
        localStorage.setItem(this.state.recipeName, JSON.stringify(this.state.ingredients))
        // setTimeout(() => {
        //     console.log('storage', JSON.parse(localStorage.getItem(this.state.recipeName)))
        // })
    }

    updateList(list) {
        this.setState({ ingredients: list })
    }

    handleTextChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='create-recipe'>
                <div className='create-recipe__wrapper'>
                    <div className='top'>
                        <input className='recipe-name' type='text' name='recipeName' value={ this.state.recipeName } placeholder='Recipe Name' onChange={ this.handleTextChange } />
                    </div>
                    <div className='middle'>
                        <List updateList={ this.updateList } />
                    </div>
                    <div className='bottom'>
                        <button onClick={ this.onSaveClick }>SAVE</button>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateRecipe
