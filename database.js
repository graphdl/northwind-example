// Schema is using Schema.org schemas and properties

export default {
  name: 'Northwind.Database.as',
  visibility: 'public',
  schema: {
    Category: {
      type: 'category',
      properties: {
        entityId: 'identifier',
        picture: 'image',
        description: 'description',
        categoryName: 'name',
      },
    },
    Customer: {
      type: 'customer',
      properties: {
        entityId: 'identifier',
        description: 'description',
        companyName: 'name',
      }
    }
  }
}
