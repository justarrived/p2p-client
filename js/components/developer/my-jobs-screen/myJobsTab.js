import React, { Component } from 'react';
import { Container, Text, Content, ListItem } from 'native-base';
import JobListItem from '../../common/job-list-item/jobListItem';
import { JOB_STATUS } from '../../common/constants';

export default class MyJobsTab extends Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string,
        jobs: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            title: React.PropTypes.string,
            date: React.PropTypes.string,
            status: React.PropTypes.oneOf(Object.values(JOB_STATUS)),
          })),
      }),
    ).isRequired,
  };

  render() {
    const listItems = [];
    this.props.data.forEach((jobGroup, i) => {
      const jobs = [];
      jobGroup.jobs.forEach((job, j) => {
        const jobId = `${job.title}-${i}-${j}`;
        jobs.push(
          <JobListItem key={jobId} title={job.title} date={job.date} status={job.status} />,
        );
      });

      const headerId = `${jobGroup.title}-${i}`;
      listItems.push(
        <ListItem itemheader key={headerId}>
          <Text>{jobGroup.title}</Text>
        </ListItem>
        , jobs,
      );
    });

    return (
      <Container>
        <Content>
          {listItems}
        </Content>
      </Container>
    );
  }
}
