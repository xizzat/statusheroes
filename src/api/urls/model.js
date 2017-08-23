import mongoose, { Schema } from 'mongoose'

const urlsSchema = new Schema({
  link: {
    type: String,
    optional: false
  },
  project: {
    type: String,
    optional: false
  }
}, {
  timestamps: true
})

urlsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      //id: this.id,
      link: this.link,
      project: this.project,
      //createdAt: this.createdAt,
      //updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Urls', urlsSchema)

export const schema = model.schema
export default model
