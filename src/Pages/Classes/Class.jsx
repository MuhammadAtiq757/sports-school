import React from 'react';

const Class = ({da}) => {
    return (
        <div>
            {
        da.status==="approved" ?
       
        
        <div className="card  w-80 bg-base-100 shadow-xl mt-4">
  <figure><img src={da.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Class Name: {da.name}</h2>
    <p>Students: {da.students}</p>
   
  </div>
</div>
       
      :
      undefined

      }
        </div>
    );
};

export default Class;