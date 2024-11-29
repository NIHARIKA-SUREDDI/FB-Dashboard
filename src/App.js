import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faRotateRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import products from './constants/products.json';
import  { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

function BasicSelect1({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
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

function BasicSelect2({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Funnel Stage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
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


function BasicSelect3({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Deal Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
         
          
        
          
        </Select>
          
      </FormControl>
    </Box>

  );
}
function BasicSelect4({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 150, backgroundColor:'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
         
          
        
          
        </Select>
          
      </FormControl>
    </Box>

  );
}






function App() {
  const [data, setData] = useState(null);
  const [age, setAge] = useState('');



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


  if (!data) {
    return <div>Loading...</div>;
  }
  
  


  return (
    <div className="App">
      
      
       
        <div className='nav'>
        <button>BACK</button>
        <div className='nav-items'>
        <a><FontAwesomeIcon icon={faPenToSquare} /><span>EDIT</span></a>
        <a><FontAwesomeIcon icon={faTrash}/><span>DELETE</span></a>
        <a><FontAwesomeIcon icon={faRotateRight} /><span>REFRESH</span></a>
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

      {/* <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1>Material-UI Select Example</h1>
        <BasicSelect state={state} handleChange={handleChange} />
      </div>
    </ThemeProvider> */}

      <div className="content">
      <BasicSelect age={age} handleChange={handleChange} />
      <BasicSelect1 age={age} handleChange={handleChange} />
      <BasicSelect2 age={age} handleChange={handleChange} />
      <BasicSelect3 age={age} handleChange={handleChange} />
      <BasicSelect4 age={age} handleChange={handleChange} />
      
        {/* <div className='select-container'>
      
      <label for="state">State</label>
      <select>
      
      <option> Todo</option>
      <option>Nurture</option>
      <option>Disqualified</option>
      <option>Inactive</option>
      <option>Upsell</option>
      <option>Won</option>
      <option>PaymentMissing</option>
      </select>
      
      
      </div> */}


      {/* <div className='select-container'>
     
      <label for="quality">Quality</label>
        <select> 
        <option>Unsure</option>
        <option>Prem</option>
        <option>prof</option>
        <option>Team</option>
        <option>Spam</option>
        </select>
        
     
      </div> */}


      {/* <div className='select-container'>
     
      <label for="funnel-stage">Funnel Stage</label>  
        <select>
          
          <option>ToFu</option>
          <option>MoFu</option>
          <option>BoFu</option>
          <option>Closed</option>
          <option>InActive</option>
        </select>
       
        </div> */}



      {/* <button>Deal Size</button> */}
      
      {/* <button>Team Size</button> */}
     
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
  

    <div className="custom-dropdown-item">➕ Was granted the professional access to all features Entitlement<br></br>
       {new Date(data.last_seen).toLocaleString()}
    </div>
    <div className="custom-dropdown-item">💲Lifetime Plan</div>
    <div className="custom-dropdown-item">💲 Made a purchase of Lifetime Plan
      <button>Send Message </button>
      </div>
    <div className="custom-dropdown-item"><b>  <FontAwesomeIcon icon="fa-solid fa-user" />First Seen:</b><br></br> {new Date(data.first_seen).toLocaleString()}   </div>
    <div className="custom-dropdown-item"><b>Last Seen:</b><br></br>{new Date(data.last_seen).toLocaleString()}  </div>
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
