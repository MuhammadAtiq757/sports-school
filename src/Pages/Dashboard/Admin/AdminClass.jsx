import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './AdminClasses.css'
const modifiedCount =1 ;

const AdminClass = ({ classItem }) => {
  console.log(classItem);

  const handleApprove = (classItem) => {

    axios.patch(`http://localhost:5000/users/approve/${classItem._id}`)
      .then(response => {
        console.log(response.data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  

  
};

  return (
    <tr>
      <td><img src={classItem.image} alt="" /></td>
      <td>{classItem.name}</td>
      <td>{classItem.instructorName}</td>
      <td>{classItem.instructorEmail}</td>
      <td>{classItem.availableSeats}</td>
      <td>{classItem.price}</td>
      <td>
        <button>
          {classItem.status == 'approved' ? 'approved' :
            classItem.status == 'denied' ? 'denied' :
              'pending'}
        </button>
       
      </td>
      <td>
        {/* <button onClick={() => handleApprove(classItem)} className='btn btn-xs'>Approve</button>
        <button className='btn btn-xs'>Deny</button> */}
        <button onClick={() => handleApprove(classItem)} className= {`btn btn-xs ${modifiedCount === 1 ? 'btn-green' : ''}`}>
  Approve
</button>
<button className='btn btn-xs'>Deny</button>

      </td>
    </tr>
  );
};

export default AdminClass;
