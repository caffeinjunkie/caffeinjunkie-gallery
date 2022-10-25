const SanityClient = require('@sanity/client');

export default SanityClient({
  projectId: 'tru3kf4f',
  dataset: 'production',
  useCdn: false
})
