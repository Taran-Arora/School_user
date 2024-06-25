import { Padding } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { api_url } from '../config/config';
import _fetch from '../config/api';
import { useLocation } from 'react-router-dom';

export default function FeeHistory() {

    const location = useLocation();

    const email = location?.state?.email;

    const [data, setData] = useState({ total_fee: '' });
    const [allData, setAllData] = useState([]);
    const [pendingFee, setPendingFee] = useState();
    
    const loginUser = localStorage.getItem('whologin');
    const userEmail = localStorage.getItem('useremail');

    useEffect(() => {
        geFeeData();
        if (loginUser === 'is_student') {
            getStudentFeeData();
          }
    }, []);

    const geFeeData = async () => {
        let data = await _fetch(`${api_url}studentdata/?email=${email}`, "GET", {}, {});
        if (data?.status === 200) {
           const pendingFee = data?.data[data?.data?.length - 1];
           
            setData(data?.data[0]);
            setAllData(data?.data);
            setPendingFee(pendingFee?.pending_fee);
        }
    }
    const getStudentFeeData = async () => {
        let data = await _fetch(`${api_url}studentfeedata/?student_email=${userEmail}`, "GET", {}, {});
        if (data?.status === 200 && data?.data?.length > 0) {
            
            const pendingFee = data?.data[data?.data?.length - 1];
            setData(data?.data[0]);
            setAllData(data?.data);
            setPendingFee(pendingFee?.pending_fee);
            // setAllData(data?.data);
            // setPendingFee(pendingFee?.pending_fee);
        }
    }

    return (
        <div>
            <Container fluid>
                <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>Fee History </h3>
                    </div>
                    <table className="table">
                        <tbody>
                            {/* <tr>
                                <th scope="col"> Student Name</th>
                                <th scope="col">Father Name </th>
                                <th scope="col">Total Fee</th>
                                <th scope="col">Pending Fee</th>
                                <th scope="col">Date of Submit </th>
                                <th scope="col">Last Feee Submitted  </th>
                            </tr>
                            <tr>
                                <td> Samrat</td>
                                <td> Dalip Monga </td>
                                <td> 22,000 </td>
                                <td> 8,000</td>
                                <td> 31st March </td>
                                <td> 10,000</td>

                            </tr>
                            <tr>
                                <td> Samrat</td>
                                <td> Dalip Monga </td>
                                <td> 22,000 </td>
                                <td> 8,000</td>
                                <td> 31st March </td>
                                <td> 10,000</td>

                            </tr> */}
                            <tr>
                                <th className='col'> Student Name</th>
                                <th className='col'></th>
                                <th className='col'> <p className='fee-student'> {data?.student?.name}</p></th>

                            </tr>

                            <tr style={{borderBottom:'2px solid #000 '}}>
                                {/* <th className='col'> Student Name</th> */}
                                <td className='col for-hightlight'> Total Feee</td>
                                <td className='col'>  </td>
                                <td className='col  for-hightlight'> {data?.total_fee}</td>
                            </tr>
                            {/* <tr>
                                <th className='col'> Date of Submit</th>
                                <th className='col'>31st March </th>
                            </tr> */}
                            {allData?.map((item, index) => {
                                return(
                                <tr>
                                    <td className='col'> Fee Submitted</td>
                                    <td className='col for-fee fee-date'> {item?.date} </td>
                                    <td className='col for-fee pending-fee '>{item?.Submit} </td>
                                </tr>
                                )}
                            )}
                            <tr style={{borderTop:"2px solid #000 "}}>
                                <td className='col for-hightlight'> Pending Fee</td>
                                <td className='col'>  </td>
                                <td className='col'><p className='for-highlight'>  <b>{pendingFee}</b> </p></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Container>

        </div>
    )
}


// import React, { useState } from 'react';

// const FeeReceipt = () => {
//   const [studentName, setStudentName] = useState('');
//   const [rollNo, setRollNo] = useState('');
//   const [date, setDate] = useState('');
//   const [totalFee, setTotalFee] = useState(0);
//   const [feeSubmitted, setFeeSubmitted] = useState(0);

//   const handleTotalFeeChange = (e) => {
//     setTotalFee(Number(e.target.value));
//   };

//   const handleFeeSubmittedChange = (e) => {
//     setFeeSubmitted(Number(e.target.value));
//   };

//   const pendingFee = totalFee - feeSubmitted;

