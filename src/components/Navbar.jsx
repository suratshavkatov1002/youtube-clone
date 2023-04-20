
import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

// import img
import logo from '../assets/imgs/logo.png'

const Navbar = () => {
	return (
		<Stack
			direction="row"
			alignItems='center'
			spacing={3}
			sx={{ position: 'sticky', background: '#000', top: '15px', justifyContent: 'space-between' }}
		>
			<Link to = '/' style = {{display: 'flex', alignItems: 'center', }}>
				<img src={logo} alt="logo"  height={45}/>
			</Link>

			<SearchBar/>
		</Stack>
	)
}

export default Navbar