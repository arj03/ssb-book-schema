module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['type', 'title', 'authors'],
  properties: {
    type: {type: 'string', pattern: '^bookclub$'},
    title: {type: 'string'},
    authors: {
      oneOf: [
        {type: 'string'},
        {type: 'array', items: {allOf: [{type: 'string'}]
        }}
      ]
    },
    series: {type: 'string'},
    seriesNo: {type: 'string'},
    description: {type: 'string'},
    images: {
      oneOf: [
        {type: 'object'},
        {type: 'array', items: {allOf: [{type: 'object'}] }}
      ]
    },

    review: {type: 'string'},
    rating: {type: 'string'},
    ratingMax: {type: 'string'},
    ratingType: {type: 'string'},
    shelves: {
      oneOf: [
        {type: 'string'},
        {type: 'array', items: {allOf: [{type: 'string'}] }}
      ]
    },
    genres: {
      oneOf: [
        {type: 'string'},
        {type: 'array', items: {allOf: [{type: 'string'}] }}
      ]
    }
  }
}
