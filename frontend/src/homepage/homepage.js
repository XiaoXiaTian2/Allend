import "../../src/App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Category from "../Components/Category";
import product4 from "../Components/img/product4.jpg";
import product9 from "../Components/img/product9.jpg";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { MdOutlineMoneyOff } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbBellRinging } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { BsPersonVcard } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import "./homepage.css";


function Homepage() {
  const [change, setChange] = useState(false);
  const [carouselpage, setCarouselpage] = useState(0);
  const handleSelect = (selectedIndex) => {
    setCarouselpage(selectedIndex);
  };
  // 最新服務 刊登 接API
  const [key, setkey] = useState(0);
  const [posts, setPosts] = useState([]);
  const [activeProduct, setActiveProduct] = useState();

  const fetchData = (index) => {
    fetch("http://127.0.0.1/Allend/backend/public/api/index")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.service);
        // console.log(data.demmand);
        // console.log(data.project);
        for (let i = 0; i < 9; i++) {
          data.service[i].d_name = data.demmand[i]["d_name"];
          data.service[i].d_amount = data.demmand[i]["d_amount"];
          data.service[i].did = data.demmand[i]["did"];
          data.service[i].d_active_location = data.demmand[i]["d_active_location"];
          data.service[i].d_created_at = data.demmand[i]["created_at"];
          data.service[i].project_image = data.project[i]["image"];

        }
        setkey(index);
        setPosts(data.service);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    fetchData()
  }, []);

  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  // const [activeProduct, setActiveProduct] = useState(Product); // State to track active product
  const [activeproduct4, setActiveproduct4] = useState(product4);
  const [activeproduct9, setActiveproduct9] = useState(product9);

  const handleMouseEnter = (image) => {
    setIsHovered(true);
    setActiveProduct(image);
    setActiveproduct4(image);
    setActiveproduct9(image);
    setChange(true);
  };

  const handleMouseLeave = (image) => {
    setIsHovered(false);
    setActiveProduct(image);
    setActiveproduct4(product4);
    setActiveproduct9(product9);
    setChange(false);

  };
  {/* 置頂按鈕 */ }
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down beyond a certain point
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  {/* 置頂按鈕 */ }

  {/* 控制新手教學彈跳視窗 */ }
  const handleShow = () => setShowNewbie(true);


  const [showNewbie, setShowNewbie] = useState(false);
  const handleClose = () => setShowNewbie(false);




  const handleTalentClick = () => {
    setShowTalentContent(true);
    setShowOrganContent(false); // Make sure to reset the other content
  };

  const handleOrganClick = () => {
    setShowTalentContent(false); // Make sure to reset the other content
    setShowOrganContent(true);
  };

  const [showTalentContent, setShowTalentContent] = useState(false);
  const [showOrganContent, setShowOrganContent] = useState(true);





  return (
    <>
      {/* 置頂按鈕 */}
      {showScrollButton && (
        <button
          className="btn btn-primary rounded-circle shadow"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000" // Set a high z-index to make sure it appears on top
          }}
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp style={{ fontSize: "24px" }} />
        </button>
      )}

      <div className=" noto-serif container  ">
        <div>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>

        <div><Category></Category></div>

        {/* 新手教學 */}
        <section class="adbar-section mt-5">
          <div class="container-lg container-pad">
            <h4>新手教學</h4>
            <div className="row justify-content-center" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="col-3 l" style={{ textAlign: 'center' }}>
                <h4 style={{ color: "#FFB5B5" }}>提出需求<FaHandshake style={{ fontSize: '50px' }} /></h4>
                <p>為你篩選適合人才</p>
              </div>
              <div className="col-3 " style={{ textAlign: 'center' }}>
                <h4 style={{ color: "#FFB5B5" }}>刊登服務<FaWpforms style={{ fontSize: '50px' }} /></h4>
                <p>上架您的案件</p>
              </div>
              <div className="col-3 " style={{ textAlign: 'center' }}>
                <h4 style={{ color: "#FFB5B5" }}>完全免費<MdOutlineMoneyOff style={{ fontSize: '50px' }} /></h4>
                <p>找人才輕鬆無壓力</p>
              </div>
              <div class="col-12 text-center">
                <span style={{ color: "#FFB5B5" }}>找案件，找人才，由我們搞定！</span>
                <button style={{ border: "none", backgroundColor: "#FFB5B5", borderRadius: "8px", letterSpacing: '2px' }} onClick={handleShow}>瞭解更多</button>

              </div>
            </div>
          </div>
        </section>


        {/* 最新服務 */}
        <h4 className=" mt-5">最新服務</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="posts-container" style={{ display: "flex" }}>
            {posts.slice(0, 3).map((post, index) => {
              return (
                <Row style={{ margin: "48px" }}>
                  <Col key={index} style={{ flexGrow: 1 }}>
                    <Link
                      to={`./serve/${post.mid}/${post.sid}`}
                      className="card"
                      style={{ width: "100%", fontSize: "10px" }}
                    >
                      <div className="card-header ">
                        <img
                          src={`data:image/jpeg;base64,${post.image}`}
                          alt={`${index + 1}`}
                          style={{
                            height: 200,
                            width: "200px",
                            display: "block",
                          }}
                        ></img>
                      </div>
                      <div className="card-body">
                        <div>{post.s_name}</div>
                        <div>${post.s_amount} / 件</div>
                        <hr></hr>
                        <div>{post.name}</div>
                      </div>
                      <div className="card-footer ">{post.created_at}</div>
                    </Link>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
        {/* 最新服務 */}





        {/* 最新刊登 */}
        <div className="row mt-3" >
          <h4>最新刊登</h4>
          <div className=" mb-4 container" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex" }}>
              {posts.slice(0, 3).map((post, index) => {
                return (
                  <Row style={{ margin: "12px" }}>
                    <Col key={index}>
                      <Link to={`./casecontext/?${post.did}`} style={{ width: "30%", textDecoration: "none" }} >
                        <div className="toast show ">
                          <div className="toast-header">
                            <strong className="me-auto">
                              <div>{post.d_name}</div>
                              <div>預算：{post.d_amount}</div>
                            </strong>
                          </div>
                          <div className="toast-body">
                            <div>刊登日期：{post.d_created_at}</div>
                            <div>地點：{post.d_active_location}</div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </div>
        </div>
        {/* 最新刊登 */}





        {/* 輪播圖 */}
        <h4>會員作品</h4>
        <div className="d-flex  justify-content-center mt-5">


          {/* <Row className="justify-content-md-center"> */}
          {/* <Col xs lg="7"> */}
          <Carousel
            activeIndex={carouselpage}
            onSelect={handleSelect}
            style={{ overflow: " hidden", backgroundColor: "#9CAFAA",width:"600px" }}
            id="carousel"
            interval={null}
            indicators={false}
            controls={true}
            prevIcon={
              <span style={{ color: "black", fontSize: "4rem" }}>‹</span>
            }
            nextIcon={
              <span style={{ color: "black", fontSize: "4rem" }}>›</span>
            }
          >

            {/* 接api輪播圖 */}
            {posts.slice(3, 6).map((post, index) => {
              return (
                <Carousel.Item  >
                  <Row className=" justify-content-md-center  ">
                    <Col xs lg="6" style={{ padding: "0px" }}>
                      <img src={change == true ? `${activeProduct}` : `data:image/jpeg;base64,${post.project_image}`} style={{ maxWidth: "100%", height: "auto", margin: "auto" }} />
                    </Col>
                    <Col xs lg="2" style={{ padding: "0px" }}>
                      {/* style={{  }} */}
                      <Link to={`./talent/${post.mid}`} style={{ fontSize: "18px", position: "relative", left: "30px" }}>
                        <span >{post.name}</span>
                      </Link>
                      {/* <Row
                            id="carouselimg"
                            className=" justify-content-md-center"
                          >
                               {posts.slice(carouselpage * 3, carouselpage * 3 + 3).map((post, index) => {
                                return (
                                  <Col xs lg="4" style={{ zIndex: 100 }}>
                                    {" "}
                                    <img
                                      src={`data:image/jpeg;base64,${post.project_image}`}
                                      onMouseEnter={() => handleMouseEnter(`data:image/jpeg;base64,${post.project_image}`)}
                                      onMouseLeave={() => handleMouseLeave(`data:image/jpeg;base64,${post.project_image}`)}
                                    />
                                  </Col>
                                )
                              })}
                </Row> */}
                    </Col>
                  </Row>
                </Carousel.Item>

              )

            })}
            {/* 接api輪播圖 */}

            {/* 接api輪播圖 */}
            {/* {posts.slice(3, 6).map((post, index) => {
              return (
                <Carousel.Item style={{ backgroundImage: `url(data:image/jpeg;base64,${post.project_image})`, backgroundSize: "665px 250px" }}>
                  <Row className=" justify-content-md-center  ">
                    <Col xs lg="6">
                      <img src={change == true ? `${activeProduct}` : `data:image/jpeg;base64,${post.project_image}`} style={{ maxWidth: "100%", height: "auto", margin: "auto", visibility: "hidden" }} />
                      <Link className="justify-content-md-center" style={{ textAlign: "end", position: "relative", bottom: "80px", left: "30px" }} to={`./talent/${post.mid}`}>
                        <h3 >{post.name}</h3>
                      </Link>
                    </Col> */}
                    {/* <Col xs lg="5">
                          <Link className="justify-content-md-center" style={{alignItems:"end"}} to={`./talent/${post.mid}`}>
                            <h3 >{post.name}</h3>
                          </Link>

                        </Col> */}
                  {/* </Row>
                </Carousel.Item>

              )

            })} */}
            {/* 接api輪播圖 */}






          </Carousel>
          {/* </Col> */}
          {/* </Row> */}
        </div>
        {/* 輪播圖 */}
      </div>




      <Footer></Footer>
      {/* 新手教學視窗 */}
      <Modal show={showNewbie} onHide={handleClose} centered style={{ borderRadius: '20px' }}>
        <Modal.Header closeButton style={{ borderBottom: '1px solid black' }}>
          <div className="row justify-content-center w-100">
            <div className="col text-center">
              <Modal.Title>平台如何運作</Modal.Title>
              <div className="d-flex">
                <div className="border rounded-pill mx-auto p-2" style={{ borderColor: "black" }}>
                  <Button className="rounded-pill btn type-modal-btn btn-medium " data-target="organ-modal-div" onClick={handleOrganClick}>發案者</Button>
                  <Button className="rounded-pill btn type-modal-btn btn-medium" data-target="talent-modal-div" onClick={handleTalentClick}>接案者</Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>


          {showOrganContent && (
            <div className="organ-modal-div ">
              <div className="my-4 container-fluid container-xl">
                <div className="row">
                  <div className="col-2 pe-2"><TfiAnnouncement style={{ fontSize: "35px", color: "3964C3" }} />
                  </div>
                  <div className="col-10">

                    <h5 className="fs-4 text-primary"> 發布工作 獲取報價</h5>
                    <p className="fs-6">
                      依指示填寫需求表單，能免費發布工作，讓專業人才向你提供報價!
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-4 container-fluid container-xl">
                <div className="row">
                  <div className="col-2 "><TbBellRinging style={{ fontSize: "35px", color: "3964C3" }} />

                  </div>
                  <div className="col-10">
                    <h5 className="fs-4 text-primary">收到通知 主動報價</h5>
                    <p className="fs-6">
                      工作經審核通過後，會發布於案件工作版，平台內相關專業人才收到信件通知，並根據你的工作描述提出相應報價。
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-4 container-fluid container-xl">
                <div className="row">
                  <div className="col-2"><IoIosPeople style={{ fontSize: "35px", color: "3964C3" }} />

                  </div>
                  <div className="col-10">
                    <h5 className="fs-4 text-primary">挑選人才，輕鬆完成工作!</h5>
                    <p className="fs-6">
                      會持續以信件通知最新工作進度，也能直接連絡提供報價的專業人才。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showTalentContent && (
            <div className="talent-modal-div" >
              <div className="my-4 container-fluid container-xl">
                <div className="row">
                  <div className="col-2 pe-2"><BsPersonVcard style={{ fontSize: "35px", color: "3964C3" }} />
                  </div>
                  <div className="col-10">
                    <h5 className="fs-4 text-primary">建立個人案件</h5>
                    <p className="fs-6">
                      提供建立個人專業服務與工作背景，詳細完整的個人專頁。能夠大大提升接案的成功率!
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-4 container-fluid container-xl">
                <div className="row">
                  <div className="col-2"><FaBriefcase style={{ fontSize: "35px", color: "3964C3" }} />
                  </div>
                  <div className="col-10">
                    <h5 className="fs-4 text-primary">快速送出你的提案</h5>
                    <p className="fs-6">
                      每日更新工作案件提供最新接案機會!案主會根據你的提案報價與個人專頁決定是否採用。所有關於工作進度都會通過信件通知!
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-4 container-fluid container-xl">
                <div className="row">
                  <div className="col-2"><RiDraftLine style={{ fontSize: "35px", color: "3964C3" }} />
                  </div>
                  <div className="col-10">
                    <h5 className="fs-4 text-primary">無上限申請提案</h5>
                    <p className="fs-6">
                      免費提案報價，輕鬆接案無負擔。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Homepage;
