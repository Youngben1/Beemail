import React from 'react';
import { Button, IconButton } from "@material-ui/core";
import NearMeIcon from "@material-ui/icons/NearMe";
import AddIcon from "@material-ui/icons/Add";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useDispatch } from "react-redux";
import { openSendMessage } from '../../features/mailSlice';
import { SidebarOption } from "../index";
import './Sidebar.css';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar_compose" onClick={() => dispatch(openSendMessage())} >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={50} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={10} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={10} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={10} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={10} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={10} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={10} />

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar