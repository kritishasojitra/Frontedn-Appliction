import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Page/Home';
import PurchaseOrderForm from '../Page/PurchaseOrderForm';
import TalentForm from '../Page/TalentForm';

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<PurchaseOrderForm />} />
        <Route path="/talentform" element={<TalentForm/>}></Route>
      </Routes>
    </>
  );
}

export default MainRouter;
