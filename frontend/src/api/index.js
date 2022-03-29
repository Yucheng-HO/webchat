let socket = new WebSocket("ws://localhost:8088/ws");
let len = 0

let connect = (cb,db) => {
    console.log("connecting")

    socket.onopen = () => {
        console.log("connected")
    }

    socket.onmessage = msg => {
        console.log("here is msg from server directly",msg)
        len = len+ 1
        if(len === 1){
            cb(msg)
        } else {
            db(msg)
        }
    }

    socket.onclose = event => {
        console.log("closed connection",event)
    }

    socket.onerror = err => {
        console.log("err",err)
    }
};

let sendMsg = (msg) => {
    console.log("sending msg", msg)
    socket.send(msg)
}

export {connect, sendMsg};