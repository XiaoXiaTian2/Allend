import GridComponent from "./GridComponent";
import Rating from "./Rating";
import LeftVerticalNavbar from "./LeftVerticalNavbar";
import Footer from "../homepage/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

//會員中心
function RatingPage() {
  const [caseNum, setCaseNum] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const headers = { Authorization: `Bearer ${token}` };
        const res = await axios.get(
          "http://localhost/Allend/backend/public/api/dashboard",
          { headers: headers }
        );
        const result = await res.data;
        setCaseNum(result);
      } catch (err) {
        console.log(err)
        if(err.response.status === 401){
          // return <Navigate to='/switch'></Navigate>
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container xxl={12}>
        <div className="row">
          <div className="col-lg-3" style={{ padding: "20px" }}>
            <LeftVerticalNavbar />
          </div>
          <div className="col-lg-9">
            <div class="row">
              <div class="col-lg-12">
                <GridComponent data={caseNum} width="" fontSize="20px" />
              </div>

              <div className="col-lg-12">
                <div style={{ width: "100%" }}>
                  <Rating ratingData={caseNum} fontSize="20px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default RatingPage;
