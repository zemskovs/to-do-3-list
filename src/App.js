import React, { Component } from 'react';
import ReactDom from 'react-dom'
import 'hack'
import SimpleStorage from 'react-simple-storage'
import { Header } from './components/Header'
import { Textbox } from './components/Textbox'
import { DisplayToday, DisplayTomorrow, DisplayDayAfterTomorrow  } from './components/Display'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'Today': [],
      'Tomorrow': [],
      'Day_After_Tomorrow': [],
      'username': "Hi Someone!"

    }

    this.updateEntry = this.updateEntry.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
  }

  updateEntry(term, day){
    if(day === 'Today'){
        this.setState({
            'Today' : [...this.state.Today, term],
        })
    }else if(day === 'Tomorrow'){
        this.setState({
            'Tomorrow' : [...this.state.Tomorrow, term],
        })
    }else if(day === 'Day_After_Tomorrow'){
      this.setState({
      'Day_After_Tomorrow' : [...this.state.Day_After_Tomorrow, term],
    })
    }
  }

  deleteEntry(index, day) {
    if (day === 'Today') {
      let filterList = this.state.Today.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      })
      this.setState({
        'Today': filterList
      });
    } else if (day === 'Tomorrow') {
      let filterList = this.state.Tomorrow.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      })
      this.setState({
        'Tomorrow': filterList
      });
    } else if (day === 'Day_After_Tomorrow') {
      let filterList = this.state.Day_After_Tomorrow.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      })
      this.setState({
        'Day_After_Tomorrow': filterList
      });
    } else {
      console.log('что то пошло не так с удалением');
    }
  }

  render() {
    return (
      <div>
      
        <Header nam={this.state.username} />
        <Textbox updateEntry={this.updateEntry} />
        <hr />
        <div className="grid">
          <DisplayToday items={this.state.Today} deleteItem={this.deleteEntry} />
          <DisplayTomorrow items={this.state.Tomorrow} deleteItem={this.deleteEntry} />
          <DisplayDayAfterTomorrow items={this.state.Day_After_Tomorrow} deleteItem={this.deleteEntry} />
        </div>
        <SimpleStorage parent={this} />
      </div>
    );
  }
}

export default App;
