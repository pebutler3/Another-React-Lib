import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = props => {
  let {
    boxShadow,
    cardHeight,
    description,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    title
  } = props;

  return (
    <div
      className={`card elevation--${boxShadow}`}
      style={{
        height: cardHeight,
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
      }}>
      <div className="card-header">{title}</div>
      <p className="card-description">{description}</p>
    </div>
  );
};

Card.defaultProps = {
  boxShadow: 1,
  cardHeight: 300,
  description: 'Description',
  marginTop: 10,
  marginRight: 10,
  marginBottom: 10,
  marginLeft: 10,
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  title: 'Title'
};

Card.propTypes = {
  boxShadow: PropTypes.number,
  cardHeight: PropTypes.number,
  description: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Card;
