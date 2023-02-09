import React from 'react'
import { useState } from "react";
import HaveDataOrNot from "./components/HaveDataOrNot";
import Pricing from "./components/Pricing";
import UploadingData from "./components/UploadingData";
import Processing from "./components/Processing";

import HeaderU from './components/HeaderU';
import "./Upload.css";
import { useAuth ,logout} from './auth'
import Login from './Login'

const LoggedInUpload = () => {
  const [x, setX] = useState(0);
  const [formData, setFormData] = useState({
    havingData: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
    address: "",
    nationality: "",
    zipcode: "",
    highestQualification: "", 
    occupation: "",
    about: "",
  });
  const [page, setPage] = useState(0);
  const componentList = [
    <HaveDataOrNot
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <Pricing
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <UploadingData
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <Processing
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  ];
  return (
      <>
      <div className="Upload">
      <div className="home1-container">
      <HeaderU /></div>
      <div className="progress-bar">
        <div style={{width: page === 0? "25%": page === 1? "50%": page === 2? "75%" : "100%"}}></div>
      </div>
      <div>{componentList[page]}</div>
    </div>
      </>
  )}
const LoggedOutUpload = () => {
    return (
      <>
      <div>You must be connected to enter this page </div>
      <Login></Login>
      </>
    )}

function Upload() {
  const [logged] = useAuth();
  return (
    <div>
    {logged ? <LoggedInUpload /> : <LoggedOutUpload/>}
    </div>
  );
}

export default Upload;