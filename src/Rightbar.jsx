import { Box, Typography , Avatar ,AvatarGroup, ImageList, ImageListItem, Divider, ListItem, ListItemAvatar, ListItemText, List} from '@mui/material'

import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2}  sx={{ display : {xs : "none" , sm : "block"}}} >
    <Box position='fixed' width = {300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={6}>
      <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.jKHBRVWDytTl9XLqRRQ7kAAAAA?pid=ImgDet&rs=1" />
      <Avatar alt="Travis Howard" src="https://superstarsbio.com/wp-content/uploads/2019/01/Neymar.jpg" />
      <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.3403298bcbe6822083f974cb3c88e69c?rik=ywDK2vBZffqC7g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Cq4zEz-bq4M%2fUoS_PBHHrFI%2fAAAAAAABRnM%2fr9PETw0YiVs%2fs400%2fSania%2bMirza%2bPhotos%2bat%2bIndia%2bToday%2bGroup%2bPresents%2bSalaam%2bSachin%2bEvent%2bCelebsNext%2b0001.JPG&ehk=SBUMa5gRJs4VyuYnmFdeFP45xHlXHOPJr536A5wXVTU%3d&risl=&pid=ImgRaw&r=0" />
      <Avatar alt="franklin" src="https://www.svg.com/img/gallery/how-gtas-franklin-really-felt-about-returning-to-gta-5/l-intro-1639760906.jpg" />
      <Avatar alt="Trevor " src="https://yt3.ggpht.com/a/AATXAJwZ26y8n3qIK6d0jBlgu6i4U1zyFUCtd-fY5Rtg=s900-c-k-c0xffffffff-no-rj-mo" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="michael" src="https://cdn.staticneo.com/w/gta5/thumb/Michael.png/560px-Michael.png" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100}>Conversations</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" 
           src= "https://cdn.staticneo.com/w/gta5/thumb/Michael.png/560px-Michael.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                image="">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmmajunkie.usatoday.com%2Fgallery%2Fufc-wwe-ronda-rousey-red-carpet-photos&psig=AOvVaw2GujrKxP3juTfKz_myJy9u&ust=1686040859921000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDpxubdq_8CFQAAAAAdAAAAABAE" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.3403298bcbe6822083f974cb3c88e69c?rik=ywDK2vBZffqC7g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Cq4zEz-bq4M%2fUoS_PBHHrFI%2fAAAAAAABRnM%2fr9PETw0YiVs%2fs400%2fSania%2bMirza%2bPhotos%2bat%2bIndia%2bToday%2bGroup%2bPresents%2bSalaam%2bSachin%2bEvent%2bCelebsNext%2b0001.JPG&ehk=SBUMa5gRJs4VyuYnmFdeFP45xHlXHOPJr536A5wXVTU%3d&risl=&pid=ImgRaw&r=0" />

        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Rightbar