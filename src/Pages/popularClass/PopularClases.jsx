import React, { useEffect, useState } from 'react';

const PopularClases = () => {
  const [data, setData] = useState([]);
    const short= data.slice(0, 6);

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
       <>
       <h1 className='text-center mt-8 font-bold text-3xl border-y-4 border-indigo-300 w-60 mx-auto'>Popular Classes</h1>
       <div className='grid md:grid-cols-3  p-6 mx-auto'>
      {
        short.map(da => <div
        key={short._id}>
        <div className="card  w-80 bg-base-100 shadow-xl mt-4">
  <figure><img src={da.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Class Name: {da.name}</h2>
    <p>Students: {da.students}</p>
   
  </div>
</div>
        
        </div>)
      }
       </div>
       
       
       </>
    );
};

export default PopularClases;