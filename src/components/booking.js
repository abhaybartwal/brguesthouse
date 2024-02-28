import styles from '@/styles/booking.module.scss';
import React, { useState, useEffect } from "react";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem } from "@/sessionStorage";


const options = [
    { value: null, label: '-' },
    { value: 'delux_room', label: 'Delux Room' },
    { value: 'premium_room', label: 'Premium Room' }
];

export default function booking() {

    const [bookinfo, setBookInfo] = useState({ firstname: "", lastname: "", number: "", guests: "", premiumroom: "", deluxroom: "" });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const [avail, setAvail] = useState(false);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (window) {
            const storedValue = getSessionStorageItem('booked');
            if (storedValue != null) {
                setPopup(true);
            }
        }

    }, []);

    var sp = false;
    var sd = false;

    async function handleInput(e) {
        setBookInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    }



    async function checkAvail(e) {
        e.preventDefault();
        setSessionStorageItem("booked", true);
        // console.log(bookinfo);
        // console.log(startDate);
        // console.log(endDate);
        setPopup(true);
        await sendMessageToAdmin();
        await sendMessageToCustomer();

    }

    async function popUpClose(e) {
        setPopup(false);
    }

    async function formatDate(date) {

        var dateString = date;

        // Convert the string to a Moment.js object
        var momentDate = moment(dateString);

        // Format the date as desired
        var formattedDate = momentDate.format("DD MMMM YYYY");
        return formattedDate;
    }


    async function sendMessageToCustomer() {
        var raw = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": bookinfo.number,
            "type": "template",
            "template": {
                "name": "notify_customer_recieved_query",
                "language": {
                    "code": "en"
                }
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_WHATSAPP_KEY}`,
                "Content-Type": "application/json"
            },
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/messages`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    async function sendMessageToAdmin() {
        var checkInDate = await formatDate(startDate);
        var checkOutDate = await formatDate(endDate);

        var raw = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": "919690346654",
            "type": "template",
            "template": {
                "name": "notify_admin",
                "language": {
                    "code": "en"
                },
                "components": [
                    {
                        "type": "body",
                        "parameters": [
                            {
                                "type": "text",
                                "text": `"${bookinfo.firstname} ${bookinfo.lastname}"`
                            },
                            {
                                "type": "text",
                                "text": `"${bookinfo.number}"`
                            },
                            {
                                "type": "text",
                                "text": `"${bookinfo.deluxroom}"`
                            },
                            {
                                "type": "text",
                                "text": `"${bookinfo.premiumroom}"`
                            },
                            {
                                "type": "text",
                                "text": `"${bookinfo.guests}"`
                            },
                            {
                                "type": "text",
                                "text": `"${checkInDate}"`
                            },
                            {
                                "type": "text",
                                "text": `"${checkOutDate}"`
                            }
                        ]
                    },
                    {
                        "type": "button",
                        "sub_type": "url",
                        "index": "0",
                        "parameters": [
                            {
                                "type": "payload",
                                "payload": bookinfo.number
                            }
                        ]
                    },
                    {
                        "type": "button",
                        "sub_type": "url",
                        "index": "1",
                        "parameters": [
                            {
                                "type": "payload",
                                "payload": bookinfo.number
                            }
                        ]
                    }
                ]
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_WHATSAPP_KEY}`,
                "Content-Type": "application/json"
            },
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/messages`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }


    if (selectedOption != null) {
        for (var i = 0; i < selectedOption.length; i++) {
            if (selectedOption[i].value == "delux_room") {
                sd = true;
            }
            else if (selectedOption[i].value == "premium_room") {
                sp = true;
            }
        }
    }

    return (

        <>

            <div className={`container ${styles.bookcontainer}`}>
                <h3>Check Room Availability</h3>
                <div className={`${styles.srow} row row-cols-1 row-cols-sm-2 row-cols-md-4`}>
                    <div className={`col ${styles.snrow}`}><input type="text" className="form-control" placeholder="First name" aria-label="First name" name="firstname" onChange={(e) => handleInput(e)} /></div>
                    <div className={`col ${styles.snrow}`}><input type="text" className="form-control" placeholder="Last name" aria-label="Last name" name="lastname" onChange={(e) => handleInput(e)} /></div>
                    <div className={`col ${styles.snrow}`}><input type="text" className="form-control" placeholder="WhatsApp mobile no." aria-label="" name="number" onChange={(e) => handleInput(e)} /></div>
                    <div className={`col ${styles.snrow}`}><input type="text" className="form-control" placeholder="Number of Guests" aria-label="numb of guest" name="guests" id="numb_guest" onChange={(e) => handleInput(e)} /></div>
                </div>
                <div className={`${styles.srow} row`}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        isMulti
                        placeholder={"Please select the room category"}
                        className={"slcat"}
                    />
                </div>
                <div className={`row ${styles.srow}`}>
                    <div className={sd ? `${styles.room} delux` : `room delux ${styles.rm}`}>
                        <select className="form-select" aria-label="Please select number of rooms." name="deluxroom" onChange={(e) => handleInput(e)}>
                            <option>Please select number of Delux rooms</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                        </select>
                    </div>
                    <div className={sp ? `${styles.room} premium` : `room premium ${styles.rm}`}>
                        <select className="form-select" aria-label="Please select number of rooms." name="premiumroom" onChange={(e) => handleInput(e)}>
                            <option>Please select number of Premium rooms</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                        </select>
                    </div>
                </div>

                <div className={`row row-cols-2 ${styles.srow}`}>
                    <div className={`col`}><label htmlFor="">Check-in date</label>
                        <DatePicker selected={startDate} onChange=
                            {(date) => setStartDate(date)} /></div>
                    <div className={`lf col`}><label htmlFor="">Check-out date</label><DatePicker selected={endDate} onChange=
                        {(date) => setEndDate(date)} /></div>
                </div>

                {avail ? <div className={`${styles.btnsubmit}`}>
                    <button type="button" className="btn btn-info">Book Room</button>
                </div> : <div className={`${styles.btnsubmit}`}>
                    <button type="button" className="btn btn-info" onClick={(e) => checkAvail(e)}>Check Room Availability</button>
                </div>}

                {popup == true &&
                    <div className={`${styles.popup}`}>
                        <div className={`${styles.popupcontainer}`}>
                            <button type="button" className={`btn-close ${styles.clbtn}`} aria-label="Close" onClick={(e) => popUpClose(e)}></button>
                            <h5>We have successfully received your Request for Room Enquiry.</h5>
                            <p>Be patient with us. Our representative will contact you soon via WhatsApp during working hours. The hours of our operation are 9am to 9pm, Indian Standard Time.</p>
                        </div>
                    </div>}
            </div>

        </>
    )
}