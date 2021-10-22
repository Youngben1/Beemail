import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Section, EmailRow } from "../index";
import { db } from "../../firebase";
import "./EmailList.css";


function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))) )
    }, [])


    return (
        <div className="emailList">
           <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="orange" selected />
                <Section Icon={PeopleIcon} title="Social" color="black" selected />
                <Section Icon={LocalOfferIcon} title="Promoted" color="orange" selected />
            </div>

            <div className="emailList_List">
                {emails.map(({id, data: { to, subject, message, timestamp }}) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
                <EmailRow
                    title="Twitter"
                    subject="Hey I need to be verified"
                    description="Testicles 1,2"
                    time="11pm"
                />
                <EmailRow
                    title="Twitter"
                    subject="Hey I need to be verified"
                    description="Testicles 1,2"
                    time="11pm"
                />
            </div>
        </div>
    )
}

export default EmailList
