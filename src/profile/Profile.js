import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  const handleName = (fullName) => alert(`this is profil fullname ${fullName}`);

  return (
    <div>
      <h1>{props.proo.fullName}</h1>
      <h4>{props.proo.profession}</h4>
      <div>{props.children}</div>
      <p className="bio">{props.proo.bio}</p>

      <button onClick={() => handleName(props.proo.fullName)}> click</button>
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
