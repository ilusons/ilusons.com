const keys = require
  .context("@/static/labs/", true, /\.md$/)
  .keys()
  .map(key => key.slice(2, key.length))

const metadatas = Promise.all(
  keys.map(async path => (await import(`~/static/labs/${path}`)).attributes)
)

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

  result['Node'] = 5
  result['Android'] = 5
  result['Angular 7'] = 5
  result['Vue'] = 3
  result['Nuxt'] = 3
  result['Gitlab CD'] = 2
  result['Stripe'] = 2
  result['WPF'] = 2

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