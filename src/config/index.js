const config = {
  sanity: {
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    writeToken: process.env.SANITY_WRITE_TOKEN
  }
}

module.exports = config;
