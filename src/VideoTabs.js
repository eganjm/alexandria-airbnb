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
  //const [showScrollButtons, setShowScrollButtons] = useState(false);
  const tabsContainerRef = useRef(null);

 /* useEffect(() => {
    const container = tabsContainerRef.current;
    setShowScrollButtons(container.scrollWidth > container.clientWidth);
  }, []);*/

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
        <IconButton className="scroll-button left" onClick={() => scrollTabs('left')}>
        </IconButton>
        <div className="tabs-container" ref={tabsContainerRef}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="video tabs"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        >
        <Tab label="Cable On" />
        <Tab label="TV Guide" />
        <Tab label="Other" />
        <Tab label="On-Demand" />
        <Tab label="Streaming-to-Cable" />
      </Tabs>
      </div>
    
      <IconButton className="scroll-button right" onClick={() => scrollTabs('right')}>
        </IconButton>

        </div>
      <TabPanel value={value} index={0}>
        <i>Once you hit top right button, it can take 10+ seconds to bring up cable.</i><br />
        <video className="video" width="35%" controls>
          <source src="vids/Watch cable .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <video className="video" width="35%" controls>
          <source src="vids/TV guide .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="video" width="35%" controls>
          <source src="vids/Channels.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <video className="video" width="35%" controls>
          <source src="vids/Info button .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="video" width="35%" controls>
          <source src="vids/Last channel .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <video className="video" width="35%" controls>
          <source src="vids/On demand .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <video className="video" width="35%" controls>
          <source src="vids/Switch to cable .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>
    </Box>
    
  );
}

export default VideoTabs;