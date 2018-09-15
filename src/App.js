import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    news : []
  }

  componentDidMount(){
      this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {
      const country = 'ar';
      const apiKey = 'bf52b58bb27244f1b8311ba6832ad7b0';

      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoria}&apiKey=${apiKey}`;


      fetch(url)
        .then(res => {
            return res.json();
        })
        .then(news => {
          this.setState({
            news : news.articles
          });
        })
  }

  render() {
    return (
      <div className="App">
        <Header
          titulo='Noticias'
          />

        <div className='container white contenedor-noticias'>
          <Formulario
              consultarNoticias={this.consultarNoticias}
            />
          <News
              news={this.state.news}
              />
        </div>
      </div>
    );
  }
}

export default App;
