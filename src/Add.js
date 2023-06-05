import React, { useState } from 'react'
import {Box, styled, Fab , Modal, Tooltip, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from "@mui/material"
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
// import styled from '@emotion/styled'


const SytledModal = styled(Modal) ({
  display : "flex" ,
  justifyContent : "center" ,
  alignItems : "center"
})

const UserBox = styled(Box) ({
  display : "flex" ,
   alignItems : "center",
    gap :10 ,
    marginBottom : "20px"
  })


const Add = () => {

const [open , setOpen] = useState(false)

return (
<>
    <Tooltip onClick={(e) => setOpen(true)} 
    title="Delete" 
    sx={{
    position:"fixed" , 
    bottom:30 , 
    left: {xs : "calc(50% - 25px)", md :30} }}>
 <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<SytledModal
  open={open}
  onClose={(e) => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} p={3} borderRadius={4} bgcolor={"background.default"} color={'text.primary'}>
    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
    <UserBox>
      <Avatar h
     sx ={{
       width: 30 , height:30
     }} 
     src="https://th.bing.com/th/id/OIP.jKHBRVWDytTl9XLqRRQ7kAAAAA?pid=ImgDet&rs=1"
      />
      <Typography variant="span" fontWeight={500}>Rv</Typography>
      </UserBox>
      <TextField 
      sx={{width : "100%"}}
      id = "standard-multiline-static"
      multiline
      rows={3}
      placeholder='Whats on your mind?'
      variant='standard'
      />
    <Stack direction="row" gap={1} mt={2} mb={3}>
     <EmojiEmotions color='primary'/>
     <Image color="secondary" />
     <VideoCameraBack color = "success" />
     <PersonAdd color="error"/>
    </Stack>
    <ButtonGroup fullwidth variant='contained' aria-label="outlined primary button group">
  <Button sx={{width:"300px"}}>Post</Button>
  <Button  ><DateRange/></Button>
</ButtonGroup>
    </Box>
</SytledModal>
</>
  )
}

export default Add