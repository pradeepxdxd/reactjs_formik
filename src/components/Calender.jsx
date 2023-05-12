import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/Calendar.css";
import ProperCalendar from "./ProperCalendar";



export default function Calender() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myEventsList = [
    {
      start: new Date("2023-05-15T10:00:00"),
      end: new Date("2023-05-15T12:00:00"),
      title: "Meeting",
    },
  ];
  return (
    <>
      <Button variant="primary" className="demo" onClick={handleShow}>
      <i class="fa fa-calendar" style={{fontSize:'36px'}}></i>
      </Button>
      
      <ProperCalendar show={show} handleClose={handleClose} />
    </>
  );
}
