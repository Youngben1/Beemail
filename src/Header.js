import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
import { auth }  from "./firebase"

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    const signOut = () =>{
        auth.signOut().then(() =>{
            dispatch(logout());
        });
    };

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src="data:image/png;base64,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" alt="" />
            </div>

            <div className="header_middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header_inputCaret" />
            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
