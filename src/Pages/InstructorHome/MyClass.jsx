// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
// import MyClasses from './MyClasses';

// const MyClass = () => {
//     const {user} = useContext(AuthContext);
//     const [myclass, setMyclass] = useState([])
//     console.log(user)
//    const url = `http://localhost:5000/myclass?email=${user?.email}`;
    
//    useEffect(() =>{
//     fetch(url)
//     .then(res => res.json())
//     .then(data => setMyclass(data))
//  }, [url])


//  console.log(myclass);
//     return (
//         <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
           
          
      
//               <th>Class Image</th>
//               <th>Class name</th>
//               <th>Instructor name</th>
//               <th>Available seats</th>
//               <th>Price</th>
             
              
//             </tr>
//           </thead>
//           <tbody>
     
//         {myclass.map((classItem) => <MyClasses 
//         key={classItem._id}
//         classItem ={classItem}
//         >
//         </MyClasses>
       

//         )}
//       </tbody>
      
      
          
//         </table>
//       </div>
//     );
// };

// export default MyClass;