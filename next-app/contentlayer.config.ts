// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Documentation = defineDocumentType(() => ({
  name: 'Documentation',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'src/content/documentation', documentTypes: [Documentation] })