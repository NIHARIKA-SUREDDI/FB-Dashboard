import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faRotateRight, faCircleInfo ,faUser} from '@fortawesome/free-solid-svg-icons';
import products from './constants/products.json';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import  { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField  from '@mui/material/TextField';
  
// function BasicSelect({ age, handleChange }) {
//   return (
//     <Box sx={{ minWidth: 150 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">State</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Todo</MenuItem>
//           <MenuItem value={20}>Nurture</MenuItem>
//           <MenuItem value={30}>Disqualified</MenuItem>
//           <MenuItem value={30}>Inactive</MenuItem>
//           <MenuItem value={30}>Upsell</MenuItem>
//           <MenuItem value={30}>Won</MenuItem>
//           <MenuItem value={30}>PaymentMissing</MenuItem>

//         </Select>
          
 
//       </FormControl>
//     </Box>

//   );
// }

// function BasicSelect1({ age1, handleChange }) {
//   return (
//     <Box sx={{ minWidth: 150 ,backgroundColor:'white'}}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Quality </InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age1}
//           label="Age"
//           onChange={handleChange}
          
//         >
//           <MenuItem value={10}>Unsure</MenuItem>
//           <MenuItem value={20}>Prem</MenuItem>
//           <MenuItem value={30}>prof</MenuItem>
//           <MenuItem value={30}>Team</MenuItem>
//           <MenuItem value={30}>Spam</MenuItem>
          
//         </Select>
          
//       </FormControl>
//     </Box>

//   );
// }

// function BasicSelect2({ age2, handleChange }) {
//   return (
//     <Box sx={{ minWidth: 150 , backgroundColor:"white" }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Funnel Stage</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age2}
//           label="Age"
//           onChange={handleChange}
          
        
//         >
//           <MenuItem value={10}>ToFu</MenuItem>
//           <MenuItem value={20}>MoFu</MenuItem>
//           <MenuItem value={30}>BoFu</MenuItem>
//           <MenuItem value={30}>Closed</MenuItem>
//           <MenuItem value={30}>InActive</MenuItem>

          
        
          
//         </Select>
          
//       </FormControl>    </Box>

//   );
//  }








function BasicSelect({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="State"
          onChange={handleChange}
          sx={{ backgroundColor: 'white', height: '55px', fontSize: '14px' }}
        >
          <MenuItem value={10}>Todo</MenuItem>
          <MenuItem value={20}>Nurture</MenuItem>
          <MenuItem value={30}>Disqualified</MenuItem>
          <MenuItem value={40}>Inactive</MenuItem>
          <MenuItem value={50}>Upsell</MenuItem>
          <MenuItem value={60}>Won</MenuItem>
          <MenuItem value={70}>Payment Missing</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function BasicSelect1({ age1, handleChange }) {
  return (
    <Box sx={{ minWidth: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age1}
          label="Quality"
          onChange={handleChange}
          sx={{ backgroundColor: 'white', height: '55px', fontSize: '14px' }}
        >
          <MenuItem value={10}>Unsure</MenuItem>
          <MenuItem value={20}>Prem</MenuItem>
          <MenuItem value={30}>Prof</MenuItem>
          <MenuItem value={40}>Team</MenuItem>
          <MenuItem value={50}>Spam</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function BasicSelect2({ age2, handleChange }) {
  return (
    <Box sx={{ width: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Funnel Stage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age2}
          label="Funnel Stage"
          onChange={handleChange}
          sx={{ backgroundColor: 'white', height: '55px', fontSize: '14px' }}
        >
          <MenuItem value={10}>ToFu</MenuItem>
          <MenuItem value={20}>MoFu</MenuItem>
          <MenuItem value={30}>BoFu</MenuItem>
          <MenuItem value={40}>Closed</MenuItem>
          <MenuItem value={50}>Inactive</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function BasicSelect3({ age3, handleChange }) {
  return (
    <Box sx={{ width: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <TextField
          id="demo-simple-select"
          value={age3}
          label="Deal Size"
          onChange={handleChange}
          sx={{
            backgroundColor: 'white',
            height: '50px',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        />
      </FormControl>
    </Box>
  );
}

function BasicSelect4({ age4, handleChange }) {
  return (
    <Box sx={{ width: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <TextField
          id="demo-simple-select"
          value={age4}
          label="Team Size"
          onChange={handleChange}
          sx={{
            backgroundColor: 'white',
            height: '50px',
            lineHeight: '1.5',
            fontSize: '14px',
          }}
        />
      </FormControl>
    </Box>
  );
}






function App() {
  const [data, setData] = useState(null);
  const [age, setAge] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isCopied, setIsCopied] = useState({});
  const [age1,setAge1]=useState('');
  const [age2,setAge2]=useState('');
  const [age3,setAge3]=useState('');
  const [age4,setAge4]=useState('');
  const loanData = products.data[0]["i44ypDIeRFMXjLvALsKukCuxc3c2"];

  useEffect(() => {
    
    setData(products);
  }, []);


  const handleCopy = (field) => {
    navigator.clipboard.writeText(data[field]).then(() => {
      setIsCopied((prev) => ({ ...prev, [field]: true })); 
      setTimeout(() => {
        setIsCopied((prev) => ({ ...prev, [field]: false })); 
      }, 2000);
    });
  };
  

  const handleSave = () => {
    console.log("Saved data:", data);
    alert("Data has been saved!"); 
  };


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const handleChange4 = (event) => {
    setAge4(event.target.value);
  };





  const handleEdit = () => {
    setIsEditing(!isEditing); 
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      setData(null); 
      alert("Data has been deleted!");
    }
  };


  const handleRefresh = () => {
    setData(products); 
    alert("Data has been refreshed!");
  };

  
  
  

  if (!data) {
    return <div>Loading...</div>;
  }

  const parseDescription = (key) => {
    const regex = new RegExp(`${key}:\\s*(\\d+)`, "i");
    const match = loanData.description.match(regex);
    return match ? match[1] : "N/A";
  };

  
  


  return (
    <div className="App">
      
        <div className='nav'>
        <button>BACK</button>
        <div className='nav-items'>
        <a onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /><span>EDIT</span></a>
        <a onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/><span>DELETE</span></a>
        <a onClick={handleRefresh} ><FontAwesomeIcon icon={faRotateRight} /><span>REFRESH</span></a>
        </div>
        </div>


      <div className="details">
      <div className="details-info">
        
    <div>
    <p><b>{data.name}</b></p>
        <p>
          {data.mobileNumber}
          <button className="copy-btn" onClick={() => handleCopy('mobileNumber')}>
            {isCopied.mobileNumber ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <a>Copy</a> 
            )}
          </button>
        </p>
        <p>
        {data.app_user_id}
          <button className="copy-btn" onClick={() => handleCopy('app_user_id')}>
            {isCopied.app_user_id ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <a>Copy</a> 
            )}
          </button>
        </p>
    </div>

{/* 
        <p>Country:{data.country_code || 'NA'}</p>
        <p>Lender Type:{data.lenderType}</p>
        <p>Price:{data.currency}</p>
        {/* <p>Price: {data.price_in_purchased_currency} {data.currency}</p> */}
        {/* <p>Last Seen:{new Date(data.last_seen).toLocaleString()}</p> */}
        <div class="data-item">
      <p class="value">Country </p>
      <p>{data.country_code || 'NA'}</p>
    </div>
    <div class="data-item">
      <p class="value">Lender Type</p>
      <p class="label">{data.lenderType}</p>
    </div>

    <div class="data-item">
      <p class="value">Price</p>
      <p class="label">{data.currency}</p>
    </div>


    <div class="data-item ">
      <p class="value">Last Seen</p>
      <p class="label">{new Date(data.last_seen).toLocaleString()}</p>
      <p><span>{Math.floor((new Date() - new Date(data.last_seen)) / (1000 * 60 * 60 * 24))} days ago</span></p>
    </div>
       
      </div>
      </div>

      

      <div className="content">
      <BasicSelect age={age} handleChange={handleChange} />
      <BasicSelect1 age={age1} handleChange={handleChange1} />
      <BasicSelect2 age={age2} handleChange={handleChange2} />
      <BasicSelect3 age={age3} handleChange={handleChange3} />
      <BasicSelect4 age={age4} handleChange={handleChange4} />
      
     
     <button  onClick={handleSave}>Save</button> 

    

    </div>


    <div className="usage-section">
      <h3>Current Usage:</h3>
      <hr></hr>
      <div>
      <ul>
      <li>Total Active Loans: {parseDescription("Total_Active_loans")}</li>
        <li>Active Given Loans: {parseDescription("Active_Given_Loans")}</li>
        <li>
          Active Given Loans With Interest:{" "}
          {parseDescription("Active_Given_Loans_With_Interest")}
        </li>
        <li>
          Active Given Normal Loans: {parseDescription("Active_Given_Normal_Loans")}
        </li>
        <li>Loan Book Size: {parseDescription("LoanBookSize")}</li>
        <li>Monthly Interest Gain: {parseDescription("MonthlyInterestGain")}</li>
        <li>Currency: {loanData.description.match(/Currency: (\w+)/)[1]}</li>
       
          </ul>
        </div>
     
    </div> 


     <div className='onboarding-section'>
      <h3>Onboarding Sketching</h3>
      <hr></hr>

      <ul>
          {data.loan_data.data.map((loan, index) => {
            const personaDetails = loan[data.app_user_id]?.personaDetails;
            if (personaDetails) {
              return (
                <p key={index}>
                 <p><li><b>Inquiry Purposes:</b></li></p>
                  <ul>
                    {personaDetails.inquiryPurpose.map((purpose, idx) => (
                      <li key={idx}>{purpose}</li>
                    ))}
                  </ul>
                  <p><li><b>Controlled Access:</b> {personaDetails.giveControlledAccess ? 'true' : 'false'}</li></p>
                  <p><li><b>Staff or Partners:</b>{personaDetails.haveStaffOrPartners ? 'true' : 'false'}</li></p>
                  <p><li><b>lenderType:</b>{personaDetails.lenderType}</li></p>
                  <p><li> <b>Number of Customers:</b> {personaDetails.numberOfCustomers}</li></p>
                </p>
              );
            }
            return null;
          })}
        </ul>


      </div>


    <div className="customer-section">
      <h4>Customer History  <FontAwesomeIcon icon={faCircleInfo} /></h4>
  
    
    <div className="custom-dropdown">
    <hr />
    </div>
    <div class="custom-dropdown-menu">
   

    <div class="custom-dropdown-item">
      <b>Subscription Type:</b>
      <div class="dropdown-content">
        <span class="dropdown-value">{data.entitlements.professional ? "Professional" : "N/A"}</span>
      </div>
    </div>

    <div class="custom-dropdown-item">
      <b>Took Trial:</b>
      <div class="dropdown-content">
        <span class="dropdown-time-ago">
          ({Math.floor((new Date() - new Date(data.entitlements.professional.purchase_date)) / (1000 * 60 * 60 * 24))} days ago)
        </span>
        <span class="dropdown-date">
          {new Date(data.entitlements.professional.purchase_date).toLocaleDateString()}
        </span>
      </div>
    </div>

    <div class="custom-dropdown-item">
      <b>Professional Subscription :</b>
      <div class="dropdown-content">
        <span class="dropdown-time-ago">
             Expires in {Math.floor((new Date(data.entitlements.professional.expires_date) - new Date()) / (1000 * 60 * 60 * 24))} days
        </span>
        <span class="dropdown-date">
          ({new Date(data.entitlements.professional.expires_date).toLocaleDateString()})
        </span>
      </div>
    </div>

    <div class="custom-dropdown-item">
      <b><FontAwesomeIcon icon={faUser} /> First Seen Using the App:</b>
      <div class="dropdown-content">
        <span class="dropdown-time-ago">
          {Math.floor((new Date() - new Date(data.first_seen)) / (1000 * 60 * 60 * 24))} days ago
        </span>
        <span class="dropdown-date">
          ({new Date(data.first_seen).toLocaleDateString()})
        </span>
      </div>
    </div>

    <div class="custom-dropdown-item">
      <b><FontAwesomeIcon icon={faUser} /> Last Opened the App:</b>
      <div class="dropdown-content">
        <span class="dropdown-time-ago">
          {Math.floor((new Date() - new Date(data.last_seen)) / (1000 * 60 * 60 * 24))} days ago
        </span>
        <span class="dropdown-date">
          ({new Date(data.last_seen).toLocaleDateString()})
        </span>
      </div>
    </div>
  


  </div>
</div>




         
    
    </div>
  );
}




export default App;