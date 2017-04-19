import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, Card, CardItem, Text, Grid, Icon, Col, Row } from 'native-base';
import GlobalStyle from '../../common/globalStyle';
import WorkerProfileStyles from './workerProfileStyles';
import I18n from '../../../i18n';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';
const NAME = 'John Doe';
const PRICETOT = '500';
const PRICEHR = '100';
const RATING = '4';
const PRESENTATION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ligula euismod, vestibulum turpis eu, viverra risus.';
const LANGUAGES = 'Svenska, Engelska';
const EDUCATION = 'Nationalekonomi';
const PREVJOB = 'Banktjänsteman';

export default class WorkerInfoScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.worker_profile', { name: NAME }),
  };
  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <CardItem bordered>
              <View style={StyleSheet.flatten(WorkerProfileStyles.topRightCol)}>
                <Grid style={StyleSheet.flatten(WorkerProfileStyles.topGrid)}>
                  <Row>
                    <Col style={StyleSheet.flatten(WorkerProfileStyles.topLeftCol)} />
                    <Col style={StyleSheet.flatten(WorkerProfileStyles.topMidCol)}>
                      <Thumbnail
                        style={StyleSheet.flatten(WorkerProfileStyles.logo)} source={{
                          uri: LOGO_URL,
                        }}
                      />
                    </Col>
                    <Col style={StyleSheet.flatten(WorkerProfileStyles.topRightCol)}>
                      <Row>
                        <Text
                          style={StyleSheet.flatten(WorkerProfileStyles.ratingStyle)}
                        >{RATING}</Text>
                        <Icon style={StyleSheet.flatten(WorkerProfileStyles.starStyle)} active name="star" />
                      </Row>
                      <Row style={StyleSheet.flatten(WorkerProfileStyles.priceRow)}>
                        <Text style={StyleSheet.flatten(WorkerProfileStyles.priceStyle)}>
                          {PRICETOT} Kr{'\n'}{PRICEHR} Kr/h
                        </Text>
                      </Row>
                    </Col>
                  </Row>
                  <Text style={StyleSheet.flatten(WorkerProfileStyles.nameText)}>
                    {NAME}
                  </Text>
                </Grid>
              </View>
            </CardItem>
            <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
              <View>
                <Text note>
                  {I18n.t('worker_profile.presentation')}
                </Text>
                <Text>
                  {PRESENTATION}
                </Text>
              </View>
            </CardItem>
            <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
              <View>
                <Text note>
                  {I18n.t('worker_profile.language')}
                </Text>
                <Text>
                  {LANGUAGES}
                </Text>
              </View>
            </CardItem>
            <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
              <View>
                <Text note>
                  {I18n.t('worker_profile.education')}
                </Text>
                <Text>
                  {EDUCATION}
                </Text>
              </View>
            </CardItem>
            <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
              <View>
                <Text note>
                  {I18n.t('worker_profile.prev_work')}
                </Text>
                <Text>
                  {PREVJOB}
                </Text>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
