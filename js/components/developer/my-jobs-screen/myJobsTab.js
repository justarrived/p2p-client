import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content } from 'native-base';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';
import ListSectionHeader from '../../common/list-section-header/listSectionHeader';
import { JOB_STATUS } from '../../common/constants';

// Temporary logo
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class MyJobsTab extends Component {
  static propTypes = {
    data: React.PropTypes.objectOf(
      React.PropTypes.arrayOf(
        React.PropTypes.shape({
          date: React.PropTypes.string.isRequired,
          status: React.PropTypes.oneOf(Object.values(JOB_STATUS)),
          title: React.PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    ).isRequired,
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(this.props.data),
    };
  }

  renderRow = job => <AvatarListItem
    title={job.title} note={job.date}
    status={job.status} icon={{ uri: LOGO_URL }}
    navigation={this.props.navigation}
    nextScreen={'JobPreviewScreen'}
  />;

  renderSectionHeader = (sectionData, sectionID) => <ListSectionHeader title={sectionID} />;

  render() {
    return (
      <Container>
        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
          />
        </Content>
      </Container>
    );
  }
}
