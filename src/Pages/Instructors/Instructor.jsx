import React, { useEffect, useState } from 'react';

const Instructor = () => {

  const [instructor, setInstructor] = useState([]);

console.log(instructor);

    useEffect(() => {
      const fetchData = () => {
        fetch('http://localhost:5000/popularins')
          .then(response => response.json())
          .then(jsonData => setInstructor(jsonData))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
  
      fetchData();
    }, []);


  return (
    <>
   
    <div className='grid md:grid-cols-3 mx-6 p-6 mx-auto'>
   {
    instructor.map(da => <div
     key={da._id}>
     <div className="card   w-80 bg-base-100 shadow-xl mt-4">
<figure><img src={da.img} className='rounded h-80' alt="Shoes" /></figure>
<div className="card-body h-52">
 <h2 className="card-title">Instructor: {da.instructorName}</h2>
 <h2 className="card-title">Email: {da.instructorEmail}</h2>


</div>
</div>
     
     </div>)
   }
    </div>
    
    
    </>
  );
};

export default Instructor;