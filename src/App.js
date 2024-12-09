import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faRotateRight, faCircleInfo ,faUser,faCheck} from '@fortawesome/free-solid-svg-icons';
import products from './constants/products.json';
import  { useState, useEffect } from 'react';
import * as React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';



function InputComponent({ type, label, value, handleChange, options = [] }) {
  return (
    <Box sx={{ minWidth: 150, backgroundColor: 'white' }}>
      <FormControl fullWidth>
        {type === 'select' ? (
          <>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>
            <Select
              labelId={`${label}-label`}
              id={`${label}-select`}
              value={value}
              label={label}
              onChange={handleChange}
              sx={{ backgroundColor: 'white', height: '55px', fontSize: '14px' }}
            >
              {options.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </>
        ) : (
          <TextField
            id={`${label}-text`}
            value={value}
            label={label}
            onChange={handleChange}
            sx={{
              backgroundColor: 'white',
              height: '50px',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          />
        )}
      </FormControl>
    </Box>
  );
}



function App() {
  const [data, setData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCopied, setIsCopied] = useState({});

  const [formData, setFormData]  = React.useState({
    state: '',
    Quality: '',
    funnelStage: '',
    dealSize: '',
    TeamSize: '',
  });
  
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

  const handleChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
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
      {/* <p class="label">{data.price_in_purchased_currency
      ||data.currency}</p> */}
      <p class="label">{data.price_in_purchased_currency}</p>
    </div>


    <div class="data-item ">
    <p class="value">Last Seen</p>
<p class="label">
  {new Date(data.last_seen).toLocaleString([], {
    year: 'numeric',
    month: 'short', 
    day: '2-digit', 
    hour: '2-digit',
    minute: '2-digit',
  })}
</p>
<p>
  <span>
    {Math.floor((new Date() - new Date(data.last_seen)) / (1000 * 60 * 60 * 24))} days ago
  </span>
</p>

    </div>
       
      </div>
      </div>

      

      <div className="content">
      <InputComponent
          type="select"
          label="State"
          value={formData.age}
          handleChange={handleChange("state")}
          options={[
            { value: 10, label: "Todo" },
            { value: 20, label: "Nurture" },
            { value: 30, label: "Disqualified" },
            { value: 40, label: "Inactive" },
            { value: 50, label: "Upsell" },
            { value: 60, label: "Won" },
            { value: 70, label: "Payment Missing" },
          ]}
        />
        <InputComponent
          type="select"
          label="Quality"
          value={formData.age1}
          handleChange={handleChange("Quality")}
          options={[
            { value: 10, label: "Unsure" },
            { value: 20, label: "Prem" },
            { value: 30, label: "Prof" },
            { value: 40, label: "Team" },
            { value: 50, label: "Spam" },
          ]}
        />
        <InputComponent
          type="select"
          label="Funnel Stage"
          value={formData.age2}
          handleChange={handleChange("funnelStage")}
          options={[
            { value: 10, label: "ToFu" },
            { value: 20, label: "MoFu" },
            { value: 30, label: "BoFu" },
            { value: 40, label: "Closed" },
            { value: 50, label: "Inactive" },
          ]}
        />
        <InputComponent
          type="text"
          label="Deal Size"
          value={formData.age3}
          handleChange={handleChange("dealSize")}
        />
        <InputComponent
          type="text"
          label="Team Size"
          value={formData.age4}
          handleChange={handleChange("TeamSize")}
        />
     
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
                  <br></br>
                  <p><li><b>Controlled Access: </b> {personaDetails.giveControlledAccess ? 'true' : 'false'}</li></p>
                  {/* <p><li><b>Staff or Partners: </b>{personaDetails.haveStaffOrPartners ? 'true' : 'false'}</li></p> */}
                  <p><li><b>lenderType: </b>{personaDetails.lenderType}</li></p>
                  <p><li> <b>Number of Customers: </b> {personaDetails.numberOfCustomers}</li></p>
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
        Expires in {Math.abs(Math.ceil((new Date(data.entitlements.professional.expires_date) - new Date()) / (1000 * 60 * 60 * 24)))} days
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