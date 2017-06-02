import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Content, Button, List } from 'native-base';
import { connect } from 'react-redux';
import style from './paymentInfoStyle';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';
import I18n from '../../../i18n';
import PaymentModal from './paymentModal';

class PaymentInfoScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.payment_information'),
  };

  // TODO Improve typechecking
  static propTypes = {
    creditCards: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedCard: null, // TODO Handle selected card state using Redux
      amount: '300 SEK',  // TODO Replace with real amount
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  selectCard(card) {
    this.setState({ selectedCard: card });
    this.setModalVisible(true);
  }

  renderRow = card =>
    <AvatarListItem
      title={card.cardNumber}
      note={card.brand}
      icon={card.icon}
      toNextScreen={() => this.selectCard(card)}
    />

  render() {
    return (
      <Content>
        <PaymentModal
          visible={this.state.modalVisible}
          setModalVisible={visible => this.setModalVisible(visible)}
          onRequestClose={() => this.setModalVisible(false)}
          data={{ creditCard: this.state.selectedCard, amount: this.state.amount }}
        />
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
