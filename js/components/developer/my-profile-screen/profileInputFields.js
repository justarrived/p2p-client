import React, { PropTypes, Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Form, Col, Row, CardItem } from 'native-base';
import style from './profileInputFieldsStyle';
import EmailInput from '../../common/email-input';
import PhoneInput from '../../common/numeric-input';
import TextInput from '../../common/text-input';
import PostcodeInput from '../../common/post-code-input';
import I18n from '../../../i18n';
import { setAddress, setPostCode, setPostArea, setPhoneNumber, setEmail } from '../../../actions/userEdit';

class ProfileInputFields extends Component {

  static propTypes = {
    setAddress: PropTypes.func.isRequired,
    setPostCode: PropTypes.func.isRequired,
    setPostArea: PropTypes.func.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    attributes: PropTypes.objectOf(PropTypes.any).isRequired,
    editDisabled: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <CardItem bordered style={StyleSheet.flatten(style.formContainer)}>
        <Form style={StyleSheet.flatten(style.form)}>
          <TextInput
            title={I18n.t('account.address')}
            onChange={input => this.props.setAddress(input)}
            disabled={this.props.editDisabled}
            defaultValue={this.props.attributes.street}
          />
          <Row>
            <Col>
              <PostcodeInput
                title={I18n.t('account.postal_code')}
                onChange={input => this.props.setPostCode(input)}
                disabled={this.props.editDisabled}
                defaultValue={this.props.attributes.zip}
              />
            </Col>
            <Col>
              <TextInput
                title={I18n.t('account.city')}
                onChange={input => this.props.setPostArea(input)}
                disabled={this.props.editDisabled}
                defaultValue={this.props.attributes.city}
              />
            </Col>
          </Row>
          <PhoneInput
            title={I18n.t('account.phone_number')}
            onChange={input => this.props.setPhoneNumber(input)}
            disabled={this.props.editDisabled}
            defaultValue={this.props.attributes.phone}
          />
          <EmailInput
            title={I18n.t('account.email')}
            onChange={input => this.props.setEmail(input)}
            disabled={this.props.editDisabled}
            defaultValue={this.props.attributes.email}
          />
        </Form>
      </CardItem>
    );
  }
}

const mapStateToProps = state => ({
  attributes: state.userEdit.attributes,
  editDisabled: state.userEdit.disabled,
});

function bindAction(dispatch) {
  return {
    setAddress: input => dispatch(setAddress(input)),
    setPostCode: input => dispatch(setPostCode(input)),
    setPostArea: input => dispatch(setPostArea(input)),
    setPhoneNumber: input => dispatch(setPhoneNumber(input)),
    setEmail: input => dispatch(setEmail(input)),
  };
}

export default connect(mapStateToProps, bindAction)(ProfileInputFields);
