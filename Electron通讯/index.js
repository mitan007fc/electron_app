window.onload = () => {
    var btnToMain = document.getElementById("btnToMain");
    btnToMain.addEventListener("click", () => {
        var sendText = document.getElementById("sendText").value;
        window.electronIpc.send(sendText)
    })

    window.electronIpc.onGet((text) => {
        var messageFromMain = document.getElementById("messageFromMain");
        messageFromMain.value = text;
    })

    var btnInvoke = document.getElementById("btnInvoke");
    btnInvoke.addEventListener("click",async ()=>{
        var getData = await window.electronIpc.getData();
        var messageInvokeMain = document.getElementById("messageInvokeMain");
        messageInvokeMain.value = getData;
    })
}