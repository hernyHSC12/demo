import React, { Component } from 'react'
import axios from 'axios'
// import https from 'https';

class ctrlHome extends React.Component {

  static getClientes() {
    return new Promise(function(resolve, reject) {

      var uri = "https://www.gabssa.app/negociaciones/negociacion/recursos";
      var metodo = "POST";
      var api_key = "8bd7fb1c-cef6-41ea-872e-5fa77ea0ea22"
      var data = {}

      axios({
        method: metodo,
        url: uri,
        data: {},
        headers: { Authorization: api_key }
      }).then((res) => {
        resolve({ res: res.data })
      })
      .catch((res) => {
        resolve({ res: res })
      })
      // .catch(error => console.log(error));

    });
  }
  static getClientesFetch() {
    return new Promise(function(resolve, reject) {
      var uri = "https://www.gabssa.app/negociaciones/negociacion/recursos";
      var api_key = "8bd7fb1c-cef6-41ea-872e-5fa77ea0ea22"
      var data = {}

      fetch(uri, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': api_key
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
      .then((responseJson) => {
        resolve({ res: responseJson })
      })
      .catch((error) =>{
        resolve({ res: error })
        console.error(error);
      });

    });
  }

}
export default ctrlHome;
