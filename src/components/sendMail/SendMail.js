import React from 'react';
import { CloseIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from '../../firebase';
import firebase from "firebase";
import "./SendMail.css";

function SendMail() {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    };

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="email" {...register("text", {required: true})} />
                {errors && <p className="sendMail_error">To is Required</p> }

                <input name="subject" placeholder="Subject" type="text" {...register("text", {required: true})} />
                {errors && <p className="sendMail_error">Subject is Required</p> }

                <input name="message" placeholder="Message..." type="text" className="sendMail_message" {...register("text", {required: true})} />
                {errors && <p className="sendMail_error">Message is Required</p> }

                    <div className="sendMail_options">
                        <Button
                            className="sendMail_send"
                            variant="contained"
                            color="primary"
                            type="submit"    
                            >Send
                        </Button>
                    </div>
            </form>
        </div>
    )
}

export default SendMail
