import React from 'react'
import './MenuItem.scss'

class MenuItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { itemName, displayText, showMe } = this.props
        return (
            <div className='menu-item' onClick={ () => showMe(itemName) }>
                <p>{ displayText }</p>
            </div>
        )
    }
}

export default MenuItem