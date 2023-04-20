import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {  Stack, Box } from '@mui/material'


const VidioDetail = () => {
   
    const {id} = useParams()

    

    return (
        <Box minHeight='95vh' paddingTop = '45px'>
            <Stack direction={{ xs: 'column', md: 'row ' }}>
                <Box flex={1}>
                    <Box sx = {{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer url ={`https://www.youtube.com/watch?v=${id}`}
                            className = 'react-player' controls
                        />
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default VidioDetail;