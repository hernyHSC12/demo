
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
      json_cliente: '',
      cliente2: "",
      listClientes2: [],
      json_cliente2: ''
    }
  }

  async componentWillMount() {
    let cliente = await ctrl.getClientes()
    let cliente2 = await ctrl.getClientesFetch()
    this.setState({
        listClientes: cliente.res.clientes_vegentes.result,
        json_cliente: JSON.stringify(cliente.res.clientes_vegentes.result),
        // json_cliente: JSON.stringify(cliente.res)
        listClientes2: cliente.res.clientes_vegentes.result,
        json_cliente2: JSON.stringify(cliente.res.clientes_vegentes.result),
      })
  }

  onValueCartera(value: string) {
    this.setState({
      cliente: value,
    });
  }
  onValueCartera2(value: string) {
    this.setState({
      cliente2: value,
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
    var cliente2 = (
      this.state.listClientes2.map((item) => {
        return (
          <Picker.Item label={item.CARTERA} value={item.CARTERA} key={item.ID_CLIENTE}/>
        )
      })
    )


    return (
      <Container>
        <Header />
        <Content>
        <Text>-----------======= Clientes ========------------</Text>
        <Text></Text>
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
          <Text></Text>
          <Text>-----------======= Clientes Fetch ========------------</Text>
          <Text></Text>
          <Text>{this.state.cliente2}</Text>
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
              selectedValue={this.state.cliente2}
              onValueChange={this.onValueCartera2.bind(this)}
              >
              <Picker.Item disabled={true} label="Seleccione cliente" value="" color="#999B9B"/>
              {cliente2}
              </Picker>
            </Item>
          </Form>
          <Text>{this.state.json_cliente2}</Text>
        </Content>
      </Container>
    );
  }
}
export default App;
