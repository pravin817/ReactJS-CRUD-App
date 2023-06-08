import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div className="container col-lg-6">
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h3>Employee Detail</h3>
        </div>

        <div className="card-body col-lg-12">
          {empData && (
            <div className="col-lg-12">
              {/* Testing  */}

              <table className="table table-bordered  table-hover">
              <tbody>
                  <tr>
                    <td>ID</td>
                    <td>{empData.id}</td>
                  </tr>

                  <tr>
                    <td>Name</td>
                    <td>{empData.name}</td>
                  </tr>

                  <tr>
                    <td>Email</td>
                    <td>{empData.email}</td>
                  </tr>

                  <tr>
                    <td>Phone</td>
                    <td>{empData.phone}</td>
                  </tr>

                </tbody>
              </table>

              <Link to="/" className="btn btn-danger">
                Back to listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
