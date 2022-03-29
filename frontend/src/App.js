import { connect, sendMsg} from "./api";
import { encodeHex,decodeHex } from "./api/crypto";
import React, { useEffect, useState, useRef } from "react";
import History from "./components/History";
import './App.css';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const inputContentRef = useRef(null);


  const send = () => {
    sendMsg(
      encodeHex(`{"username":"${inputMsg}","msg":"${inputContentRef.current.value}"}`)
    );
    inputContentRef.current.value = "";
  };

  useEffect(() => {
    let person = prompt("请输入你的名字", "");
    setInputMsg(person);

    connect((msg) => {
      // console.log(msg.data)
      setChatHistory((prevState) => [...prevState, msg.data]);
    },(msg) => {
      // console.log("New Message")
      // console.log(msg.data)
      let msgDecrypt = decodeHex(JSON.parse(msg.data).body)
      // console.log(msgDecrypt)
      setChatHistory((prevState) => [...prevState, msgDecrypt]);
    });

    // if (person === "Alice") {
    //   setInputMsg("Alice");

    //   connect((msg) => {
    //     console.log("New Message")
    //     setChatHistory((prevState) => [...prevState, msg]);
    //   },(msg) => {
    //     console.log("New Message")
    //     let msgDecrypt = decrypt(msg)
    //     setChatHistory((prevState) => [...prevState, msgDecrypt]);
    //   });
    // } else if (person === "Bob") {
    //   setInputMsg("Bob");
    //   connect((msg) => {
    //     console.log("New Message")
    //     setChatHistory((prevState) => [...prevState, msg]);
    //   },(msg) => {
    //     console.log("New Message")
    //     let msgDecrypt = decrypt(msg)
    //     setChatHistory((prevState) => [...prevState, msgDecrypt]);
    //   });
    // } else {
    //   setIsLogin(false);
    // }

    // connect((msg) => {
    //   console.log("New Message")
    //   setChatHistory(prevState => ([...prevState,msg]))
    // }
    // )
  }, []);

  // useEffect(() => {
  //   console.log(chatHistory)
  // },[chatHistory])

  return (
    <div className="App">
      {isLogin ? (
        <div className="container">
          
          <History chatHistory={chatHistory} username={inputMsg} />
          {/* <input type="text" ref={userNameRef} onChange={(e) => setInputMsg(e.target.value)}/> */}

          <input type="text" ref={inputContentRef} />
          <button
            onClick={() => send()}
          >
            send
          </button>
        </div>
      ) : (
        <div>
          <p>前有隐藏聊天室，如果有账号的话。。。</p>
          <p>你没资格啊你没资格，正因为如此你没资格啊你没资格</p>
        </div>
      )}
    </div>
  );
}

export default App;
