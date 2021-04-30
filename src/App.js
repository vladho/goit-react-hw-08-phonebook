import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";
import { getCurrentUser } from "./redux/auth/authOperation";
import "./App.css";

const App = ({ loading, getUser }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      {loading && "загрузка..."}
      <Header />
      <Main />
    </>
  );
};

const mapDispatchToProps = { getUser: getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
