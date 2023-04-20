import React, { useState } from 'react'
import {Paper, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const heandleSubmit  = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
        component = "form"
        onSubmit = {heandleSubmit}
        sx = {{
            borderRadius: 10,
            border: "1px soli #e3e3e3",
            pl: 2,
            boxShadow: 'none',
            mr: {sm:5}
        }}
    >
        <input
            className = 'search-bar'
            placeholder='Serach...'
            value = {searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value) }
        />

        <IconButton type = 'submit' sx = {{p: '10px', color: 'red'}}>
             <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar