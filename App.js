import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Text, Content } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>App POC</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-menu' />
            </Button>
          </Right>
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="ios-navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
