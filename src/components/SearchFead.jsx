import React from 'react'
import fetchFromApi from '../utils/fetchFromApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import Videos from './Videos';

const SearchFead = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
 


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography fontWeight='bold' mb={2} sx={{ color: 'white' }} variant='h4'>
        Search Results for:	<span style={{ color: '#F31503	', marginRight: "2px" }}>
          {searchTerm} videos  
        </span>
      </Typography>

      {videos.length > 0 && <Videos videos={videos} />}
    </Box>
  )
}


export default SearchFead;