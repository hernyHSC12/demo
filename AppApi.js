
import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, Text } from 'native-base';

import axios from 'axios'
import ctrl from './controllers/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: "",
      listClientes: [],
      json_cliente: ''
    }
  }

  async componentWillMount() {
    let cliente = await ctrl.getClientes()
    this.setState({
        listClientes: cliente.res.clientes_vegentes.result,
        json_cliente: JSON.stringify(cliente.res.clientes_vegentes.result),
        // json_cliente: JSON.stringify(cliente.res)
      })
  }

  onValueCartera(value: string) {
    this.setState({
      cliente: value,
    });
  }

  render() {
    var cliente = (
      this.state.listClientes.map((item) => {
        return (
          <Picker.Item label={item.CARTERA} value={item.CARTERA} key={item.ID_CLIENTE}/>
        )
      })
    )


    return (
      <Container>
        <Header />
        <Content>
        <Text/>
        <Text>{this.state.cliente}</Text>
          <Form>
            <Item picker>
              <Picker
              style={{ borderColor: '#CCC', borderWidth: 1}}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.cliente}
              onValueChange={this.onValueCartera.bind(this)}
              >
              <Picker.Item disabled={true} label="Seleccione cliente" value="" color="#999B9B"/>
              {cliente}
              </Picker>
            </Item>
          </Form>
          <Text>{this.state.json_cliente}</Text>
          <Text>-----------===============------------</Text>
        </Content>
      </Container>
    );
  }
}
export default App;
