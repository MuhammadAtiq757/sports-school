import React from 'react';

const AdminClass = ({classItem}) => {
    console.log(classItem);
    return (
        <tr>
            <td><img src={classItem.image}  alt="" /></td>
            <td>{classItem.name}</td>
            
       
        <td>{classItem.instructorName}</td>
        <td>{classItem.instructorEmail}</td>
        <td>{classItem.availableSeats}</td>
        <td>{classItem.price}</td>
        <td>{classItem.status}</td>
        <td>

       <button className='btn  btn-xs'>Approve</button>
       <button className='btn  btn-xs'>Deny</button>
       <button className='btn  btn-xs'>Feedback</button>

        </td>
      </tr>
    );
};

export default AdminClass;