import React from 'react'
import './ListItem.scss'
import { ReactComponent as MenuVerticalSVG } from '../assets/menu-vertical.svg'

class ListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inFocus: false,
            optionsMenuOpen: false,
        }

        this.createOneToHundred = this.createOneToHundred.bind(this)
        this.oneToHundred = this.createOneToHundred()

        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.onOptionsClick = this.onOptionsClick.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)

        this.numberInput = React.createRef()
        this.textInput = React.createRef()
        this.onTextFocus = this.onTextFocus.bind(this)
        this.onTextBlur = this.onTextBlur.bind(this)
    }

    createOneToHundred() {
        let arr = []
        for (var i = 1; i < 100; i++) {
            arr.push(i)
        }
        return arr
    }

    onDeleteClick(removeIngredient, i) {
        this.setState({ optionsMenuOpen: false })
        removeIngredient(i)
    }

    onOptionsClick() {
        this.setState({ optionsMenuOpen: true })
        const clickListener = (e) => {
            if (!e.target.closest('.options-delete')) {
                this.setState({ optionsMenuOpen: false })
                document.removeEventListener('click', clickListener)
            }
        }
        document.addEventListener('click', clickListener)
    }

    onTextFocus() {
        this.setState({ inFocus: true })
    }
    
    onTextBlur() {
        this.setState({ inFocus: false })
    }

    onDoneClick() {
        this.numberInput.current.blur()
        this.textInput.current.blur()
    }

    handleNumberChange(event, updateQuantityValue, i) {
        updateQuantityValue(i, event.target.value)
    }

    handleTextChange(event, updateTextValue, i) {
        updateTextValue(i, event.target.value)
    }

    componentDidMount() {
        this.textInput.current.focus()
    }

    render() {
        const { index, textValue, updateTextValue, quantityValue, updateQuantityValue, removeListItem } = this.props
        return (
            <div className={`item-container ${ this.state.inFocus ? 'in-focus' : '' } ${ this.state.optionsMenuOpen ? 'options-open' : '' }`}>
                {/* <input
                    className='quantity-input'
                    type='number'
                    value={ quantityValue }
                    onChange={ (e) => this.handleNumberChange(e, updateQuantityValue, index) } 
                    ref={ this.numberInput }
                    onFocus={ this.onTextFocus }
                    onBlur={ this.onTextBlur }
                /> */}
                <div className='quantity-input-container'>
                    <select
                        name='item-options'
                        className='quantity-input'
                        value={ quantityValue }
                        onChange={ (e) => this.handleNumberChange(e, updateQuantityValue, index) }
                        ref={ this.numberInput }
                    >
                            {this.oneToHundred.map(val => (
                                <option value={ val }>{ val }</option>
                            ))}
                    </select>
                </div>
                <input
                    className='ingredient-input'
                    type='text' value={ textValue }
                    placeholder='Garlic'
                    onChange={ (e) => this.handleTextChange(e, updateTextValue, index) }
                    ref={ this.textInput }
                    onFocus={ this.onTextFocus }
                    onBlur={ this.onTextBlur }
                />
                <div onClick={ this.onOptionsClick } className='menu-vertical'>
                    <MenuVerticalSVG />
                    <div className='menu-options'>
                        <div className='options-delete' onClick={ () => this.onDeleteClick(removeListItem, index) }>Delete</div>
                    </div>
                </div>
                <button className='done-button' onClick={ (e) => this.onDoneClick(e) }>DONE</button>

            </div>
        )
    }
}

export default ListItem
