import React, { Component } from 'react';
import { Form, Content, List } from 'native-base';
import { connect } from 'react-redux';
import { navigate } from '../../../actions/navigation';
import WorkerListItem from './workerListItem';
import I18n from '../../../i18n';

// Temporary data. Will be handled in another way in the future.
const REFERENCES = [
  { author: 'Jake Weary', price: '500 kr' },
  { author: 'Samuel Serif', rating: '3', price: '350 kr' },
  { author: 'Ruby von Rails', rating: '2', price: '150 kr' },
];

class ChooseWorkerScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.choose_worker'),
  };

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  }

  // TODO Navigate to WorkerProfileScreen and display correct information for the selected worker
  renderRow = reference =>
    <WorkerListItem
      author={reference.author} rating={reference.rating}
      price={reference.price} icon={{ uri: `https://api.adorable.io/avatars/80/${reference.author}` }}
      goToWorkerProfile={() => this.props.navigate('WorkerProfileScreen')}
    />

  render() {
    return (
      <Content>
        <Form>
          <List dataArray={REFERENCES} renderRow={this.renderRow} />
        </Form>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
  };
}

const mapStateToProps = state => ({ navigation: state.navigation });

export default connect(mapStateToProps, bindAction)(ChooseWorkerScreen);
