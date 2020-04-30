import React from 'react'
import './App.scss'
import MenuItem from './MenuItem/MenuItem'
import CreateRecipe from './CreateRecipe/CreateRecipe.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showMenu: true,
			displayedItem: ''
		}
		this.displayItemHideMenu = this.displayItemHideMenu.bind(this)
	}

	displayItemHideMenu(itemToDisplay) {
		this.setState({ showMenu: false, displayedItem: itemToDisplay })
	}

	render() {

		return (
			<div>
				{ this.state.showMenu &&
					<div className="main-menu">
						<h1 className="main-menu__title">Recipe To Shop</h1>
						<div className="main-menu__items">
							<MenuItem
								itemName="create-recipe"
								displayText="Create Recipe"
								showMe={ this.displayItemHideMenu }
							/>
							<MenuItem
								itemName="edit-recipes"
								displayText="View/ Edit Recipes"
								showMe={ this.displayItemHideMenu }
							/>
							<MenuItem
								itemName="create-shop"
								displayText="Create Shopping List"
								showMe={ this.displayItemHideMenu }
							/>
						</div>
					</div>
				}
				{ this.state.displayedItem === 'create-recipe' && 
					<CreateRecipe />
				}
				{ this.state.displayedItem === 'edit-recipes' &&
					<div></div>
				}
				{ this.state.displayedItem === 'create-shop' &&
					<div></div>
				}
			</div>

		)
	}
}

export default App
