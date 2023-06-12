import React from 'react';
import PropTypes from 'prop-types';

const MyComponents = ({ name, children, requiredNumber }) => {
  //   const { name, children } = props;
  return (
    <div>
      My components 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다. <br />
      필수 숫자 값은 {requiredNumber} 입니다.
    </div>
  );
};

MyComponents.defaultProps = {
  name: 'default name',
};

MyComponents.propTypes = {
  name: PropTypes.string,
  requiredNumber: PropTypes.number.isRequired,
};

export default MyComponents;
