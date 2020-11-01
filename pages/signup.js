import Layout from "../components/Layout";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <h2>Signup Content Page</h2>
      <Link href="/">
        <a>Homepage</a>
      </Link>
    </Layout>
  );
};

export default Signup;
