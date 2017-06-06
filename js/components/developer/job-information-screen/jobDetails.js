import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import PreviewJobCard from '../../common/preview-job-card/previewJobCard';
import GlobalStyle from '../../../resources/globalStyle';
import JAButton from '../../common/ja-button';
import { JA_BUTTON } from '../../../resources/constants';
import { navigate } from '../../../actions/navigation';
import I18n from '../../../i18n';

// Screen shown during job creation, with a preview of the job.
class JobDetails extends Component {
  static propTypes = {
    jobJson: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    navigate: React.PropTypes.func,
  };

  static defaultProps = {
    navigate: undefined,
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <PreviewJobCard
            jobJson={this.props.jobJson.attributes}
          />
          <JAButton
            content={I18n.t('button_actions.mark_as_completed')}
            actionOnClick={() => this.props.navigate('RateWorkScreen')}
            typeOfButton={JA_BUTTON.PRIMARY}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
  };
}

const mapStateToProps = state => ({ navigation: state.navigation });

export default connect(mapStateToProps, bindAction)(JobDetails);
