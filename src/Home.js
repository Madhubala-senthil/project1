import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetDataRequest } from './Action';
 

 
const Home = () => {
    

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const error = useSelector((state) => state.error);

  return (
    <>
    <div>
       <button onClick={() => dispatch(fetDataRequest())}>
        fetch Data
       </button>
    </div>
    {data ? (
                    <div className="data">
                         <table>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Website</th>
                                </tr>   
                            </thead>
                            <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address.street},
                                    {item.address.suite},
                                    {item.address.city}.
                                    </td>
                                    <td>{item.website}</td>
                                </tr>
                            ))}
                            </tbody>
                         </table>
                    </div>
                ) : (
                    <div className="loading">
                        {error
                            ? `Error: ${error}`
                            : "Loading data..."}
                    </div>
                )}
    </>
  )
}

export default Home;
