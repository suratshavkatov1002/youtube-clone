import React from 'react'
import fetchFromApi from '../utils/fetchFromApi';
import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Saidbar from './Saidbar'
import Videos from './Videos';

const Fead = () => {

	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([])
	

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
			.then((data) => {
				setVideos(data.items) 
			})
	}, [selectedCategory])

	return (
		<Stack
			sx = {{flexDirection: {sx: 'column', md: 'row'}}}
		>
			<Box sx = 
				{
					{
						height: {sx: 'auto', md:'90vh'}, 
						borderRadius: '1px solid #3d3d3d', 
						px: {sx: 0, md:2},
						borderRight: '1px solid DarkGray'
					}
				}
			>
				<Saidbar
					selectedCategory = {selectedCategory}
					setSelectedCategory ={setSelectedCategory}
				/>
				
				<Typography className='copyright' variant = 'body2' sx = {{mt:1.5, color: '#fff'}}>
					Copyright @ {new Date().getFullYear()} JSM Media
				</Typography>
			</Box>

			<Box p = {2} sx = {{overflowY: 'auto', height: '90vh',flex:2}}>
				<Typography fontWeight = 'bold' mb = {2} sx = {{color: 'white'}} variant = 'h4'>
				{selectedCategory}	<span style = {{color: '#F31503	', marginRight:"2px"}}>
						vidios
					</span>
				</Typography>

				{videos.length> 0 && <Videos videos = {videos} />}
			</Box>
		</Stack>
	)
}


export default Fead;