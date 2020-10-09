const flakyServerCall = require('./flakyDependency');

async function handleFlakyServer() {
  try {
    const result = await flakyServerCall();
    return result;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

module.exports = flakyServerCall;