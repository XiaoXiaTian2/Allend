import React, { useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import LeftVerticalNavbar from "../../../RatingPage/LeftVerticalNavbar";
import "./fix.css";
import Cookies from "js-cookie";

// 修改密碼
function PasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setMessage("新密碼與確認新密碼不一致");
      return; // 返回以防止後續的 Axios 請求
    }
    const cookie = Cookies.get("token");
    axios({
      method: "post",
      url: "http://localhost/PHP/Allend/backend/public/api/resetpwd",
      data: {
        oldpassword: oldPassword,
        password: newPassword,
        password_confirmation: confirmNewPassword,
      },
      headers: {
        Authorization: "Bearer " + cookie,
      },
    })
      .then((res) => {
        console.log(res);
        // 在這裡處理成功後的邏輯
      })
      .then(() => {
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      })
      .catch((err) => {
        console.log(err);
        // 在這裡處理錯誤
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col sm={2} style={{ padding: "20px" }}>
            <LeftVerticalNavbar />
          </Col>
          <Col sm={10}>
            <Row className="justify-content-center">
              <Col sm={6} style={{ padding: "20px" }}>
                <div>
                  <h2>修改密碼</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formOldPassword">
                      <Form.Label>舊密碼：</Form.Label>
                      <Form.Control
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                        style={{ width: "100%" }}
                      />
                      <br />
                    </Form.Group>
                    <Form.Group controlId="formNewPassword">
                      <Form.Label>新密碼：</Form.Label>
                      <Form.Control
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        style={{ width: "100%" }}
                      />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formConfirmNewPassword">
                      <Form.Label>確認新密碼:</Form.Label>
                      <Form.Control
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                        style={{ width: "100%" }}
                      />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      提交
                    </Button>
                  </Form>
                  {message && <Alert variant="info">{message}</Alert>}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PasswordForm;
