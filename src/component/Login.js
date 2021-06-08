import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../Action/UserAction";

function Login({ history }) {
  // states
  const [submit, setSubmit] = useState("sign in");
  // sign in state
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  // sign up state
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regpassword, setRegPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading: regLoadin,
    error: regError,
    userInfo: regUserInfo,
  } = userRegister;
  console.log(`regError`, regError);
  const redirect = "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
    if (regUserInfo) {
      history.push(redirect);
    }
    console.log(`loginemail`, loginemail);
    console.log(`loginpassword`, loginpassword);
  }, [history, regUserInfo, userInfo, redirect, loginemail, loginpassword]);

  const submitHandlerLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginemail, loginpassword));
  };

  const submitHandlerReg = (e) => {
    e.preventDefault();
    dispatch(register(name, regEmail, regpassword));
  };

  return (
    <div className="login  container-fluid main-section">
      <div className="row">
        <h1 className="text-danger">{error && error}</h1>
        <div className="border p-5 col-7 m-auto">
          <form>
            {submit === "sign in" ? (
              // ************Login*************
              <div>
                <input
                  type="email"
                  style={{
                    borderRadius: "5px",
                    padding: "5px",
                    background: "white",
                    margin: "10px 0px",
                    width: "100%",
                    border: "1px solid #9ac100",
                  }}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  value={loginemail}
                  placeholder="Email"
                />

                <input
                  style={{
                    borderRadius: "5px",
                    padding: "5px",
                    background: "white",
                    margin: "10px 0px",
                    width: "100%",
                    border: "1px solid #9ac100",
                  }}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  value={loginpassword}
                  placeholder="Password"
                />

                <input
                  style={{ width: "100%" }}
                  className="btn btn-custome"
                  onClick={submitHandlerLogin}
                  type="submit"
                />
                <div className="mt-2 row px-3">
                  <div className="col-6">
                    <button
                      style={{ width: "100%" }}
                      className="mr-1 btn btn-custome1"
                    >
                      Google
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      style={{ width: "100%" }}
                      className="ml-1 btn btn-custome1"
                    >
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // ************Login*************

              <div>
                <h1> {regError ? regError : ""}</h1>
                <input
                  style={{
                    borderRadius: "5px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    width: "100%",
                    border: "1px solid #9ac100",
                  }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="First name"
                />
                <input
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid #9ac100",
                  }}
                  onChange={(e) => setRegEmail(e.target.value)}
                  value={regEmail}
                  placeholder="Email"
                />
                <input
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid #9ac100",
                  }}
                  onChange={(e) => setRegPassword(e.target.value)}
                  value={regpassword}
                  placeholder="Password"
                />
                {/* <input
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid #9ac100",
                  }}
                  placeholder="Password"
                /> */}
                <input
                  style={{ width: "100%" }}
                  className=" btn-custome"
                  type="submit"
                  onClick={submitHandlerReg}
                />
              </div>
            )}
          </form>
          <div className="mt-2 row px-3">
            <div className="col-6">
              <button
                style={{ width: "100%" }}
                className="mr-1 mt-2 text-primary  btn-custome"
                onClick={() => setSubmit("sign up")}
              >
                Sign up
              </button>
            </div>
            <div className="col-6">
              <button
                style={{ width: "100%" }}
                className="ml-1  mt-2 text-primary btn-custome"
                onClick={() => setSubmit("sign in")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
