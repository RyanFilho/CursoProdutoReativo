import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    user: PropTypes.object,
    list: PropTypes.array,
    dispatch: PropTypes.func,
  }

  render() {
    const { user, list, dispatch } = this.context;
    const { component, defaultProps } = this.props;
    const props = {
      user,
      list,
      dispatch,
      ...defaultProps,
    };
    return React.createElement(
      component,
      props
    );
  }
}

const connect = (component) => {
  return (props) => (
    <Wrapper defaultProps={props} component={component} />
  );
}

export default connect;
