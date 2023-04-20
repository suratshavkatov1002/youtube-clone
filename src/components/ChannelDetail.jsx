import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import fetchFromApi from '../utils/fetchFromApi'

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null)
	const [videos, setVideos] = useState([])
	
	const { id } = useParams()
	
	
	useEffect(() => {
		fetchFromApi(`channels?part=snippet&id=${id}`)
			.then((data) => setChannelDetail(data?.items[0]))
		fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
			.then((data) => {
				
				setVideos(data?.items)
			})
	}, [id])

	return (
		<Box minHeight = '95vh'>
			<Box>
				<div style = {{
					background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,81,1) 64%, rgba(0,212,255,1) 100%)',
					zIndex: 10,
					height: '300px'
				}}
				/>
				<ChannelCard  channelDetail={channelDetail} marginTop = '-110px' />
			</Box>

			<Box display = 	'flex' p = '2'>
				<Box sx= {{mr: {sm: '100px'}, marginLeft: '300px'}} > 
					<Videos videos = {videos}/>
				</Box>
			</Box>
		</Box>
	)
}

export default ChannelDetail