var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      console.log(JSON.parse(httpRequest.responseText)["tasks"]);
    } else {
    console.log(httpRequest.statusText);
    }
  };
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

var addNewItem = function () {
  console.log("Button Engaged.")
};

httpRequest.open('POST', 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=390');
httpRequest.setRequestHeader("Content-Type", "application/json");
httpRequest.send(JSON.stringify({
  task: {
    content: "Rock and roll."
  }
}));