module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['type', 'title', 'authors'],
  properties: {
    type: {type: 'string', pattern: '^bookclub$'},
    title: {type: 'string'},
    authors: {type: 'string'},
    series: {type: 'string'},
    seriesNo: {type: 'string'},
    description: {type: 'string'},
    image: {type: 'object'}
  }
}
