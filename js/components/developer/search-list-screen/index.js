import React from 'react';
import { Container, Content, Text } from 'native-base';
import SearchList from '../common/searchList';

const DATA = ['abc', 'bcd', 'cde', 'def', 'efg', 'fgh', 'ghi',
  'hij', 'hik', 'ikl', 'klm', 'lmn', 'mno', 'nop', 'opq', 'pqr',
  'qrs', 'rst', 'stu', 'tuv', 'uvw', 'vwx', 'wxy', 'xyz'];

const FILTER = (dataArray, query) =>
  dataArray.filter(dataItem =>
        dataItem.toLowerCase().includes(query.toLowerCase()));

// Example screen containing a SearchList
export default class SearchListScreen extends React.Component {
  static navigationOptions = {
    title: 'Search List',
  };

  render() {
    return (
      <Container>
        <Content>
          <SearchList
            dataArrayFilter={FILTER}
            dataArray={DATA}
            renderRow={rowData => <Text>{rowData}</Text>}
          />
        </Content>
      </Container>
    );
  }
}
