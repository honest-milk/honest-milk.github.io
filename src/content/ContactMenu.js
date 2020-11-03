import React, { useState } from 'react';
import constants from '../constants';
import whatsapp from '../assets/img/icons/common/whatsapp-logo.webp';
import email from '../assets/img/icons/common/gmail-512.webp';
import {
  Modal,
  ModalHeader, ModalBody,
} from "reactstrap";

function ContactMenu() {
  let [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  }
  return (
    <div 
      className="floating"
      id="contact-menu"
    >
      <Modal
        isOpen={open}
        title="Phone"
        toggle={toggleOpen}
      >
        <ModalHeader toggle={toggleOpen}>Phone</ModalHeader>
        <ModalBody>
          <i className="fa fa-phone text-default" /> {constants.phone}
        </ModalBody>
      </Modal>
      <div className="mb-1 menu" style={{display: 'flex', flexDirection: 'column'}}>
        
        <a href={`#faq`}>
          <div className="icon icon-lg icon-shape rounded-circle contact-menu-bubble mb-1">
            <div style={{color: 'white'}}>FAQ</div>
          </div>
        </a>
        <a href={`mailto:${constants.email}`} target="_blank" rel="noopener noreferrer">
          <div className="icon icon-lg icon-shape rounded-circle contact-menu-bubble mb-1">
            {/* <i className="ni ni-email-83 text-white" /> */}
            <img src={email} alt="email" width="36px" />
          </div>
        </a>

        <a href={`tel:${constants.phone}`} onClick={toggleOpen}>
          <div className="icon icon-lg icon-shape rounded-circle contact-menu-bubble mb-1">
            <i className="fa fa-phone text-white" />
          </div>
        </a>
        <a href={`https://wa.me/${constants.phone}?text=${constants.message}`} target="_blank" rel="noopener noreferrer">
          <div className="icon icon-lg icon-shape rounded-circle contact-menu-bubble">
            {/* <i className="fa fa-whatsapp text-white" /> */}
            <img src={whatsapp} alt="whatsapp" width="36px" />
          </div>
        </a>
      </div>

      <div className="icon icon-lg icon-shape shadow rounded-circle contact-menu-bubble">
        <i className="ni ni-chat-round text-white" />
      </div>
    </div>
  )
}

export default ContactMenu;