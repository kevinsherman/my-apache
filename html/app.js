const url = new URL(window.location.href);
document.getElementById("host").innerText = url.host;

switch (url.host) {
    case "www.wtu.local":
    document.body.style.backgroundColor = "green";
    document.title = "www";
    break;
    case "www3.wtu.local":
    document.body.style.backgroundColor = "red";
    document.title = "www3";
    break;
    case "wtu.local":
    document.body.style.backgroundColor = "blue";
    document.title = "apex";
    break;
}