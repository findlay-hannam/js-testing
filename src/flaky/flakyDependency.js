async function flakyServerCall() {
  if (Math.random() > 0.5) {
    throw new Error('Server failed');
  }
  return 5;
}
module.exports = flakyServerCall;