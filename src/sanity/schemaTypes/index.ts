import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { blogs} from './blogs'
import { faq } from './faq'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,blogs,faq],
}
