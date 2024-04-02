import React, { useState, useEffect } from 'react';

import Footer from '../homepage/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import { GoTriangleDown } from "react-icons/go";
import Category from './Category';
import NextPage from '../homepage/NextPage';
import Orderbuttom from '../homepage/Orderbuttom';
import '../../src/App.css';
import { Link, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import a1 from "../Components/img/a1.png"
import a2 from "../Components/img/a2.png"
import a4 from "../Components/img/a4.png"
import a5 from "../Components/img/a5.png"
import a6 from "../Components/img/a6.png"



function Findcase() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true)
    };



    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async (type) => {
        if (window.location.href == "http://localhost:3000/findcase") {
            let url = "http://localhost/Allend/backend/public/api/findcase?type=";



            switch (type) {
                case "網站設計":
                    url += "1";
                    break;
                case "軟體程式":
                    url += "2";
                    break;
                case "平面設計":
                    url += "3";
                    break;
                case "文字語言":
                    url += "4";
                    break;
                case "專業諮詢":
                    url += "5";
                    break;
                default:
                    break;
            }


            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data[0].type);
                    console.log(data);
                    setPosts(data);
                })


        } else {
            const f_url = window.location.href;
            let b_url = "http://localhost/Allend/backend/public/api/findcase?type=";

            console.log(f_url);
            switch (f_url) {
                case "http://localhost:3000/findcase/?type=1":
                    b_url += "1";
                    break;
                case "http://localhost:3000/findcase/?type=2":
                    b_url += "2";
                    break;
                case "http://localhost:3000/findcase/?type=3":
                    b_url += "3";
                    break;
                case "http://localhost:3000/findcase/?type=4":
                    b_url += "4";
                    break;
                case "http://localhost:3000/findcase/?type=5":
                    b_url += "5";
                    break;
            }
            fetch(b_url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setPosts(data);
                })

        }
    }





    return (
        <>
            <div className='container'>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />


                {/* 分類按鈕 */}
                <div style={{ marginLeft: '60px', marginRight: '0' }}>

                    <div className="container mt-5">
                        <div className="row justify-content-center">

                            <div className="col-sm-2 ">
                                <Link to='/findcase' onClick={() => {
                                    const { s_type } = "1";
                                    fetchData("網站設計")
                                }
                                }>
                                    <div >網站設計</div>
                                    <img src={a1} style={{ width: '60px' }}></img>
                                </Link>
                                <hr className="d-sm-none" />
                            </div>
                            <div className="col-sm-2 " >
                                <Link to='/findcase' onClick={() => fetchData("軟體程式")} >
                                    <div >軟體程式</div>
                                    <img src={a2} style={{ width: '60px' }}></img>
                                </Link>
                                <hr className="d-sm-none" />
                            </div>
                            <div className="col-sm-2 " >
                                <Link to='/findcase' onClick={() => fetchData("平面設計")} >
                                    <div >平面設計</div>
                                    <img src={a5} style={{ width: '60px' }}></img>
                                </Link>
                                <hr className="d-sm-none" />
                            </div>
                            <div className="col-sm-2 " >
                                <Link to='/findcase' onClick={() => fetchData("文字語言")} >
                                    <div >文字語言</div>
                                    <img src={a4} style={{ width: '60px' }}></img>
                                </Link>
                                <hr className="d-sm-none" />
                            </div>
                            <div className="col-sm-2" >
                                <Link to='/findcase' onClick={() => fetchData("專業諮詢")} >
                                    <div >專業諮詢</div>
                                    <img src={a6} style={{ width: '60px' }}></img>
                                </Link>
                                <hr className="d-sm-none" />
                            </div>


                        </div>
                    </div>
                </div>
                {/* 分類按鈕 */}


                <br></br>

                {/* 下拉選單 */}
                <div style={{ display: 'flex' }}>
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic">
                            地區
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => fetchData("軟體程式")}>臺北市</Dropdown.Item>
                            <Dropdown.Item >新北市</Dropdown.Item>
                            <Dropdown.Item >桃園市</Dropdown.Item>
                            <Dropdown.Item >基隆市</Dropdown.Item>
                            <Dropdown.Item >新竹市</Dropdown.Item>
                            <Dropdown.Item >新竹縣</Dropdown.Item>
                            <Dropdown.Item >彰化縣</Dropdown.Item>
                            <Dropdown.Item >南投縣</Dropdown.Item>
                            <Dropdown.Item >雲林縣</Dropdown.Item>
                            <Dropdown.Item >高雄市</Dropdown.Item>
                            <Dropdown.Item >臺南市</Dropdown.Item>
                            <Dropdown.Item >嘉義市</Dropdown.Item>
                            <Dropdown.Item >嘉義縣</Dropdown.Item>
                            <Dropdown.Item >屏東縣</Dropdown.Item>
                            <Dropdown.Item >宜蘭縣</Dropdown.Item>
                            <Dropdown.Item >花蓮縣</Dropdown.Item>
                            <Dropdown.Item >臺東縣</Dropdown.Item>
                            <Dropdown.Item >澎湖縣</Dropdown.Item>
                            <Dropdown.Item >金門縣</Dropdown.Item>
                            <Dropdown.Item >連江縣</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mx-5'>
                        <Dropdown.Toggle id="dropdown-basic">
                            案件金額
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">5000以下</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">5001~1萬</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">1萬~5萬</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">5萬~10萬</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <hr></hr>
                {/* 左上4顆按鈕 */}
                <div style={{ borderBottom: 'solid' }}>
                    <button>全部案件</button>
                    <button>短期案件</button>
                    <button>長期案件</button>
                    <button>已結案</button>
                </div>
                {/* 右下4顆按鈕 */}
                <div style={{ borderBottom: 'solid', textAlign: 'end' }}>
                    <button>最近更新<GoTriangleDown /></button>
                    <button>最新刊登<GoTriangleDown /></button>
                    <button>預算金額<GoTriangleDown /></button>
                    <button>提案人數<GoTriangleDown /></button>
                </div>



                {/* 案件欄位 */}
                <div >
                    {posts.map((post, index) => {
                        return (
                            <div >
                                <div className='row' key={index}>
                                    <Link to='/casecontext' className='col-sm-2' style={{ border: 'solid black', textDecoration: "none", color: "black" }}>
                                        {post.d_name}<br></br>
                                        案件類別:{post.type}<br></br>
                                        預算:${post.d_amount}/{post.d_unit}<br></br>
                                        地點:{post.country_city}<br></br>
                                        {post.d_duration}期<br></br>
                                        {post.updated_at}<br></br>
                                    </Link>
                                    <div className='position-relative col-sm-10' style={{ border: 'solid' }}>
                                        {post.d_description}
                                        <div className='position-absolute bottom-0 end-0'>
                                            <Button onClick={handleShow} >我要報價</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )

                    })}
                </div>

                {/* 案件欄位 */}





                {/* 我要報價頁面 */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title style={{ fontSize: 15 }} >
                            案件名稱:<span></span><hr></hr>
                            案件編號:<input></input><hr></hr>
                            案件類別:<input></input><hr></hr>
                            案件地點:<input></input><hr></hr>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>報價金額</Form.Label>
                                <Form.Control
                                    type=''
                                    placeholder="請輸入金額"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>接案人留言</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='請輸入訊息' />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={handleClose} >
                            送出
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* 我要報價頁面 */}









                <br></br>

                {/* 頁碼 */}
                <NextPage></NextPage>
            </div >
            <Footer></Footer>
        </>
    )
}

export default Findcase