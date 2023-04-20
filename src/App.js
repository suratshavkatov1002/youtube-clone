import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";

// import component
import {Navbar,Fead,VidioDetail, ChannelDetail,SearchFead} from './components'


const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }} >
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Fead />} />
                    <Route path="/video/:id" element={<VidioDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFead />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App;