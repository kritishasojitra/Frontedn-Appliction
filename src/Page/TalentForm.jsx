import React, { useState } from 'react';
import "../Css/talentform.css";

function TalentForm() {
  const [talents, setTalents] = useState([
    { id: 1, name: '', contractDuration: '', billRate: '', standardTimeBR: '', overTimeBR: '', currency: 'USD' },
  ]);

  const handleTalentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTalents = talents.map((talent, i) =>
      i === index ? { ...talent, [name]: value } : talent
    );
    setTalents(updatedTalents);
  };

  const addTalent = () => {
    setTalents([
      ...talents,
      { id: talents.length + 1, name: '', contractDuration: '', billRate: '', standardTimeBR: '', overTimeBR: '', currency: 'USD' },
    ]);
  };

  const removeTalent = (index) => {
    const updatedTalents = [...talents];
    updatedTalents.splice(index, 1);
    setTalents(updatedTalents);
  };

  return (
    <>
      {/* Talent Detail Section */}
      <div className="talent-form">
        <div className="border-top mt-4  shadow-lg  mb-5 bg-body rounded">
          <h4 className='rounded-top  talent-header'>Talent Detail</h4>

          {talents.map((talent, index) => (
            <div key={talent.id} className="row align-items-center mb-3 mt-5">
              <div className="col-auto">
                <input type="checkbox" id={`talent${talent.id}`} />
              </div>

              <div className="col-md-2">
                <label htmlFor={`talentName${talent.id}`} className='fw-bold'>Talent Name</label>
                <input  type="text" className="form-control" id={`talentName${talent.id}`} name="name" value={talent.name} onChange={(e) => handleTalentChange(index, e)} placeholder="Talent Name" />
              </div>

              <div className="col-md-2">
                <label htmlFor={`contractDuration${talent.id}`} className='fw-bold'>Contract Duration</label>
                <input type="number" className="form-control" id={`contractDuration${talent.id}`} name="contractDuration" value={talent.contractDuration} onChange={(e) => handleTalentChange(index, e)} placeholder="Contract Duration" />
              </div>

              <div className="col-md-2">
                <label htmlFor={`billRate${talent.id}`} className='fw-bold'>Bill Rate</label>
                <input type="number" className="form-control" id={`billRate${talent.id}`} name="billRate" value={talent.billRate} onChange={(e) => handleTalentChange(index, e)} placeholder="Bill Rate"/>
              </div>

              <div className="col-md-2">
                <label htmlFor={`standardTimeBR${talent.id}`} className='fw-bold'>Standard Time BR</label>
                <input type="number" className="form-control" id={`standardTimeBR${talent.id}`} name="standardTimeBR" value={talent.standardTimeBR} onChange={(e) => handleTalentChange(index, e)} placeholder="Standard Time BR" />
              </div>

              <div className="col-md-2">
                <label htmlFor={`overTimeBR${talent.id}`} className='fw-bold'>Over Time BR</label>
                <input type="number" className="form-control" id={`overTimeBR${talent.id}`} name="overTimeBR"  value={talent.overTimeBR}  onChange={(e) => handleTalentChange(index, e)} placeholder="Over Time BR" />
              </div>

              <div className="col-md-1">
                <label htmlFor={`currency${talent.id}`} className='fw-bold '>Currency</label>
                <select className="form-select" id={`currency${talent.id}`} name="currency" value={talent.currency} onChange={(e) => handleTalentChange(index, e)}>
                  <option value="USD">USD</option>
                </select>
              </div>

              <div className="col-md-1">
                <button  type="button" className="talent-btn mt-4" onClick={() => removeTalent(index)} > Remove </button>
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-outline-secondary" onClick={addTalent}>
            + Add Another
          </button>
        </div>
      </div>
    </>
  );
}

export default TalentForm;
