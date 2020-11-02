import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <Layout>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h2 className="card-title text-center pt-4 pb-4">Signin</h2>
            <div className="card-body">
              <SigninComponent />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
