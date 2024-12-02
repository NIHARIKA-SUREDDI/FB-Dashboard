import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faRotateRight, faCircleInfo ,faUser} from '@fortawesome/free-solid-svg-icons';
import products from './constants/products.json';
import  { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField  from '@mui/material/TextField';





  

function BasicSelect({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Todo</MenuItem>
          <MenuItem value={20}>Nurture</MenuItem>
          <MenuItem value={30}>Disqualified</MenuItem>
          <MenuItem value={30}>Inactive</MenuItem>
          <MenuItem value={30}>Upsell</MenuItem>
          <MenuItem value={30}>Won</MenuItem>
          <MenuItem value={30}>PaymentMissing</MenuItem>

        </Select>
          
 
      </FormControl>
    </Box>

  );
}

function BasicSelect1({ age1, handleChange }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age1}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Unsure</MenuItem>
          <MenuItem value={20}>Prem</MenuItem>
          <MenuItem value={30}>prof</MenuItem>
          <MenuItem value={30}>Team</MenuItem>
          <MenuItem value={30}>Spam</MenuItem>
          
        </Select>
          
      </FormControl>
    </Box>

  );
}

function BasicSelect2({ age2, handleChange }) {
  return (
    <Box sx={{ minWidth: 150  }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Funnel Stage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age2}
          label="Age"
          onChange={handleChange}
          // sx={{ backgroundColor: 'white' }} 
        
        >
          <MenuItem value={10}>ToFu</MenuItem>
          <MenuItem value={20}>MoFu</MenuItem>
          <MenuItem value={30}>BoFu</MenuItem>
          <MenuItem value={30}>Closed</MenuItem>
          <MenuItem value={30}>InActive</MenuItem>

          
        
          
        </Select>
          
      </FormControl>
    </Box>

  );
}


function BasicSelect3({ age3, handleChange }) {
  return (
    <Box sx={{ minWidth: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <TextField
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age3}
          label="Deal size"
          onChange={handleChange}
          sx={{ backgroundColor: 'white' }} 
        
          
         />
          
      </FormControl>
    </Box>

  );
}
function BasicSelect4({ age4, handleChange }) {
  return (
    <Box sx={{ minWidth: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <TextField
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age4}
          label="Team Size"
          onChange={handleChange}
          sx={{ backgroundColor: 'white' }} 
        
         
          
         />
          
      </FormControl>
    </Box>

  );
}






function App() {
  const [data, setData] = useState(null);
  const [age, setAge] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [age1,setAge1]=useState('');
  const [age2,setAge2]=useState('');
  const [age3,setAge3]=useState('');
  const [age4,setAge4]=useState('');


  useEffect(() => {
    
    setData(products);
  }, []);


  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(`Copied: ${text}`);
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
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
     <p>{data.name}</p>
    <p>
     {data.mobileNumber}<button className="copy-btn"   onClick={() => handleCopy(data.mobileNumber)}>Copy</button>
    </p>
    <p>
      {data.app_user_id}<button className="copy-btn"  onClick={() => handleCopy(data.app_user_id)}>Copy</button>
    </p>
    </div>


        <p>Country:{data.country_code || 'NA'}</p>
        <p>Lender Type:{data.lenderType}</p>
        
        <p>Price:{data.currency}</p>
       
        {/* <p>Price: {data.price_in_purchased_currency} {data.currency}</p> */}
        <p>Last Seen:{new Date(data.last_seen).toLocaleString()}</p>
       
       
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
      <ul>
         
         <p>Total Active Loans: 1</p>
          <p>Active Given Loans: 1</p>
          <p>Active Given Loans With Interest: 1</p>
          <p>Active Given Normal Loans: 1</p>
          
          <p>Currency: {data.currency}</p>
        
          </ul>
     
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
                 <p> <b>Inquiry Purposes:</b></p>
                  {/* <ul>
                    {personaDetails.inquiryPurpose.map((purpose, idx) => (
                      <li key={idx}>{purpose}</li>
                    ))}
                  </ul> */}
                  <p><b>Controlled Access:</b> {personaDetails.giveControlledAccess ? 'Yes' : 'No'}</p>
                  <p><b>Staff or Partners:</b>{personaDetails.haveStaffOrPartners ? 'Yes' : 'No'}</p>
                  <p><b>Number of Customers:</b> {personaDetails.numberOfCustomers}</p>
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
  

    <div className="custom-dropdown-item">➕ Was granted the professional access to all features Entitlement <br />
       {new Date(data.last_seen).toLocaleString()}
    </div>
    <div className="custom-dropdown-item">💲Lifetime Plan</div>
    <div className="custom-dropdown-item">💲 Made a purchase of Lifetime Plan
      <button>Send Message </button>
      </div>
    <div className="custom-dropdown-item"><b>  <FontAwesomeIcon icon={faUser} />   First Seen:</b><br></br> {new Date(data.first_seen).toLocaleString()}   </div>
    <div className="custom-dropdown-item"><b><FontAwesomeIcon icon={faUser} />  Last Seen:</b><br></br>{new Date(data.last_seen).toLocaleString()}  </div>
    <div className="custom-dropdown-item"><b>Plan ID:</b> {data.product_id}</div>
    <div className="custom-dropdown-item"><b>Subscription Expiry:{" "}</b>
    {new Date(data.entitlements.professional.expires_date).toLocaleString()}</div>
    <div className="custom-dropdown-item"><b>Loan Status: </b> {data.loan_data.status}</div>
    {/* <div className="custom-dropdown-item"></div>
    <div className="custom-dropdown-item"></div>
    <div className="custom-dropdown-item"></div>
    <div className="custom-dropdown-item"></div>
    <div className="custom-dropdown-item"></div> */}



  </div>
</div>




         
    </div>
  );
}




export default App;