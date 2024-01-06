import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DoneIcon from "@mui/icons-material/Done";
import CustomLink from './CustomLink'

const Sidebar = ({ handleLogout, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sidebar">
      {/* we can use many types of thing to link these sideoptions to their respective pages like link, customlink, navlink  */}

      <TwitterIcon className="sidebar_twitterIcon" />
      <CustomLink to="/home/feed">
        <SidebarOptions acive Icon={HomeIcon} text="Home" />
      </CustomLink>
      <CustomLink to="/home/explore">
        <SidebarOptions acive Icon={SearchIcon} text="Explore" />
      </CustomLink>
      <CustomLink to="/home/notification">
        <SidebarOptions acive Icon={NotificationIcon} text="Notification" />
      </CustomLink>
      <CustomLink to="/home/messages">
        <SidebarOptions acive Icon={MailOutlineIcon} text="Message" />
      </CustomLink>
      <CustomLink to="/home/bookmark">
        <SidebarOptions acive Icon={BookmarkBorderIcon} text="Bookmarks" />
      </CustomLink>
      <CustomLink to="/home/lists">
        <SidebarOptions acive Icon={ListAltIcon} text="Lists" />
      </CustomLink>
      <CustomLink to="/home/profile">
        <SidebarOptions acive Icon={PermIdentityIcon} text="Profile" />
      </CustomLink>
      <CustomLink to="/home/more">
        <SidebarOptions acive Icon={MoreIcon} text="more" />
      </CustomLink>

      <Button variant="outlined" className="sidebar_tweet">
        Tweet
      </Button>

      <div className="Profile_info">
        <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
        <div className="user_info">
          <h4> Sharon Rosario </h4>
          <h5> @sharon_r </h5>
        </div>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "baisc-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClick={handleClose}
          onClose={handleClose}
        >
          <MenuItem className="Profile_info">
            <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
            <div className="user_info subUser_info">
              <div>
                <h4> Sharon Rosario </h4>
                <h5> @sharon_r </h5>
              </div>
              <ListItemIcon className="done_icon">
                {" "}
                <DoneIcon />
              </ListItemIcon>
            </div>
          </MenuItem>

          <Divider />
          <MenuItem onClick={handleClose}> Add an existing account </MenuItem>
          <MenuItem onClick={handleLogout}> Log out @sharon</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
