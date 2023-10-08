import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { cookies } from "next/headers";
import Image from "next/image";
import styles from './styles.module.css'


export const metadata = {
  title: "ChatUAndMe",
  description: "Digital Tools to help facilitate real conversation",
};
const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Favorites", href: "/starred", icon: StarIcon },
  { text: "About", href: "/about", icon: InfoIcon },
];

const LOGOUT_LINK = {
  text: "Logout",
  href: "/api/auth/logout",
  icon: LogoutIcon,
};
const LOGIN_LINK = { text: "Login", href: "/api/auth/login", icon: LoginIcon };
const getAuthLinks = () => {
  const cookieStore = cookies();
  if (cookieStore.get("appSession"))
    return (
      <List>
        <ListItemButton component={Link} href={LOGOUT_LINK.href}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={LOGOUT_LINK.text} />
        </ListItemButton>
      </List>
    );
  if (!cookieStore.get("appSession"))
    return (
      <List>
        <ListItemButton component={Link} href={LOGIN_LINK.href}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={LOGIN_LINK.text} />
        </ListItemButton>
      </List>
    );
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={styles.body}>
          <ThemeRegistry>
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
              <Toolbar sx={{ backgroundColor: "background.paper" }}>
                <Typography variant="h6" noWrap component="div" color="black">
                  <Image src="/logo.png" width={64} height={48} alt="logo" />
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: DRAWER_WIDTH,
                  boxSizing: "border-box",
                  top: ["48px", "56px", "64px"],
                  height: "auto",
                  bottom: 0,
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <Divider />

              <List>
                {LINKS.map(({ text, href, icon: Icon }) => (
                  <ListItem key={href} disablePadding>
                    <ListItemButton component={Link} href={href}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ mt: "auto" }} />
              {getAuthLinks()}
            </Drawer>
            <Box
              component=""
              sx={{
                flexGrow: 1,
                bgcolor: "background.default",
                ml: `${DRAWER_WIDTH}px`,
                mt: ["48px", "56px", "64px"],
                p: 3,
              }}
            >
              {children}
            </Box>
          </ThemeRegistry>
        </body>
      </UserProvider>
    </html>
  );
}
