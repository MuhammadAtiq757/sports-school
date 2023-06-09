import React, { useEffect, useState } from 'react';
import AdminClass from './AdminClass';


const AdminClasses = () => {

  const [data, setData] = useState([]);
  

  useEffect(() => {

    const fetchData = () => {
      fetch('http://localhost:5000/popular')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);




    return (
        <div>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}

        <th>Class Image</th>
        <th>Class name</th>
        <th>Instructor name</th>
        <th>Instructor email</th>
        <th>Available seats</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
  {data.map((classItem) => <AdminClass
  key={classItem._id}
  classItem ={classItem}
  >


  </AdminClass>)}
</tbody>


    
  </table>
</div>


        </div>
    );
};

export default AdminClasses;