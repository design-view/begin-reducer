import React from 'react';

function UserList({users,onDelete}) {
    return ( <div>
        {users.map(user=>(
            <div>이름 : {user.username}
            , 이메일 : {user.email} 
            <button onClick={()=>onDelete(user.id)}>삭제</button>
            </div>
        ))} 
    </div> );
}

export default UserList;