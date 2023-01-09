import React, { useState, Fragment } from "react";
import data from "../mock-data.json";
import {nanoid} from 'nanoid'
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
export default function Table() {
  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData]=useState({
    fullName : "",
    address : "",
    phoneNumber : "",
    email : ""
  })

  const [editFormData, setEditFormData]=useState({
    fullName : "",
    address : "",
    phoneNumber : "",
    email : ""
  })

  //EDIT
  const [editContactId, setEditContactId]=useState(null)

  const handleAddFormChange = (e)=>{
    e.preventDefault()

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value

    const newFormData = {...addFormData}
    newFormData[fieldName]=fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (e)=>{
    e.preventDefault()

    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value

    const newFormData = {...editFormData}
    newFormData[fieldName]= fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit= (e)=>{
    e.preventDefault()

    const newContact = {
      id : nanoid(),
      fullName : addFormData.fullName,
      address : addFormData.address,
      phoneNumber : addFormData.phoneNumber,
      email : addFormData.email
    }

    const newContacts  = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditFormSubmit = (e)=>{
    e.preventDefault()

    const editedContact = {
      id : editContactId,
      fullName : editFormData.fullName,
      address : editFormData.address,
      phoneNumber : editFormData.phoneNumber,
      email : editFormData.email
    }
    const newContacts = [...contacts]
    const index = contacts.findIndex((contact)=>contact.id===editContactId)

    newContacts[index]=editedContact
    setContacts(newContacts)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact)=>{
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      fullName : contact.fullName,
      address : contact.address,
      phoneNumber : contact.phoneNumber,
      email : contact.email
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = ()=>{
    setEditContactId(null)
  }

  const handleDeleteClick = (ContactId)=>{
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact)=>contact.id ===ContactId)
    
    newContacts.splice(index, 1)
    setContacts(newContacts)
  }
  return (
    <div>
      <div>
        <div class="border-x p-6 border-t overflow-x-auto">
          <h1 className="mb-6 uppercase">Halaman Table</h1>
          {/* ketambahan form */}
          <form action="" onSubmit={handleEditFormSubmit}>
          <table class="table-auto">
            <thead class="border-b">
              <tr class="bg-gray-100">
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody class="">
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId===contact.id 
                  ? (<EditableRow 
                    editFormData={editFormData} 
                    handleEditFormChange={handleEditFormChange} 
                    handleCancelClick={handleCancelClick}
                    />) 
                  : (<ReadOnlyRow 
                  contact={contact} 
                  handleEditClick = {handleEditClick}
                  handleDeleteClick= {handleDeleteClick}
                  />)}
                </Fragment>
              ))}
            </tbody>
          </table>
          </form>

          {/* tambah kontak  */}
          <h2 className="mt-10 uppercase mb-3">Add a contact</h2>
          <form action="" onSubmit={handleAddFormSubmit}>


            <input 
            onChange={handleAddFormChange}
            type="text" name="fullName" required="required"
            placeholder="Enter a name..." />
            
            <input 
            onChange={handleAddFormChange}
            type="text" name="address" required="required"
            placeholder="Enter an address..." />
            
            <input 
            onChange={handleAddFormChange}
            type="text" name="phoneNumber" required="required"
            placeholder="Enter a phone number..." />
            
            <input 
            onChange={handleAddFormChange}
            type="email" name="email" required="required"
            placeholder="Enter a email..." /> 

            <br/>
            <button type="submit" className="bg-blue-500 px-6 mt-3 text-white rounded">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
