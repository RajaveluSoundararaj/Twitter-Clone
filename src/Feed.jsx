import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia,IconButton, Typography } from '@mui/material'
import Share from '@mui/icons-material/Share';
import MoreVert from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react'

const Feed = () => {
  return (
    <Box  flex={4} p={2}>
    <Card sx={{margin:"5px"}} >
      <CardHeader
        avatar={
          <Avatar  color="red" aria-label="recipe" src="https://superstarsbio.com/wp-content/uploads/2019/01/Neymar.jpg" >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="Mar 11, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://th.bing.com/th/id/R.712a85870f56771717d0df7074d31f36?rik=kZe1hjC7hkwedQ&riu=http%3a%2f%2fbubbles.com.pl%2fwp-content%2fuploads%2f2018%2f10%2ffotolia_109759077_subscription_monthly_m.jpg&ehk=fjmP0dP5%2f93HGLrwLOkWLIAhKeRl8w1LQmwgezypq3Q%3d&risl=&pid=ImgRaw&r=0"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{margin:"5px"}}>
      <CardHeader
        avatar={
          <Avatar  color="red" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fformula-1-desktop-tnmnne2sdk6c6awl.html&psig=AOvVaw30tStpr_yyLsqyNjsRENyk&ust=1686039734357000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDW_c3Zq_8CFQAAAAAdAAAAABAE" aria-label="recipe">
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Grand prix"
        subheader="May 10,2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.performgroup.com/di/library/sporting_news/13/56/chinese-grand-prix-041119-getty-ftrjpg_d5ksxrtn58vw10plh2fhcmj0r.jpg?t=220846698&quality=100"
        alt="Cars"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Max Verstappen wins Monaco GP, takes F1 title lead from Lewis Hamilton , Verstappen darted in front of Valtteri Bottas and led start to finish for his second win of the season and 12th of his career. The Red Bull driver took a four-point lead over seven-time F1 champion Lewis Hamilton in the standings.


        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />


        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{margin:"5px"}}>
      <CardHeader
        avatar={
          <Avatar  color="red" src="https://pbs.twimg.com/profile_images/1617230837899984900/CI4F6R0d_400x400.jpg" >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="PSG"
        subheader="June 1, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://m.thepeninsulaqatar.com/get/maximage/20230604_1685856012-967.jpg?1685856012"      
        alt="Cars"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        After two seasons in the French capital, Leo Messi’s adventure with Paris Saint-Germain (PSG) came to an end at the conclusion of the 2022–23 campaign. The club, in a press release on its official web site, yesterday said it would like to extend warmest thanks to the seven-time Ballon d’Or winner, who also lifted a Trophée des Champions and two Ligue 1 titles with Les Rouge et Bleu.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />


        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{margin:"5px"}}>
      <CardHeader
        avatar={
          <Avatar  color="red" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEUiHx+vDBniEiHjEiIfHx+kDRm0CxkZIB9lFx2qDBitDBmpDBgWIB8gHh+gCheqDRl6FRyTCBWGBhOaCRbqESIzHB4AIB+QCBVIHR+KBxSWCBWCBRN1AxERHx99BRLtEyPbESDREyEIHx+LGSC8FSF3FRtyGyDSEB8tHh+3FiG/DhxSHSCfGCAwHh9gHCC+DRyZGCCBFBtWHSA+Hh9vFBpmExldEhhTEhhFExhtBhKnFyCdGCCA1fRxAAAMp0lEQVR4nO2dC3PaSBLHhUYg87AwYgyRBJLAD2ycxInt7N7lvv/3unn29AhBtmr3Uuo6dXkJuJaUf9v/fs6YDYLeeuutt95666233nrrrbfeeuutt95666233nrr7f/Gol/Z/+Stv9M+/crO/pzR0+0v7Ol3gpyz+FDxi1ZdxWfeOvv+Orporz/OvfV3WjzhjLFQGJNfTD/RT+V3GP+5P/PW2c1ocNFGZ//j/E6Lck2iqBSreG2/FGX9dEanVAiXB2b8FWpK68HQPOGPs/a3UiFMRtw6EXEhTPZ8RqZUCIeJ1ibD3jMiNdF5RqZkCIc7BvJ0McicYvlNu0zJEA6SClIpmPGqTjbHVetbyRCO1g7QMTKoHCzkt60yJUM4SI6ceRFo8471Jr/btr2VDuFkyREOlH/zQn7tWmVKhnA0WNfaewxaGReN+p+Xth+VDOFgsBxxlGRsSjVw8hn/1lYSCREOc25YQKGhn3V2bZMQIcJxdmAud9oygVq4kL+1/KyECCf5gHvxB5OF9WTrgEGIcJBk3PVpjdpvBoyWekGJcFocbOdmBepY1evq6+kPS4lwnA8rN1DYGARfyhFqfloSKRFOlgVHtdALSfs8OMmmlAgHw3QH6rTR6GZg+bxlDiZFOF0k3IxOzokgU/Xi/kSmpAjHy0KHIDSmoReG4rF+b8qUFOEkSY/cKxXNtBry782CQYtwuF5yWxtgLmRh6Lob9kqaULSmJaoVzQWjes6bMqVFOF0Wr9xvt5u7t5M5mBbhOFlnFQJ0Qz7E48kcTItwImXqlURv3NcybRzS0CIUMk3NgIED0ZR7Mwd/9gcMaoTJOuV+VxO6SV+L9eC3NcQIx0leeicYzG3drGS5P2BQIxwu0zmHZaJhdVOw/IP/9HINMcLJdLkurEwbBmX/4J1gkCNMFuUOzi5c/KFpMeTej0yMUMg0T4fctab+3tSo1ztoo0e4zEqG0BjKpXAmhedgaoQyEIVMcYFAKym9YWT8ARUMeoRJni4qywag3jmNNwdTI5QyXW/wlG9kCofBCvSLkyk9QinTV44CzwPVrsUDxuzhMmDnCGW9SNeV7USxXNGO8eiyKUXCPCtrF4DoCkroWpwXkCk5QhWI5Yi7SxjuoAaeh/wbyJQg4XS5SDPXuTXOMXS9YDv4qQXhhBqhkOmmxudstui7fjzkcB5Mj3AyHebrcsDxri3Ez5UP3RxMkFAGYlpyW/xgjELLb/G8tkV/9jAZX0TsHKEKxGxzgASK86hr5OCgjSRhImQqD9pc8IVYq/q1nYMV4SXE7hGKQFQytccXVp7edj8Ma3NtYfYwnl50YgcJtUx3aIkIizf0hz1om31IwguInSQU9aJYVigA8RrcqvdZyzT+mFLzoQxEKVM4scBbYXeTIaz1TT5JeBGxi4SyXmQbedBmOhi8zLDBGfIb1bkpwjktQhmIQqY5d0EIYkUzsTloiz+G5Hw4mct6kW6gCw2buVR/T184FYSXETtIaAJx8wqNmxeCsCbWczBRwqGoF0VahZbLFQrmxg190BZ/JPQIJ1MrU+Q11HwbhzJ10CYILyN2klDJNJMDBnNbGlTvTR1Rc3D8gyahkmlh64UGcjti+7BThEtNeA6xi4QyEJOFkOmh0ZKCTE23Kg/aBKFEHJ91YicJdSBm5dyeYODmjYVwGVxeODWE52XaTUIZiEqmzXYUxaOEPARR/CNfLkXBIEcoAnFd4AHDJRrYfotccxULwvyiE7tLKOpFOeShy6aoK7Uv+Xwf/1gQJLT1ohBzsO9BfNNdxaNQ6WKREyVcZKmSqbdXDP2n/HF/tTZOPFMvOkuoZSoP2vw73zDv65Jxv7pary/KtLuESqYbbw6GnKrp1LOnPzLhRNnXkCJUFVHJ9Mi9dArTlC2O/ObPzMiUGKEMRFH0i0Vld/lQIoBTUR7/lWUXZdpdwqFsa4pN7VoaBtMUKhz1R6GdSJFQyXTEgQaNv/pB+pKPyjQzMm1F7CihaL5lIAonZrgkumHR7WvqTXpRpl0lNPVCOLGGLBN6lcNm1motZbo8K9MuEya5lOmAw/WaRu+tH/grOJEUoZoRVTYtKr8lRaXfpB5JuNAypUWo64WVKf79IFwvWChlmgnCMzLtLCHItBxWeGfq9sKg3d1FmXabUGTTtChbLpx6y35WFkQJrUx3blWDGhy3f+NJqXrT9kDsLKHtvsWAkZjPInBHGGiQUndPLsm064Sy6Jcm7JjnSezX4oJMu06oZHr0elPgg8sLfKo6NzUG0yIUbY3oTbNyyYEQmm8Gg6LcuRmZttWL7hLKGdEU/Y2fW8CfUDmqCzLtMqEnUy/NWFD7gk/KVGdTaoSq6MsBo3KFEN3MgPuYMGC0BGLnCbUTIccwdIHPilR8VWlhA5EQIZJpOeIQhv4Rhsk8asBYtAZixwmniZZpCje/QaqweVPPtUwpEhon/ntnNlB2oMCLU0nKF6WUaUtF7DKhk2m2eeS2PrghEbQqD9qOWqangUiAUHZu5buTKLSj3gKHbYp2mXad0Bb91b3LLj6ZeaxyI1NihFqmi6zYPtjltwtDtPwWDrUyJUVohkQ5B19HDPsMbcGh/ZYyFfWCHqGSaRqsnjnmwQLVD1UiOreWQKRBuMiu4yt+wuVOaCS4HDDyU5l2m1BlU9Gb5tl1NKtxx3ZyJ5OFvCx0vaBGqJyYXQf7nxwc5s/6prVRA0ZOlHC5vg7iNw6KNPrExUPLVNcLSoQWURBG0Q51M7B+g42GyKZp0VIvqBCKf2n/jTO0CoZCCNtvPtAypUYoi36yuA6C+MWtMbwsw+ypohwwZL2gRaidKAmDPf4dDLy2Mdk1rDIp00Ygdp3Q7jIk4faOe2ys4U7GRyLXiED0ru7TIBwqwuiW4wHflkW0GWZKpn4gdp9Q700lYbA6QsnHvZtdhuvzYFkvSBEOEOHshrtOBidUSyoGDBWI9AinmjB6Yi1x6BKPnINP6gUBQjVCKcJg/+w+YwltbNzIKA/ayBEOEOHsET7WvNnQGLfuTmRKgnBsCaMvNSyD3cIbJimZckpVL1BFJECoLrlpwmD1093kw0KFJpUPSxWI1AjHQ0Oo5uDmSaIXmgcpUxyIxAjlHIxOL8B/1ouic5MyxYFIgnAChGoOPq0UqEPl84ZMKRAOEGH8UuHFqc01qPLXm4wg4QQIg9WBuUYNX5SyWq3SVAYiLcIBItx+4w7KlglUMuSFUy8QyRFGn2CEwusoJF0tU2KEgykQBrMj2iHintR+gy+kTAkTijkYar3bvKFDN/4qZQqBSI8w+hR6hoqHJRfdtwtEeoTB6p7hVGpLvvugvipPFwk1wjkiVHMwni28qJRF/yhkCvWCIGEUuON7jOcyDt+s8yFhwmD1DMoEhSJ/iqK/TPPENt8UCcWA4c6A8VIKiuSudIFIkTCKalf0TyuHlGmxXlImdAOGX/tRSZwXEIgkCeOv8On7dmHD0JAoHg9SpqQIxx5hFOyY0yc04EizPBMyJUXo+zDYf4YBA62jXA/H+CC1gUiTMH6D9IImqBD0Kubg0gYiTcJgtfM6GXzV1JTEbJ2QJrQDhtfR4O6bj1ITiEQJo3f7y1B4rWi/pV4ImU4IE6KDNqdSPOmH1XqdkCbcfufIaZBg3P6GHQsdiFQJo1vovF0Q4lPTkBU6EKkSBtt7hktEc8CQB23rIWnC2SP8LxSYkyYOxl2akCaMbmuUalCD4xDT5YQyoZqD8ZyPjmrMgDFcTEkTxo8cotA50vWqYsBIh3QIx6eEwRY+i8Bbl7qZn6tAJELY4kN94RRP9vj0Ql84zSekCeO3yiUW28HZFk6h1umUNKE6aANZQjE0HY6ag2VFpExoDtpQBLomTv/i5SinTRi/cDzeu7YNBo56PSFNGMQ7VP5go4hu93HRmpImlHMw2mKgi1LGl/yY0CaUB21Io9aNsCsWXwvahHIOxv22HfFt0ZcfmTGhTWjnYDTt22RqGI8JbUJz0NaYMWBxI52Z0yZU58EQg/6i36xr5sQJ9Rzssgt+oUeM3ZgE4WhyhjCKGGfM/k5Jc7pQmNOOEo60DdRv5y0X6bl3zu7u74+73e5Q14wrw5+PLbPp8WuHCA3VPMnXdzcfV3++fHq/fQqu49m2+f8bd7Zd7ffbWfB0+/7p7erx+93n59fjobawgrH+sxOEc0mWZHcPf7y8fxHt2Gw2i+M4UvaX/gJpsXjbVvDGwdP7y9X3/zzfH1jFq06oNLh6e7+WvpjFf5Xpkina7Xa/Wu2f3h5e/vbf909Y/Pex2i2KZ50A7K233nrrrbfeeuutt95666233nrrrbfeeuutt95+j/0XxlMd+fumsHIAAAAASUVORK5CYII=" aria-label="recipe">
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Netflix"
        subheader="Nov 1, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.vanityfair.com/photos/5c2cd5c13fa6927f3c5fb3ea/16:9/w_1280,c_limit/stranger-things-season-3-premiere-date-netflix.jpg"
         alt="Cars"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        the Duffer Brothers announced that season 5 will be the final chapter for Stranger Things, the sci-fi series that’s sustained global phenomenon status throughout its record-breaking run on Netflix. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />


        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
   
    </Box>
  )
}

export default Feed