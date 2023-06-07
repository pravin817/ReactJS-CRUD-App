import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

const EmployeeDetail = () => {
  const { empid } = useParams();
  const [empData, setEmpData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h3>Employee Detail</h3>
        </div>

        <div className="card-body">
          {empData && (
            <div>
              <h2>
                The employee name is : {empData.name} ({empData.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email : {empData.email}</h5>
              <h5>Phone : {empData.phone}</h5>
              <Link to="/" className="btn btn-danger">Back to listing</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
