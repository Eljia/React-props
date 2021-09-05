import React from "react";
import PropTypes from "prop-types";

const Profile = ({ props, adresse }) => {
  const handleName = (fullName) => alert(`this is profil fullname ${fullName}`);

  return (
    <div>
      adresse :{adresse}
      <h1>{props.profil.fullName}</h1>
      <p>{props.profil.bio}</p>
      <span>{props.profil.profession}</span>
      <div>{props.children}</div>
      <button onClick={() => handleName(props.profil.fullName)}></button>
    </div>
  );
};
Profile.defaultProps = {
  adresse: "default adr",
};
Profile.propTypes = {
  handleName: PropTypes.func,
  fullName: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
