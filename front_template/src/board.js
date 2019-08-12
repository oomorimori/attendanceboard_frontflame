import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const boardElements = ["名前","出勤","休憩","退勤"];
var useStyles = makeStyles({
  board: {
    flexGrow: 1,
  },
  nameList:{},
  stateList:{},
  card:{},
});
// メンバーの名前をlistにしてレンダリングするコンポーネント
// function MenberNames(props){
//   var nameList = props.personList.map( (val,idx)=> // <li></li>のHTMLを生成
//     <li key={idx}>{val.name}</li>
//   );
//   return (
//     <ul>{nameList}</ul>
//
//   );
// }

function RenderBoard (props) {
  return <GridList cols={4}>{props.boardData}</GridList>
}
function createBoardData (personList) {
  var cardColorA = {};
  var cardColorB = {};
  var cardColorC = {};

  var boardData = [];
  personList.map( (val, idx) => {
    switch(val.state) {
      case "出勤" :
        cardColorA.backgroundColor = '#FF0000';
        cardColorB.backgroundColor = '#FFFFFF';
        cardColorC.backgroundColor = '#FFFFFF';
        break;
      case "休憩" :
        cardColorA.backgroundColor = '#FFFFFF';
        cardColorB.backgroundColor = '#FF0000';
        cardColorC.backgroundColor = '#FFFFFF';
        break;
      case "退勤" :
        cardColorA.backgroundColor = '#FFFFFF';
        cardColorB.backgroundColor = '#FFFFFF';
        cardColorC.backgroundColor = '#FF0000';
        break;
      default :
        console.log("error");
    }
    boardData.push(
      <GridListTile>
        <Card >
          <CardContent><Typography>{val.name}</Typography></CardContent>
        </Card>
      </GridListTile>
    );
    boardData.push(
      <GridListTile>
        <Card style={cardColorA}>
          <CardContent>
          <Typography>B</Typography>
          </CardContent>
        </Card>
      </GridListTile>
    );
    boardData.push(
      <GridListTile>
        <Card className={cardColorB}>
          <CardContent><Typography>B</Typography></CardContent>
        </Card>
      </GridListTile>
    );
    boardData.push(
      <GridListTile>
        <Card className={cardColorC}>
          <CardContent><Typography>C</Typography></CardContent>
        </Card>
      </GridListTile>
    );
  });
  return boardData;
}

// マグネットボードの状態のルートコンポーネント
function Board(props) {
  const classes = useStyles();
  var personList = props.personList; // [{"name":"","state":""}, {…}, {…}]
  var boardData = createBoardData(personList);
  return (
    <div className={classes.board}>
      <GridList cols={4} className={classes.board}>
        {
          boardElements.map( (val, idx) => {
          return (
            <GridListTile key={idx}>
                  <Card className={classes.card}>
                    <CardContent><Typography>{val}</Typography></CardContent>
                  </Card>
            </GridListTile>
          )}
          )
        }
      </GridList>
      <div className={classes.cardList}>
        <RenderBoard  boardData={boardData}/>
      </div>
    </div>
  );

}

export default Board;
