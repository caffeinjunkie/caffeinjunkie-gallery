const SanityClient = require('@sanity/client');

const client = SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_READ_TOKEN,
  useCdn: true
})

export default client;
