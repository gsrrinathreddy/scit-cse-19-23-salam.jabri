import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { fontSize, style } from '@mui/system';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', p: 4}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.university.youth4work.com%2Fscits_sree-chaitanya-institute-of-technological-sciences&psig=AOvVaw0se-3hggcwwxItWxQM8RZO&ust=1679926763302000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjnmILl-f0CFQAAAAAdAAAAABAM" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences, (Karimnagar)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}} 
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.0 CGPA<br/>
                2019-2023
              </Typography><br/>
              
              {" B.Tech (Computer Science and Engineering)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://stock.adobe.com/images/portrait-of-a-girl-standing-in-the-school-corridor/166744038" />
        </ListItemAvatar>
        <ListItemText
          primary="Sr Junior College, (Karimnagar)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% <br/>
                2017-2019
              </Typography><br/>
              {"Intermediate (MPC)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jyothi High School, (Jagtial)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.7 CGPA<br/>
                2017
              </Typography><br/>
              {'SSC'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
        }
