import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Sidebar from './Sidebar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";


const MainNavigation = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarStatus(!sidebarStatus);
  };
  useEffect(() => {
    setSidebarStatus(false);
  }, []);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          Splendours
        </Link>
      </div>
      <nav onClick={handleSidebarToggle}>
      {!sidebarStatus ? 
              <IconButton >
                <MenuIcon fontsize='large'
                style={{ color: 'white' }} />
              </IconButton>
            :
              <IconButton>
                <CloseIcon  fontsize='large'
                style={{ color: 'white' }} />
                <Sidebar />
              </IconButton>
            }
      </nav>
    </header>
  );
};

export default MainNavigation;
