import React from "react";

function Hello({name,color,isSpecial}){
    return (
        <div style={{color:color}}>
            {isSpecial ? <span>***</span> : null}
            안녕하세요{name}
        </div>
    )
}
Hello.defaultProps = {
    name: "이름없음"
}
export default Hello;