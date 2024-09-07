import React, { useState } from 'react';
import "../Css/PurchaseOrderForm.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let data = {
  clientName: '',
  poType: '',
  poNumber: '',
  receivedOn: null, 
  receivedFromName: '',
  receivedFromEmail: '',
  poStartDate: null, 
  poEndDate: null,
  budget: '',
  currency: 'USD'
};

const PurchaseOrderForm = () => {
  const [formState, setFormState] = useState(data);
  const [errors, setErrors] = useState({});
  const [budgetstate, setBudgetState] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: date,
    }));

    // Validate PO End Date when it's selected
    if (name === 'poEndDate' && formState.poStartDate && date < formState.poStartDate) {
      setErrors({ poEndDate: 'PO End Date cannot be earlier than PO Start Date.' });
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        poEndDate: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (formState.poEndDate && formState.poStartDate && formState.poEndDate < formState.poStartDate) {
      setErrors({ poEndDate: 'PO End Date cannot be earlier than PO Start Date.' });
      return;
    }

    // Submission logic
    console.log(formState); 
    setFormState(data);
  };
  

  const handleBlur = () => {
    if (formState.budget.length === 5) {
      setBudgetState(true);
    } else {
      setBudgetState(false);
    }
  };

  return (
    <>
      <div className="form1">
        <div className="container my-5 w-75" style={{ marginTop: "100px" }}>
          <div className="card shadow d-flex justify-content-start">
            <h2 className="mb-4 text2 rounded-top">Purchase Order Form</h2>
            <div className="f-1">
              <div className='form-1 p-3'>
                <form onSubmit={handleSubmit}>
                  {/* Client Name and PO Type */}
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="clientName" className="form-label fw-bold">Client Name *</label>
                      <select id="clientName"
                        name="clientName" className="form-select" value={formState.clientName} onChange={handleInputChange} required>
                        <option value="" disabled>Select Client</option>
                        <option value="Collabera">Collabera - Collabera Inc</option>
                        <option value="AnotherClient">Another Client</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-4">
                      <label htmlFor="poType" className="form-label fw-bold">Purchase Order Type *</label>
                      <select id="poType" name="poType" className="form-select" value={formState.poType} onChange={handleInputChange} required>
                        <option value="" disabled>Select Type</option>
                        <option value="Group PO">Group PO</option>
                        <option value="Individual PO">Individual PO</option>
                      </select>
                    </div>
                  </div>

                  {/* PO Number and Received On */}
                  <div className="row mb-3 mt-4">
                    <div className="col-md-12">
                      <label htmlFor="poNumber" className="form-label fw-bold">Purchase Order No. *</label>
                      <input type="text" id="poNumber" name="poNumber" className="form-control" value={formState.poNumber} onChange={handleInputChange} required placeholder="PO Number" pattern="[A-Za-z0-9@#%&*]+" />
                    </div>
                    <div className="col-md-12 mt-4">
                      <label htmlFor="receivedOn" className="form-label fw-bold">Received On *</label><br />
                      <DatePicker className="form-control" id="receivedOn" selected={formState.receivedOn} onChange={(date) => handleDateChange('receivedOn', date)} placeholderText="Select a date" required />
                    </div>
                  </div>

                  {/* Received From Name and Email */}
                  <div className="row mb-3 mt-4">
                    <div className="col-md-12">
                      <label htmlFor="receivedFromName" className="form-label fw-bold">Received From (Name) *</label>
                      <input type="text" id="receivedFromName" name="receivedFromName" className="form-control" value={formState.receivedFromName} onChange={handleInputChange} required placeholder="Name" />
                    </div>
                    <div className="col-md-12 mt-4">
                      <label htmlFor="receivedFromEmail" className="form-label fw-bold">Received From (Email) *</label>
                      <input type="email" id="receivedFromEmail" name="receivedFromEmail" className="form-control" value={formState.receivedFromEmail} onChange={handleInputChange} required placeholder="Email" />
                    </div>
                  </div>

                  {/* PO Start and End Date */}
                  <div className="row mb-3 mt-4">
                    <div className="col-md-5 ms-1">
                      <label htmlFor="poStartDate" className="form-label fw-bold">PO Start Date *</label>
                      <DatePicker id="poStartDate" selected={formState.poStartDate} onChange={(date) => handleDateChange('poStartDate', date)} className="form-control" placeholderText="Select a date" required />
                    </div>
                    <div className="col-md-5 ms-4">
                      <label htmlFor="poEndDate" className="form-label fw-bold ms-5">PO End Date *</label>
                      <DatePicker id="poEndDate" selected={formState.poEndDate} onChange={(date) => handleDateChange('poEndDate', date)} className={`form-control ${errors.poEndDate ? 'is-invalid' : ''}`} placeholderText="Select a date" required />
                      {errors.poEndDate && <div className="invalid-feedback">{errors.poEndDate}</div>}
                    </div>
                  </div>

                  {/* Budget and Currency */}
                  <div className="row mb-3 mt-4">
                    <div className="col-md-5 ms-1">
                      <label htmlFor="budget" className="form-label fw-bold">Budget *</label>
                      <input type="number" id="budget" name="budget" className={budgetstate ? "form-control" : "form-control is-invalid"} value={formState.budget} onChange={handleInputChange} onBlur={handleBlur} placeholder="Budget" required />
                      {!budgetstate && <div className="invalid-feedback">* Budget must be exactly 5 digits</div>}
                    </div>
                    <div className="col-md-6 ms-5">
                      <label htmlFor="currency" className="form-label fw-bold ms-4">Currency *</label>
                      <select id="currency" name="currency" className="form-select" value={formState.currency} onChange={handleInputChange} required >
                        <option value="USD">USD - Dollars ($)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit & Reset Buttons */}
                  <div className="mt-4 d-flex justify-content-end">
                    {/* <button type="reset" className="btn1 mt-4" onClick={() => setFormState(data)}>Reset</button> */}
                    <button type="submit" className="btn2 mt-4 ms-3">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrderForm;
