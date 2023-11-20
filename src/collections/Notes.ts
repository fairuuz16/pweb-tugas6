import { CollectionConfig } from 'payload/types'

const Notes: CollectionConfig = {
  slug: 'notes',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
        name: "authorID",
        type: "text",
        required: true
    },
    {
        name: "content",
        type: "textarea",
    }
  ],
}

export default Notes
