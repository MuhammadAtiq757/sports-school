import React, { useEffect, useState } from 'react';
import Class from './class';
import './classes.css'

const Classes = () => {
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
        <div className='test'> 
    
      
      {
        data.map(da => <Class key={da._id}
        da={da}
        
        ></Class>
       
        
       )
      }
   
       
       
       </div>
    );
};

export default Classes;