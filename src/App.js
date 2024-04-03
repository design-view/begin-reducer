import { useReducer } from 'react';
import './App.css';
import UserList from './components/UserList';

//초기상태
const initialState = {
  inputs:{
    username: "",
    email: ""
  },
  users:[
    {id:1, username: "green", email:"green@naver.com"},
    {id:2, username: "pink", email:"pink@naver.com"},
    {id:3, username: "blue", email:"blue@naver.com"},
  ]
}
//리듀서함수  ---> 상태를 업데이트해서 리턴
//삭제경우 ----> users배열 해당 user항목 삭제
//REMOVE_USER
function reducer(state,action){
   switch(action.type){
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user=>user.id !== action.id)
      };
    default: return state;
   } 
}
function App() {
  const [state, dispatch] = useReducer(reducer,initialState); //===>배열 [state,dispatch]
  const { users } = state;
  const onDelete = (id) => {
      dispatch({
        type:'REMOVE_USER',
        id: id
      })
  }
  return (
    <div className="App">
        <UserList users={users} onDelete={onDelete}/>
    </div>
  );
}

export default App;
