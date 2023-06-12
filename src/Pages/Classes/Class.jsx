import React from 'react';

const Class = ({ da }) => {
  console.log(da);
  
  if (da.role !== 'approved') {
    return null; // Don't render anything if the role is not approved
  }

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl mt-4">
        <figure><img src={da.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Class Name: {da.className}</h2>
          <p>Students: {da.students}</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
