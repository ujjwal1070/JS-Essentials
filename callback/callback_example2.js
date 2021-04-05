const userLeft = false;
const userWatchingMeme = true;

function watchTutorial(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "user left",
      message: "no user",
    });
  } else if (userWatchingMeme) {
    errorCallback({
      name: "user watching meme",
      message: "tutorial not so good",
    });
  } else {
    callback("Great tutorial");
  }
}

watchTutorial(
  (message) => {
    console.log(` Success: ${message}`);
  },
  (error) => {
    console.log(`${error.name} : ${error.message}`);
  }
);
