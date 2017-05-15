import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Content, Button, List } from 'native-base';
import { connect } from 'react-redux';
import style from './paymentInfoStyle';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';
import I18n from '../../../i18n';

class PaymentInfoScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.payment_information'),
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
        <View style={style.addCardButton}>
          <Button block>
            <Text>{I18n.t('card.add_credit_card')}</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const mapStateToProps = state => ({ creditCards: state.creditCards });

export default connect(mapStateToProps)(PaymentInfoScreen);
