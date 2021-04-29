import React, { useEffect } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import { getCurrentUser } from "../redux/auth/authOperation";

const ContactsPage = ({ getUser }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);
  return <ContactForm />;
};

const mapDispatchToProps = { getUser: getCurrentUser };

export default connect(null, mapDispatchToProps)(ContactsPage);
