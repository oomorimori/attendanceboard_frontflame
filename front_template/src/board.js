import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
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
  return (
    <Box display="flex" justifyContent="center" >
        {props.boardData}
    </Box>
  )

}
function createBoardData (personList) {
  const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  };
  var cardColorA = "";
  var cardColorB = "";
  var cardColorC = "";

  var boardData = [];
  personList.map( (val, idx) => {
    switch(val.state) {
      case "出勤" :
        cardColorA = 'secondary.main';
        cardColorB = 'text.primary';
        cardColorC = 'text.primary';
        break;
      case "休憩" :
        cardColorA = 'text.primary';
        cardColorB = 'secondary.main';
        cardColorC = 'text.primary';
        break;
      case "退勤" :
        cardColorA = 'text.primary';
        cardColorB = 'text.primary';
        cardColorC = 'secondary.main';
        break;
      default :
        console.log("error");
    }
    boardData.push(
        <Box {...defaultProps}>{val.name}</Box>
    );
    boardData.push(
      <Box borderColor={cardColorA} {...defaultProps} />
    );
    boardData.push(
      <Box borderColor={cardColorB} {...defaultProps} />
    );
    boardData.push(
        <Box borderColor={cardColorC} {...defaultProps} />

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
      <RenderBoard boardData={boardData}/>
    </div>
  );

}

export default Board;
