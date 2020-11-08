chrome.runtime.onMessage.addListener((request, _sender, response) => {
  const { type } = request
  if (!type) response({ error: "Invalid message type" })
  chrome.tabs.query({ active: true }, (tabs) => {
    const tabUrls = tabs.map((x) => x.url)
    response({
      message: `Hello from background. You currently seem to be on ${tabUrls.join("\n")}`,
    })
  })
  return true
})
