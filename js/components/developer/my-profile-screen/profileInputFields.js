import React, { PropTypes } from 'react';
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

// Profile information content that can be edited
const ProfileInputFields = props =>
  <CardItem bordered style={StyleSheet.flatten(style.formContainer)}>
    <Form style={StyleSheet.flatten(style.form)}>
      <TextInput
        title={I18n.t('account.address')}
        onChange={input => props.setAddress(input)}
        disabled={props.disabled}
        defaultValue={props.attributes.street}
      />
      <Row>
        <Col>
          <PostcodeInput
            title={I18n.t('account.postal_code')}
            onChange={input => props.setPostCode(input)}
            disabled={props.disabled}
            defaultValue={props.attributes.zip}
          />
        </Col>
        <Col>
          <TextInput
            title={I18n.t('account.city')}
            onChange={input => props.setPostArea(input)}
            disabled={props.disabled}
            defaultValue={props.attributes.city}
          />
        </Col>
      </Row>
      <PhoneInput
        title={I18n.t('account.phone_number')}
        onChange={input => props.setPhoneNumber(input)}
        disabled={props.disabled}
        defaultValue={props.attributes.phone}
      />
      <EmailInput
        title={I18n.t('account.email')}
        onChange={input => props.setEmail(input)}
        disabled={props.disabled}
        defaultValue={props.attributes.email}
      />
    </Form>
  </CardItem>;

ProfileInputFields.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setPostCode: PropTypes.func.isRequired,
  setPostArea: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  attributes: PropTypes.objectOf(PropTypes.any).isRequired,
  disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  attributes: state.userEdit.attributes,
  disabled: state.userEdit.disabled,
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
