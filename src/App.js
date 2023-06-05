import * as React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import {Box, Stack, ThemeProvider, createTheme} from "@mui/material"
import Navbar from './Navbar';
import Add from './Add';
import { useState } from 'react';



function App() {
  
const [mode , setMode] = useState("light")

const darktheme = createTheme ({
  palette : {
    mode : mode
  }
})

  return (
   <ThemeProvider theme={darktheme}>
    <Box bgcolor={"background.default"} color={'text.primary'}>
    <Navbar/>
   <Stack direction="row" spacing={2} justifyContent="space-Between">
   <Sidebar setMode={setMode} mode={mode} />
   <Feed />
   <Rightbar />
   </Stack>
   <Add />
   </Box>
   </ThemeProvider>
  );
}

export default App;
