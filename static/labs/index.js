const keys = require
  .context("@/static/labs/", true, /\.md$/)
  .keys()
  .map(key => key.slice(2, key.length))

const metadatas = Promise.all(
  keys.map(async path => (await import(`~/static/labs/${path}`)).attributes)
);

const skills = new Promise(async () => {
  const result = []

  const all = await keys.map(async path => (await import(`~/static/labs/${path}`)).attributes.description)

  for (const item of all) {
    console.log(item)
  }
  console.log(result)

  return result
});

async function data(key) {
  return await import(`~/static/labs/${key}/index.md`)
}

export default {
  keys,
  metadatas,
  skills,
  data
}