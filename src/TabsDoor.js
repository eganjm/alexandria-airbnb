import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './VideoTabs.css';
import { IconButton } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function VideoTabs() {
  const [value, setValue] = useState(0);
  const tabsContainerRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollTabs = (direction) => {
    const container = tabsContainerRef.current;
    const scrollAmount = 100;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
    <div className="scroll-buttons-container">
        <IconButton className="scroll-button left" onClick={() => scrollTabs('left')}></IconButton>
        <div className="tabs-container" ref={tabsContainerRef}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="video tabs"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            >
            <Tab label="Unlock door (pic)" />
            <Tab label="Unlock door (video)" />
          </Tabs>
      </div>
    
      <IconButton className="scroll-button right" onClick={() => scrollTabs('right')}>
        </IconButton>

    </div>
      <TabPanel value={value} index={0}>
        <img src='images/smartlock.png' style={{width: '35%',height:'auto'}}></img>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <video className="video" width="100%" controls style={{width: '35%',height:'auto'}}>
          <source src="vids/door-combo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>
    </Box>
  );
}

export default VideoTabs;