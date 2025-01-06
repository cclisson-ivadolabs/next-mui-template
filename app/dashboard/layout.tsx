"use client";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from "next/navigation";

type Props = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
    const [open, setOpen] = useState(true);
    const router = useRouter();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="flex-1 flex flex-col">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className="flex-1 flex">
                <div className="w-64">
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Nested List Items
                            </ListSubheader>
                        }
                    >
                        <ListItemButton onClick={() => router.push("/dashboard/emails")}>
                            <ListItemIcon>
                                <SendIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Sent mail"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Inbox"/>
                            {open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText primary="Starred"/>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </div>
                <div className="flex-1 flex flex-col h-full bg-gray-100">
                    {children}
                </div>
            </div>
        </div>
    )
}