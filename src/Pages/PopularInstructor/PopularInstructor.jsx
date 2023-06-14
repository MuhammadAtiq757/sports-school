import React, { useEffect, useState } from 'react';

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);
  const short= instructor.slice(0, 6);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://school-academy-server-muhammadatiq757.vercel.app/popular')
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
      <h1 className='text-center mt-8 font-bold text-3xl border-y-4 border-indigo-300 w-60 mx-auto'>Popular Instructor</h1>
      <div className='grid md:grid-cols-3 mx-6 p-6 mx-auto'>
        {
          short.map(da => <div
            key={da._id}>
            <div className="card   w-80 bg-base-100 shadow-xl mt-4">
              <figure><img src={da.
                insImg
              } className='rounded' alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Instructor Name: {da.instructorName}</h2>


              </div>
            </div>

          </div>)
        }
      </div>


    </>
  );
};

export default PopularInstructor;