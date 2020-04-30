import React from 'react'
import './ListItem.scss'

class ListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inFocus: false
        }

        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)

        this.numberInput = React.createRef()
        this.textInput = React.createRef()
        this.onTextFocus = this.onTextFocus.bind(this)
        this.onTextBlur = this.onTextBlur.bind(this)
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
        const { index, textValue, updateTextValue, quantityValue, updateQuantityValue } = this.props
        return (
            <div className={`item-container ${ this.state.inFocus ? 'in-focus' : '' }`}>
                <input
                    className='quantity-input'
                    type='number'
                    value={ quantityValue }
                    onChange={ (e) => this.handleNumberChange(e, updateQuantityValue, index) } 
                    ref={ this.numberInput }
                />
                <input
                    className='ingredient-input'
                    type='text' value={ textValue }
                    placeholder='Garlic'
                    onChange={ (e) => this.handleTextChange(e, updateTextValue, index) }
                    ref={ this.textInput }
                    onFocus={ this.onTextFocus }
                    onBlur={ this.onTextBlur }
                />
                <button className='done-button' onClick={ (e) => this.onDoneClick(e) }>DONE</button>
            </div>
        )
    }
}

export default ListItem
