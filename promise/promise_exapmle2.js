function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi!");
    } else {
      reject("we can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information : ${response}`);
  });
}

//making use of then and catch
//nesting promises

makeRequest("Google")
  .then((response) => {
    console.log("response received");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((error) => {
    console.log(error);
  });

// making use of async await

// var doWork = async () => {
//   try {
//     const response = await makeRequest("Google");
//     console.log("response received");
//     const processedResponse = await processRequest(response);
//     console.log(processedResponse);
//   } catch (error) {
//     console.log(error);
//   }
// };
// doWork();
console.log("***********outside asynchronous process********");
