import React from "react";

function ReadOnlyRow({contact, handleEditClick, handleDeleteClick}) {
  return (
    <tr class="border-b hover:bg-gray-100">
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button 
        onClick={(event)=>handleEditClick(event, contact )}
        type="button">Edit</button>
        <button type="button" onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;
