import { Fragment, useState, useEffect } from "react";
import Router from "next/router";
import { authenticate, signin, isAuth } from "../../actions/auth";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });

    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          setValues({ ...values, error: data.error });
        } else {
          // Save user token to cookie

          // Save user info to localstorage

          // Authenticate user
          authenticate(data, () => {
            Router.push(`/`);
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading....</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type your email"
          />
        </div>

        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>

        <div>
          <button className="btn btn-primary w-100 mb-3">Signup</button>
        </div>
      </form>
    );
  };

  return (
    <Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}

      {showForm && signinForm()}
    </Fragment>
  );
};

export default SigninComponent;
