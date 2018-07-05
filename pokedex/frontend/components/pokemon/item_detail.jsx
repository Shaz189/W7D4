import React from 'react';
import { connect } from 'react-redux';

class ItemDetail extends React.Component {
  constructor () {
    super();
  }

  render () {
    const item = this.props.item;
    return (
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.happiness}</li>
        <img src={item.image_url} />
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.itemId;
  const item = state.entities.items[id];
  return {
    item
  };
};

export default connect(
  mapStateToProps
)(ItemDetail);
