const topicInput =
  document.getElementById("topic-input");

const generateBtn =
  document.getElementById("generate-btn");

const retryBtn =
  document.getElementById("retry-btn");

const statusMessage =
  document.getElementById("status-message");

const responseContainer =
  document.getElementById("response-container");

function createStudyTip(topic) {
  return `Here is a study tip for ${topic}: break the topic into smaller parts, write down the key terms, and test your understanding by explaining the concept in your own words.`;
}

function simulateAIRequest(topic) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const requestSucceeded =
        Math.random() > 0.3;

      if (requestSucceeded) {
        resolve(createStudyTip(topic));
      } else {
        reject(
          new Error("The simulated AI request failed.")
        );
      }

    }, 2500);

  });
}

async function generateStudyTip() {

  const topic =
    topicInput.value.trim();

  if (topic === "") {
    statusMessage.textContent =
      "Please enter a study topic before generating a response.";

    return;
  }

  generateBtn.disabled = true;

  generateBtn.textContent =
    "Generating...";

  retryBtn.hidden = true;

  responseContainer.textContent = "";

  statusMessage.textContent =
    "The AI study assistant is generating your study tip...";

  try {

    const studyTip =
      await simulateAIRequest(topic);

    responseContainer.textContent =
      studyTip;

    statusMessage.textContent =
      "Study tip generated successfully.";

  } catch (error) {

    statusMessage.textContent =
      "The AI study assistant could not generate a response. Please try again.";

    retryBtn.hidden = false;

  } finally {

    generateBtn.disabled = false;

    generateBtn.textContent =
      "Generate Study Tip";
  }
}

generateBtn.addEventListener(
  "click",
  generateStudyTip
);

retryBtn.addEventListener(
  "click",
  generateStudyTip
);