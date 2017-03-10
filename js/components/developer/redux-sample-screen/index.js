import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, Button } from 'native-base';
import { changeName } from '../../../actions/person';
import { increaseAge } from '../../../actions/person';
import { decreaseAge } from '../../../actions/person';

class ReduxSampleScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Redux Sample Screen',
  };

  static propTypes = {
    changeName: React.PropTypes.func.isRequired,
    increaseAge: React.PropTypes.func.isRequired,
    decreaseAge: React.PropTypes.func.isRequired,
    person: React.PropTypes.shape({
      name: React.PropTypes.string,
      age: React.PropTypes.number,
      lang: React.PropTypes.arrayOf(React.PropTypes.string),
    }).isRequired,
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Person name is: {this.props.person.name}</Text>
          <Text>Person age is: {this.props.person.age}</Text>
          {this.props.person.lang.map((lang, i) => <Text key={lang.concat(i)}>{lang}</Text>)}
          <Button onPress={() => this.props.changeName('Anton')}>
            <Text>Change name to Anton</Text>
          </Button>
          <Button onPress={() => this.props.increaseAge()}>
            <Text>Age +1</Text>
          </Button>
          <Button onPress={() => this.props.decreaseAge()}>
            <Text>Age -1</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    changeName: name => dispatch(changeName(name)),
    increaseAge: () => dispatch(increaseAge()),
    decreaseAge: () => dispatch(decreaseAge()),
  };
}

const mapStateToProps = state => ({ person: state.person });

export default connect(mapStateToProps, bindAction)(ReduxSampleScreen);
