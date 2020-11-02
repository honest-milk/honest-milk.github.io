import React from 'react';
import constants from '../constants';
import whatsapp from '../assets/img/icons/common/whatsapp-logo.webp';

function ContactMenu() {
  return (
    <div 
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      }}
      className="floating"
      id="contact-menu"
    >
      <div className="mb-1 menu" style={{display: 'flex', flexDirection: 'column'}}>
        
        <a href={`#faq`}>
          <div className="icon icon-lg icon-shape rounded-circle bg-primary mb-1">
            <div style={{color: 'white'}}>FAQ</div>
          </div>
        </a>
        <a href={`mailto:${constants.email}`} target="_blank" rel="noopener noreferrer">
          <div className="icon icon-lg icon-shape rounded-circle bg-primary mb-1">
            <i className="ni ni-email-83 text-white" />
          </div>
        </a>

        <a href={`tel:${constants.phone}`}>
          <div className="icon icon-lg icon-shape rounded-circle bg-primary mb-1">
            <i className="fa fa-phone text-white" />
          </div>
        </a>
        <a href={`https://wa.me/${constants.phone}?text=${constants.message}`} target="_blank" rel="noopener noreferrer">
          <div className="icon icon-lg icon-shape rounded-circle bg-primary">
            {/* <i className="fa fa-whatsapp text-white" /> */}
            <img src={whatsapp} alt="whatsapp" width="36px" />
          </div>
        </a>
      </div>

      <div className="icon icon-lg icon-shape shadow rounded-circle bg-primary">
        <i className="ni ni-chat-round text-white" />
      </div>
    </div>
  )
}

export default ContactMenu;