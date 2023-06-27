import {useState} from "react";
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
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const Main = styled("main")(({ leftDrawerOpen}) => ({
  flexGrow: 1,
  padding: "20px",
  marginLeft: leftDrawerOpen ? "300px" : "0", // Adjusting the margin based on the leftDrawerOpen state
  transition: "margin 0.2s",
}));
const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
});
const Title = styled(Typography)({
  flexGrow: 1,
});
const DrawerWrapper = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "300px",
    marginTop:"69px"
  },
});


function DrawerMui() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
   const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
   const [aboutDrawerOpen, setAboutDrawerOpen] = useState(false);
   const [ordersDrawerOpen, setOrdersDrawerOpen] = useState(false);
  const [homeDrawerOpen, setHomeDrawerOpen] = useState(false);
  const [settingDrawerOpen, setSettingDrawerOpen] = useState(false);
  const handleSettingPoen = () => {
    setSettingDrawerOpen(true);
  }
  const handleSettingClose = () => {
    setSettingDrawerOpen(false);
  }
   const handleLeftDrawerOpen = () => {
     setLeftDrawerOpen(true);
  };

   const handleLeftDrawerClose = () => {
     setLeftDrawerOpen(false);
  };

   const handleProfileDrawerOpen = () => {
     setProfileDrawerOpen(true);
   };

   const handleProfileDrawerClose = () => {
     setProfileDrawerOpen(false);
   };
  const handleAboutDrawerOpen = () => {
    setAboutDrawerOpen(true);
  };

  const handleAboutDrawerClose = () => {
    setAboutDrawerOpen(false);
  };

  const handleOrdersDrawerOpen = () => {
    setOrdersDrawerOpen(true);
  };

  const handleOrdersDrawerClose = () => {
    setOrdersDrawerOpen(false);
  };

   return (
     <div position="static">
       <AppBar sx={{ backgroundColor: "blueviolet" }}>
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
             Home Page
           </Title>
           <FacebookIcon sx={{ color: "blue", backgroundColor: "white" }} />
           <SettingsIcon
             sx={{ marginLeft: "30px", fontSize: "30px" }}
             onClick={handleSettingPoen}
           />
         </Toolbar>
       </AppBar>
       <Main
         sx={{ height: "80vh", marginTop: "75px" }}
         leftDrawerOpen={leftDrawerOpen}

       >
         <Typography variant="h4" component="h1" gutterBottom>
           Welcome to the Home Page
         </Typography>
       </Main>
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
           <ListItem onClick={handleLeftDrawerClose}>
             <ListItemIcon>
               <HomeIcon sx={{ color: "blue" }} />
             </ListItemIcon>
             <ListItemText primary="Home" />
           </ListItem>
           <ListItem onClick={handleProfileDrawerOpen}>
             <ListItemIcon>
               <AccountCircleIcon sx={{ color: "lightcoral" }} />
             </ListItemIcon>
             <ListItemText primary="Profile" />
           </ListItem>
           <Divider />
           <ListItem onClick={handleAboutDrawerOpen}>
             <ListItemIcon>
               <InfoIcon sx={{ color: "blue" }} />
             </ListItemIcon>
             <ListItemText primary="About" />
           </ListItem>
           <ListItem onClick={handleOrdersDrawerOpen}>
             <ListItemIcon>
               <ShoppingCartIcon sx={{ color: "orange" }} />
             </ListItemIcon>
             <ListItemText primary="Orders" />
           </ListItem>
         </List>
       </DrawerWrapper>
       <DrawerWrapper
         anchor="right"
         open={profileDrawerOpen}
         onClose={handleProfileDrawerClose}
       >
         <DrawerHeader sx={{ backgroundColor: "lightcoral" }}>
           <IconButton
             onClick={handleProfileDrawerClose}
             sx={{ color: "white" }}
           >
             <ArrowBackIcon />
           </IconButton>
         </DrawerHeader>
         <List>
           <ListItem>
             <ListItemIcon></ListItemIcon>
             <ListItemText primary="Profile  " />
           </ListItem>
         </List>
       </DrawerWrapper>
       <DrawerWrapper
         anchor="right"
         open={aboutDrawerOpen}
         onClose={handleAboutDrawerClose}
       >
         <DrawerHeader sx={{ backgroundColor: "lightblue" }}>
           <IconButton onClick={handleAboutDrawerClose} sx={{ color: "blue" }}>
             <ArrowBackIcon />
           </IconButton>
         </DrawerHeader>
         <List>
           <ListItem>
             <ListItemIcon></ListItemIcon>
             <ListItemText primary="About  " />
           </ListItem>
         </List>
       </DrawerWrapper>
       <DrawerWrapper
         anchor="bottom"
         sx={{
           "& .MuiDrawer-paper": {
             marginLeft: "400px",
             width: "700px",
             height: "650px",
           },
         }}
         open={ordersDrawerOpen}
         onClose={handleOrdersDrawerClose}
       >
         <DrawerHeader sx={{ backgroundColor: "orange" }}>
           <IconButton
             onClick={handleOrdersDrawerClose}
             sx={{ color: "white" }}
           >
             <ArrowBackIcon />
           </IconButton>
         </DrawerHeader>
         <List>
           <ListItem>
             <ListItemIcon></ListItemIcon>
             <ListItemText primary="Orders " />
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
             <ListItemIcon></ListItemIcon>
             <ListItemText primary="Settings" />
           </ListItem>
         </List>
       </DrawerWrapper>
     </div>
   );
}
export default DrawerMui;
