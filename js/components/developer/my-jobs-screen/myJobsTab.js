import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content } from 'native-base';
import moment from 'moment';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';
import ListSectionHeader from '../../common/list-section-header/listSectionHeader';
import JASpinner from '../../common/ja-spinner/JASpinner';
import { getTaskIcon } from '../../../util/task-graphics-getter';
import { selectOwnedJob } from '../../../actions/ownedJobs';
import I18n from '../../../i18n';

class MyJobsTab extends Component {

  // TODO Improve typechecking
  // TODO use onRefresh to download new data
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    onRefresh: React.PropTypes.func.isRequired,
    data: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    selectJob: React.PropTypes.func.isRequired,
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

  // TODO set list data properly
  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.setState({
      dataSource: ds.cloneWithRowsAndSections(nextProps.data),
    });
  }

  selectJob(jobJson) {
    this.props.selectJob(jobJson);
    this.props.toNextScreen();
  }

  // TODO Replace getTaskIcon() when API supports icons.
  renderRow = job =>
    <AvatarListItem
      title={job.attributes.name}
      note={moment(job.attributes.job_date).calendar()}
      status={'Aktiv'}
      icon={getTaskIcon(job.attributes.name)}
      toNextScreen={() => this.selectJob(job)}
    />;

  renderSectionHeader = (sectionData, sectionID) =>
    <ListSectionHeader title={I18n.t(sectionID)} />;

  render() {
    if (this.props.loading) {
      return <JASpinner />;
    }
    return (
      <Container>
        <Content>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.ownedJobs.loading,
});

function bindAction(dispatch) {
  return {
    selectJob: jobJson => dispatch(selectOwnedJob(jobJson)),
  };
}

export default connect(mapStateToProps, bindAction)(MyJobsTab);
