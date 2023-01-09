import React from "react";

function EditableRow({editFormData, handleEditFormChange, handleCancelClick}) {
  return (
    <tr>
      <td>
        <input 
        value={editFormData.fullName}
        onChange={handleEditFormChange}
        name="fullName" 
        type="text" required="required" placeholder="Enter a name..." />
      </td>
      <td>
        <input 
        value={editFormData.address}
        onChange={handleEditFormChange}
        name="address" 
        type="text" required="required" placeholder="Enter an address..." />
      </td>
      <td>
        <input 
        value={editFormData.phoneNumber}
        onChange={handleEditFormChange}
        name="phoneNumber" 
        type="text" required="required" placeholder="Enter a phoneNumber..." />
      </td>
      <td>
        <input 
        value={editFormData.email}
        onChange={handleEditFormChange}
        name="email" 
        type="email" required="required" placeholder="Enter an email..." />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}

export default EditableRow;
