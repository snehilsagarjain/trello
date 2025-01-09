import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal from "react-modal"; // Importing react-modal

// Create a localizer for the calendar
const localizer = momentLocalizer(moment);

const Calender5 = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    // Open the modal and set the selected time
    setSelectedSlot({ start, end });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveEvent = () => {
    // Save event logic
    console.log('Event saved from', selectedSlot.start, 'to', selectedSlot.end);
    setShowModal(false);
  };

  return (
    <div>
      {/* Calendar component */}
      <Calendar
        localizer={localizer}
        events={[]}
        onSelectSlot={handleSelectSlot}
        selectable
        views={['month', 'week', 'day']}
        defaultView="week"
      />

      {/* Modal Component */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Select Time Slot"
        style={{border:'1px solid red'}}
      >
        <h2>New Event</h2>
        <p>Start: {selectedSlot ? selectedSlot.start.toString() : ''}</p>
        <p>End: {selectedSlot ? selectedSlot.end.toString() : ''}</p>

        <button onClick={handleSaveEvent}>Save Event</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default Calender5;
