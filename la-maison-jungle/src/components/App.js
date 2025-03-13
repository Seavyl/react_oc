import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import PlantItem from './PlantItem'


function App() {
	return (
		<div>
			<PlantItem />
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
		    <ShoppingList />
		</div>
	)
}


export default App
