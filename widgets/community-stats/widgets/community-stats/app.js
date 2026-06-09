export async function init(sdk) {
  await sdk.whenReady()

  const headline = sdk.$('.headline')
  const subtext = sdk.$('.subtext')
  const button = sdk.$('.cta-button')

  function applyProps(props) {
    if (headline) headline.textContent = props.headline || 'Welcome to the Community'
    if (subtext) subtext.textContent = props.subtext || 'Ask questions, share ideas, and connect with peers.'
    if (button) {
      button.textContent = props.button_label || 'Get Started'
      button.href = props.button_url || '#'
    }
  }

  applyProps(sdk.getProps())
  sdk.on('propsChanged', applyProps)
}
