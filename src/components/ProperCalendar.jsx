import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Modal } from "react-bootstrap";

const localizer = momentLocalizer(moment);

export default function ProperCalendar({ show, handleClose }) {
    const myEventsList = [
        {
            start: new Date("2023-05-15T10:00:00"),
            end: new Date("2023-05-15T12:00:00"),
            title: "Meeting",
        },
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Calendar
                        localizer={localizer}
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 300 }}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}
