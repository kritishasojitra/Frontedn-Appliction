import React from 'react';
import "../Css/Home.css";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="main-header shadow bg-body rounded">
        <div className="logo">
          <img src="https://ownai.co.zw/media/catalog/product/placeholder/default/ownai-logo-adjusted.png"/>
        </div>
        <div className="serch-box">
        <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
      </div>
      <div className="aside-bar"><br/><br/>
      {/* <i class="fa-solid fa-house ms-4"></i>  <NavLink to="/home" className="ms-2 text-decoration-none text-dark fw-bold">Home</NavLink><br/><br/ */}
      <i class="fa-solid fa-table-list ms-4"></i>  <NavLink to="/" className="ms-2 text-decoration-none text-dark fw-bold">Purchase-Form</NavLink><br/><br/>
      <i class="fa-solid fa-table-list ms-4"></i>  <NavLink to="/talentform" className="ms-2 text-decoration-none text-dark fw-bold">TalentForm</NavLink>
      </div>
    </>
  );
}

export default Header;
