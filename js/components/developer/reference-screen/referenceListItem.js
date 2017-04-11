import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, Thumbnail, Row, ListItem, Icon, Grid, Col } from 'native-base';
import ReferenceStyles from './referenceStyles';


export default class referenceListItem extends Component {

  static propTypes = {
    reference: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string.isRequired,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.shape({ uri: React.PropTypes.string.isRequired }),
    ]).isRequired,
  }

  render() {
    return (
      <ListItem style={StyleSheet.flatten(ReferenceStyles.listItemStyle)}>
        <Thumbnail
          style={StyleSheet.flatten(ReferenceStyles.pictureStyle)} source={this.props.icon}
        />
        <Grid>
          <Col style={StyleSheet.flatten(ReferenceStyles.leftColStyle)}>
            <TextInput
              multiline
              numberOfLines={4}
              editable={false}
              style={StyleSheet.flatten(ReferenceStyles.textboxStyle)}
            >
              {this.props.reference}{'\n'}{'- '}{this.props.author}
            </TextInput>
          </Col>
          <Col style={StyleSheet.flatten(ReferenceStyles.rightColStyle)}>
            <Row>
              <Text style={StyleSheet.flatten(ReferenceStyles.dateStyle)}>
                {this.props.date}
              </Text>
            </Row>
            <Row style={ReferenceStyles.ratingRowStyle}>
              <Text style={StyleSheet.flatten(ReferenceStyles.ratingStyle)}>
                {this.props.rating}
              </Text>
              <Icon style={StyleSheet.flatten(ReferenceStyles.starStyle)} active name="star" />
            </Row>
          </Col>
        </Grid>
      </ListItem>
    );
  }
}
