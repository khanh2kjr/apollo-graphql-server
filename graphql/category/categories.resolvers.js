const CategoryModel = require('../../models/categories.model')

module.exports = {
  Query: {
    categories: async () => {
      try {
        const data = await CategoryModel.find()
        return data
      } catch (error) {
        console.log(error)
      }
    },
    category: async (_, { id }) => {
      const data = await CategoryModel.findById(id)
      return data
    },
  },
}
