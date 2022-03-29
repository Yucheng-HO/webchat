import React, { useEffect, useState } from "react";

function Message(props) {
  const [msg, setMsg] = useState(props.message);

  useEffect(() => {
    setMsg(props.message);
    // console.log(props.message)
  }, [props]);

  const msgName = (data) => {
    let Name = data.split('"')[3];
    return Name;
  };
  const msgContent = (data) => {
    let Content = data.split('"')[7];
    return Content;
  };

  const divTest = (msg) => {
    if(msgName(msg) === 'body') {
      return (<div className="tip_message">{msg.split('"')[5]}</div>)
    } else if (props.username === msgName(msg)) {
      return (
        <div className="user_message">
          {/* <p className="username">username: {msgName(msg)}</p> */}
          <p> {msgContent(msg)}</p>
        </div>
      )
    } else if (msg !== ''){
      return (
        <div >
          <p className="username">{msgName(msg)}</p>
          <p className="message">{msgContent(msg)}</p>
        </div>
      )
    }
  }

  return (
    <div>
      {divTest(msg)}
      {/* {
        msgName(msg) === '' ? <div className="tip_message">{msg}</div>:<></>
      }
      {props.username === msgName(msg) ? (
        <div className="user_message">
          <p>username: {msgName(msg)}</p>
          <p>content: {msgContent(msg)}</p>
        </div>
      ) : (
        <div className="message">
          <p>username: {msgName(msg)}</p>
          <p>content: {msgContent(msg)}</p>
        </div>
      )} */}
      {/* <button onClick={() => console.log(props.username)}>data</button> */}
    </div>
  );
}

export default Message;
