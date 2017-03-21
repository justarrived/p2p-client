import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Form,
  Col,
  Row,
  Button,
  Thumbnail,
} from 'native-base';
import styles from './style';
import EmailInput from '../../common/email-input';
import PhoneInput from '../../common/numeric-input';
import PasswordInput from '../../common/password-input';
import TextInput from '../../common/text-input';
import PostcodeInput from '../../common/post-code-input';
import { changeFirstName, changeLastName, changeAddress,
   changePostCode, changePostArea, changePhoneNumber, changeEmail, changePassword, toggleInputDisabled } from '../../../actions/account';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';


class PersonalInfoScreen extends React.Component {

  static propTypes = {
    toggleInputDisabled: React.PropTypes.func.isRequired,
    changeFirstName: React.PropTypes.func.isRequired,
    changeLastName: React.PropTypes.func.isRequired,
    changeAddress: React.PropTypes.func.isRequired,
    changePostCode: React.PropTypes.func.isRequired,
    changePostArea: React.PropTypes.func.isRequired,
    changePhoneNumber: React.PropTypes.func.isRequired,
    changeEmail: React.PropTypes.func.isRequired,
    changePassword: React.PropTypes.func.isRequired,
    account: React.PropTypes.shape({
      firstName: React.PropTypes.string,
      lastName: React.PropTypes.string,
      address: React.PropTypes.string,
      postCode: React.PropTypes.string,
      postArea: React.PropTypes.string,
      phoneNumber: React.PropTypes.string,
      email: React.PropTypes.string,
      password: React.PropTypes.string,
      userAgreement: React.PropTypes.bool,
      disabled: React.PropTypes.boolean,
    }).isRequired,
  }


  pressedRegister() {
    const a = this.props.account;
    alert(
          ` Förnamn: ${a.firstName}`
        + `\n Efternamn: ${a.lastName}`
        + `\n Adress: ${a.address}`
        + `\n postnummer: ${a.postCode}`
        + `\n Ort: ${a.postArea}`
        + `\n Telefonnumer: ${a.phoneNumber}`
        + `\n Epost: ${a.email}`
        + `\n checked: ${a.userAgreement}`,
        +`\n Lösenord: ${a.password}`,
      );
  }

  render() {
    return (
      <Container>
        <Content padder>
          <View style={StyleSheet.flatten(styles.topContainer)}>
            <View style={styles.logoContainer}>
              <Thumbnail
                style={StyleSheet.flatten(styles.logo)} source={{
                  uri: LOGO_URL,
                }}
              />
            </View>
            <Text style={StyleSheet.flatten(styles.nameText)}>
              <Text>{this.props.account.firstName} {this.props.account.lastName}</Text>
            </Text>
          </View>
          <Form style={StyleSheet.flatten(styles.fromContainer)}>
            <TextInput title="Adress" onChange={input => this.props.changeAddress(input)} disable={this.props.account.disabled} />

            <Row>
              <Col>
                <PostcodeInput title="Postnummer" onChange={input => this.props.changePostCode(input)} disable={this.props.account.disabled} defaultValue="55555" />
              </Col>
              <Col>
                <TextInput title="Ort" onChange={input => this.props.changePostArea(input)} disable={this.props.account.disabled} defaultValue="Test" />
              </Col>
            </Row>


            <PhoneInput title="Telefonnumer: " onChange={input => this.props.changePhoneNumber(input)} disable={this.props.account.disabled} defaultValue="2626262" />
            <EmailInput title="E-post adress:" onChange={input => this.props.changeEmail(input)} disable={this.props.account.disabled} defaultValue="Test" />
            <PasswordInput title="Lösenord: " onChange={input => this.props.changePassword(input)} disable={this.props.account.disabled} defaultValue="Test" />
          </Form>
          <View style={StyleSheet.flatten(styles.buttonContainer)}>
            <Button full info rounded onPress={() => this.props.toggleInputDisabled()}>
              <Text style={StyleSheet.flatten(styles.regButtonText)}>
                ÄNDRA
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


function bindAction(dispatch) {
  return {
    changeFirstName: input => dispatch(changeFirstName(input)),
    changeLastName: input => dispatch(changeLastName(input)),
    changeAddress: input => dispatch(changeAddress(input)),
    changePostCode: input => dispatch(changePostCode(input)),
    changePostArea: input => dispatch(changePostArea(input)),
    changePhoneNumber: input => dispatch(changePhoneNumber(input)),
    changeEmail: input => dispatch(changeEmail(input)),
    changePassword: input => dispatch(changePassword(input)),
    toggleInputDisabled: () => dispatch(toggleInputDisabled()),
  };
}

const mapStateToProps = state => ({ account: state.account });

export default connect(mapStateToProps, bindAction)(PersonalInfoScreen);

/*

*/