//   return (
//     <>
//     <div className="fee-main">
//     <div className='fee-table-main' style={{ width: '60%', margin: '0 auto', padding: '20px', border: '1px solid black', borderRadius: '10px' }}>
//       <h2 style={{ textAlign: 'center' }}>School Fee Receipt</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           Student Name: 
//           <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} style={{ marginLeft: '10px' }} />
//         </label>
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           Roll No: 
//           <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} style={{ marginLeft: '10px'  }} />
//         </label>
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           Date: 
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginLeft: '10px' }} />
//         </label>
//       </div>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid black', padding: '10px' }}>Total Fee</th>
//             <th style={{ border: '1px solid black', padding: '10px' }}>Fee Submitted</th>
//             <th style={{ border: '1px solid black', padding: '10px' }}>Pending Fee</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ border: '1px solid black', padding: '10px' }}>
//               <input type="number" value={totalFee} onChange={handleTotalFeeChange} style={{ width: '100%' }} />
//             </td>
//             <td style={{ border: '1px solid black', padding: '10px' }}>
//               <input type="number" value={feeSubmitted} onChange={handleFeeSubmittedChange} style={{ width: '100%' }} />
//             </td>
//             <td style={{ border: '1px solid black', padding: '10px' }}>{pendingFee}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>

//     </div>

//     </>

//   );
// };

// export default FeeReceipt;


// import React, { useState } from 'react';

// const FeeReceipt = () => {
//   const [studentName, setStudentName] = useState('');
//   const [rollNo, setRollNo] = useState('');
//   const [date, setDate] = useState('');
//   const [totalFee, setTotalFee] = useState(0);
//   const [feeSubmitted, setFeeSubmitted] = useState(0);
//   const [transactions, setTransactions] = useState([]);

//   const handleTotalFeeChange = (e) => {
//     setTotalFee(Number(e.target.value));
//   };

//   const handleFeeSubmittedChange = (e) => {
//     setFeeSubmitted(Number(e.target.value));
//   };

//   const handleAddTransaction = () => {
//     const newTransaction = {
//       studentName,
//       rollNo,
//       date,
//       totalFee,
//       feeSubmitted,
//       pendingFee: totalFee - feeSubmitted,
//     };
//     setTransactions([...transactions, newTransaction]);
//     setStudentName('');
//     setRollNo('');
//     setDate('');
//     setTotalFee(0);
//     setFeeSubmitted(0);
//   };

//   return (
//     <div style={{ width: '60%', margin: '0 auto', padding: '20px', border: '1px solid black', borderRadius: '10px' }}>
//       <h2 style={{ textAlign: 'center' }}>School Fee Receipt</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           Student Name: 
//           <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} style={{ marginLeft: '10px' }} />
//         </label>
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           Roll No: 
//           <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} style={{ marginLeft: '10px' }} />
//         </label>
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           Date: 
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginLeft: '10px' }} />
//         </label>
//       </div>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid black', padding: '10px' }}>Total Fee</th>
//             <th style={{ border: '1px solid black', padding: '10px' }}>Fee Submitted</th>
//             <th style={{ border: '1px solid black', padding: '10px' }}>Pending Fee</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ border: '1px solid black', padding: '10px' }}>
//               <input type="number" value={totalFee} onChange={handleTotalFeeChange} style={{ width: '100%' }} />
//             </td>
//             <td style={{ border: '1px solid black', padding: '10px' }}>
//               <input type="number" value={feeSubmitted} onChange={handleFeeSubmittedChange} style={{ width: '100%' }} />
//             </td>
//             <td style={{ border: '1px solid black', padding: '10px' }}>{totalFee - feeSubmitted}</td>
//           </tr>
//         </tbody>
//       </table>
//       <button onClick={handleAddTransaction} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>Add Transaction</button>
      
//       {transactions.length > 0 && (
//         <div style={{ marginTop: '40px' }}>
//           <h3>Previous Transactions</h3>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th style={{ border: '1px solid black', padding: '10px' }}>Date</th>
//                 <th style={{ border: '1px solid black', padding: '10px' }}>Student Name</th>
//                 <th style={{ border: '1px solid black', padding: '10px' }}>Roll No</th>
//                 <th style={{ border: '1px solid black', padding: '10px' }}>Total Fee</th>
//                 <th style={{ border: '1px solid black', padding: '10px' }}>Fee Submitted</th>
//                 <th style={{ border: '1px solid black', padding: '10px' }}>Pending Fee</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index}>
//                   <td style={{ border: '1px solid black', padding: '10px' }}>{transaction.date}</td>
//                   <td style={{ border: '1px solid black', padding: '10px' }}>{transaction.studentName}</td>
//                   <td style={{ border: '1px solid black', padding: '10px' }}>{transaction.rollNo}</td>
//                   <td style={{ border: '1px solid black', padding: '10px' }}>{transaction.totalFee}</td>
//                   <td style={{ border: '1px solid black', padding: '10px' }}>{transaction.feeSubmitted}</td>
//                   <td style={{ border: '1px solid black', padding: '10px' }}>{transaction.pendingFee}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeeReceipt;
