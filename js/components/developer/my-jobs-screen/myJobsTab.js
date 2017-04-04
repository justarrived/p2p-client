import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content } from 'native-base';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';
import ListSectionHeader from '../../common/list-section-header/listSectionHeader';

// Temporary logo, TODO replace with real icon.
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class MyJobsTab extends Component {

  // TODO Improve typechecking
  static propTypes = {
    data: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    toNextScreen: React.PropTypes.func.isRequired,
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

  // TODO Read job status from API and pass to status.
  // Also replace icon with actual icon.
  renderRow = job => <AvatarListItem
    title={job.attributes.name} note={job.attributes.street}
    status={'Aktiv'} icon={{ uri: LOGO_URL }}
    toNextScreen={this.props.toNextScreen}
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
