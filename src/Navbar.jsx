import { AppBar, Icon, Toolbar , Typography, styled , theme , InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import React  from 'react'
import rv from "./rv.jpg.png"
import { useState } from 'react';

const StyledToolbar = styled (Toolbar)({
    display :"flex" ,
    justifyContent : "space-between"
})

const Search = styled ("div")(({ theme }) => ({
 backgroundColor : "white" ,
 padding: "0 10px",
 borderRadius :theme.shape.borderRadius,
 width: "40%"
}));

const Icons = styled ('Box')(({ display:"flex " , alignItems: "center" , gap : '20px' , }))

const Navbar = () => {

    const [open , setOpen ] = useState(false)
 
    return (


<AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display : {xs : "none" , sm : "block"}}}>Twitter</Typography>
            <TwitterIcon  sx ={{ display : {xs : "block" , sm : "none"}}} />
            <Search><InputBase placeholder='Search...'/></Search>
            <Icons><Badge badgeContent={4} color="error">
  <Mail />
</Badge>
<Badge badgeContent={4} color="error">
  <Notifications />
  </Badge>
  <Avatar sx={{width :30, height :30}} src="https://staticg.sportskeeda.com/editor/2019/09/c4d5d-15688745277332-800.jpg"
  onClick ={(e)=>setOpen(true)}
  ></Avatar>
</Icons>
        </StyledToolbar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
        onClick={(e)=> setOpen(false)}
        anchorOrigin= {{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar