import SignupComponent from "../components/auth/SignupComponent";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h2 className="card-title text-center pt-4 pb-4">Signup</h2>
            <div className="card-body">
              <SignupComponent />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
