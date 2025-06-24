// Using async function to fetch random cats url
const catApi = async () => {
  try {
    const response = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );

    // Extracting the URL from the response
    const url = response.url;

    // Returning the URL and wrapping in a try catch block to look for errors
    return url;
    // Wrapping in a try catch block to pick up any errors
  } catch (error) {
    console.error(`Could not fetch a cat image`, error);
    return `Could not find a cat`;
  }
};

// Call the function and handle the returned URL
catApi()
  .then((url) => {
    if (url) {
      console.log(`Random cat URL:`, url);
    } else {
      console.log(`Failed to fetch cat URL`);
    }
  })
  .catch((error) => {
    //Adding a catch block to look for errors
    console.error(`Error: Sorry something went wrong`, error);
  });
