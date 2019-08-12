// Component設計
// - App
//   - Header
//   - Board
//     - MenberNames
//     - MenberStates
//       - State
//   - Footer
import React from 'react';
import axios from 'axios';
import Header from './header.js';
import Footer from './footer.js';
import Board from './board.js';
import './App.css';//画面スクロール無くしたい

const PERSON_LIST_ENDPOINT = 'http://127.0.0.1:1337/api/v1/';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      personList: []
    };
  }

  componentDidMount(){
    // 第一引数に与えられた関数を、第二引数に与えられた間隔で実行
    this.timer = setInterval(()=> this.getPersonList(), 1000);
  }
  componentWillUnmount() {
    this.timer = null;
  }

  getPersonList(){// メンバーのリストをAPIサーバーからGET
    axios
      .get(PERSON_LIST_ENDPOINT, {})
      .then((results) => {
        var json = results.data;
        this.setState({ personList:json.person_list });
      },
      )
      .catch(() => {
        console.log('通信に失敗しました。');
      });
  }

  render(){
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="board">
          <Board personList={this.state.personList} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
