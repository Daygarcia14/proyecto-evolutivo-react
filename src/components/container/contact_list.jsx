import React from 'react'
import ContactComponent from '../../components/pure/forms/contact'
import {Contact} from '../../models/contact.class'

const contact_list = () => {

    const defaultContact = new Contact('Dayanna', 'Garcia', 'daygarcia@gmail.com', false)
  return (
    <div>
      <div>
        Your Contacts:
      </div>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  )
}


export default contact_list