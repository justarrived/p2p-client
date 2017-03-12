import React, { Component } from 'react';
import { Content, Card, CardItem, Body } from 'native-base';
import KnownLanguages from './knownLanguages';

// Temporary array with languages
const LANGUAGES = [{ name: 'Swedish', id: 1 }, { name: 'English', id: 2 },
  { name: 'Portuguese', id: 3 }, { name: 'Dutch', id: 4 },
  { name: 'Swahili', id: 5 }, { name: 'Norwegian', id: 6 },
  { name: 'German', id: 7 }, { name: 'Danish', id: 8 },
  { name: 'Finish', id: 9 }];

export default class LanguagePicker extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      myLanguages: [1, 6],
    };
  }

  // Get a list with the name of all selected languages
  getMyLanguageNames() {
    return Array.from(
      LANGUAGES.filter(languageObject =>
        this.state.myLanguages.includes(languageObject.id),
      ),
      languageObject => languageObject.name);
  }

  // Render the component
  render() {
    return (
      <Content>
        <Card bordered="true">
          <CardItem bordered="true" >
            <Body >
              <KnownLanguages languages={this.getMyLanguageNames()} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
