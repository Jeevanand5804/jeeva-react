import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutePath } from "./Constant";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import SettingsIcon from "@mui/icons-material/Settings";
// import ReactToastify from "./ReactToastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactToastify from "./ReactToastify";


const Title = styled(Typography)({
  flexGrow: 1,
});
const DrawerWrapper = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "300px",
    marginTop: "69px",
  },
});
const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
});

function Header() {
 const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [settingDrawerOpen, setSettingDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  
 const functionThatReturnsPromise = () => {
   return new Promise((resolve, reject) => {
     setTimeout(reject, 2000);
   });
 };
   const notify = () => {
     toast.promise(
       functionThatReturnsPromise(),
       {
         
         pending: "Promise is pending",
         success: "Promise resolved 👌",
         error: "Not able to access 🤯",
       },
       {
         
         position: toast.POSITION.BOTTOM_RIGHT,
         autoClose: 2000,
         theme:"colored"
       }
     );
   };
  
 const handleSettingPoen = () => {
   setSettingDrawerOpen(true);
 };
 const handleSettingClose = () => {
   setSettingDrawerOpen(false);
 };
 const handleLeftDrawerOpen = () => {
   setLeftDrawerOpen(true);
 };

 const handleLeftDrawerClose = () => {
   setLeftDrawerOpen(false);
  
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    handleLeftDrawerClose();
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "blueviolet" , position:"static"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleLeftDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Title variant="h6" component="div">
            TITLE
          </Title>
          <FacebookIcon
            sx={{ color: "blue", backgroundColor: "white" }}
            onClick={() => notify(false)}
          />
          <ToastContainer/>

          <SettingsIcon
            sx={{ marginLeft: "30px", fontSize: "30px" }}
            onClick={handleSettingPoen}
          />
        </Toolbar>
      </AppBar>
      <DrawerWrapper anchor="left" open={leftDrawerOpen}>
        <DrawerHeader sx={{ backgroundColor: "blueviolet", color: "white" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MENU
          </Typography>
          <IconButton onClick={handleLeftDrawerClose} sx={{ color: "white" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Home)}
            component={NavLink}
            to={RoutePath.Home}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Home ? "violet" : "inherit",
              color: activeLink === RoutePath.Home ? "white" : "inherit",
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "blue", backgroundColor: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Profile)}
            component={NavLink}
            to={RoutePath.Profile}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Profile ? "violet" : "inherit",
              color: activeLink === RoutePath.Profile ? "white" : "inherit",
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon
                sx={{ color: "lightcoral", backgroundColor: "white" }}
              />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider sx={{ backgroundColor: "black" }} />
          <ListItem
            onClick={() => handleLinkClick(RoutePath.About)}
            component={NavLink}
            to={RoutePath.About}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.About ? "violet" : "inherit",
              color: activeLink === RoutePath.About ? "white" : "inherit",
            }}
          >
            <ListItemIcon>
              <InfoIcon sx={{ color: "blue", backgroundColor: "white" }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Orders)}
            component={NavLink}
            to={RoutePath.Orders}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Orders ? "violet" : "inherit",
              color: activeLink === RoutePath.Orders ? "white" : "inherit",
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: "orange" }} />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </DrawerWrapper>
      <DrawerWrapper
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            marginLeft: "400px",
            width: "400px",
          },
        }}
        open={settingDrawerOpen}
        onClose={handleSettingClose}
      >
        <DrawerHeader sx={{ backgroundColor: "gray" }}>
          <IconButton onClick={handleSettingClose} sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </DrawerWrapper>
      <ReactToastify />
    </div>
  );
}
export default Header;