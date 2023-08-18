import { z } from 'zod'

export const ImagesSchema = z
  .array(
    z.object({
      path: z.string(),
      preview: z.string(),
      lastModified: z.number(),
      lastModifiedDate: z.date(),
      name: z.string(),
      size: z.number(),
      type: z.string(),
      webkitRelativePath: z.string(),
    }),
  )
  .max(3, 'Maximum 3 images allowed')
  .min(1, 'Minimum 1 image required')

export const createSpotSchema = z.object({
  name: z.string().nonempty('Name required').max(80, 'Maximum 80 characters allowed'),
  description: z
    .string()
    .nonempty('Description required')
    .max(300, 'Maximum 300 characters allowed'),
  address: z.string().nonempty('Address required').max(80, 'Maximum 80 characters allowed'),
  state: z.string().nonempty('State required').max(80, 'Maximum 80 characters allowed'),
  city: z.string().nonempty('City required').max(80, 'Maximum 80 characters allowed'),
  country: z.string().nonempty('Country required').max(80, 'Maximum 80 characters allowed'),
  latLng: z.array(z.number()).nonempty('Latitude and Longitude required').length(2),
  category: z.string().nonempty('Category required').max(80, 'Maximum 80 characters allowed'),
  images: ImagesSchema,
})
