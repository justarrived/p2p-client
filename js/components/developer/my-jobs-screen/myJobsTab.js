import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Text, Content, ListItem } from 'native-base';
import JobListItem from '../../common/job-list-item/jobListItem';
import { JOB_STATUS } from '../../common/constants';

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

  renderRow = job => <JobListItem title={job.title} date={job.date} status={job.status} />;

  renderSectionHeader = (sectionData, sectionID) => (
    <ListItem>
      <Text note>{sectionID}</Text>
    </ListItem>
  );

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
