import AppRoutes from "./AppRoutes";
import Layout from "./Layout";
import "./styles/app.scss";

const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
