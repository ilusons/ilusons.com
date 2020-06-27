const keys = require
  .context("@/static/labs/", true, /\.md$/)
  .keys()
  .map(key => key.slice(2, key.length))

async function metadatas() {
  let result = []

  for (const path of keys) {
    const values = (await import(`~/static/labs/${path}`)).attributes

    result.push(values)
  }

  return result
}

function sortByFrequency(array) {
  var frequency = {};

  array.forEach(function (value) {
    frequency[value] = 0;
  });

  var uniques = array.filter(function (value) {
    return ++frequency[value] == 1;
  });

  return uniques.sort(function (a, b) {
    return frequency[b] - frequency[a];
  });
}

function toFrequencyMap(array) {
  const frequency = {};

  array.forEach(function (value) {
    frequency[value] = 0;
  });

  array.forEach(function (value) {
    ++frequency[value];
  });

  return frequency
}

async function skills() {
  let result = []

  for (const path of keys) {
    const value = (await import(`~/static/labs/${path}`)).attributes.tags

    const terms = value.split(/[,]+/).map(x => x.trim())

    result.push(...terms)
  }

  result = toFrequencyMap(result)

  result['..'] = 1
  result['...'] = 1
  result['....'] = 1

  result['Angular'] = 4
  result['Vue/Nuxt'] = 3
  result['React/Next'] = 3
  result['WordPress'] = 2
  result['Bootstrap'] = 3

  result['Android'] = 5

  result['Node'] = 5
  result['Express'] = 4
  result['C#.Net'] = 3
  result['WPF'] = 3

  result['Stripe'] = 4
  result['Slack'] = 3
  result['Discord'] = 3

  return result
}

async function data(key) {
  return await import(`~/static/labs/${key}/index.md`)
}

export default {
  keys,
  metadatas,
  skills,
  data
}