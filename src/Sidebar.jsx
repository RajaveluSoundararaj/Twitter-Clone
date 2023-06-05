import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Home from '@mui/icons-material/Home';
import Pages from '@mui/icons-material/Pages';
import Groups from '@mui/icons-material/Groups';
import Wc from '@mui/icons-material/Wc';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import AccountBox from '@mui/icons-material/AccountBox';
import ModeNight from '@mui/icons-material/ModeNight'; 
import Switch from '@mui/material/Switch';
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display : {xs :"none" , sm : "block"} }}>
    <Box position='fixed'>

    <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Home">
              <ListItemIcon>
                <Home>Home</Home>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#pages">
              <ListItemIcon>
                <Pages></Pages>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Groups">
              <ListItemIcon>
                <Groups></Groups>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Groups">
              <ListItemIcon>
              <CatchingPokemon></CatchingPokemon>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Groups">
              <ListItemIcon>
                <EmojiPeople></EmojiPeople>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Groups">
              <ListItemIcon>
                <Wc></Wc>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Groups">
              <ListItemIcon>
                <AccountBox></AccountBox>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Groups">
              <ListItemIcon>
                <ModeNight/>

              </ListItemIcon>
              <Switch onChange={(e)=> setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
            </List>
    </Box>
    </Box>
    
            
    
    
    
    
    )
}

export default Sidebar