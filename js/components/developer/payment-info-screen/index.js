import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Content, Button, List } from 'native-base';
import { connect } from 'react-redux';
import paymentInfoScreenStyle from './paymentInfoScreenStyle';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';

class PaymentInfoScreen extends Component {
  static navigationOptions = {
    title: 'Payment Information',
  };

  // TODO Improve typechecking
  static propTypes = {
    creditCards: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  renderRow = card => <AvatarListItem title={card.cardNumber} note={card.brand} icon={card.icon} />

  render() {
    return (
      <Content>
        <List dataArray={this.props.creditCards.data} renderRow={this.renderRow} />
        <View style={paymentInfoScreenStyle.addCardButton}>
          <Button block>
            <Text>Lägg Till Kort</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const mapStateToProps = state => ({ creditCards: state.creditCards });

export default connect(mapStateToProps)(PaymentInfoScreen);
