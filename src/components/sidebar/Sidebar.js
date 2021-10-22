import React from 'react';
import { Button, IconButton } from "@material-ui/core";
import { AddIcon, InboxIcon, StarIcon, LabelImportantIcon, NearMeIcon, NoteIcon, ExpandMoreIcon, PersonIcon, DuoIcon, PhoneIcon } from "@material-ui/icons";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useDispatch } from "react-redux";
import { openSendMessage } from '../../features/mailSlice';
import SidebarOption from "../index";
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