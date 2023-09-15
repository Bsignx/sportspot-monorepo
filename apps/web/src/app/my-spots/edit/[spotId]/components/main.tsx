'use client'

import { useEffect, useState, useCallback } from 'react'
import { CreateSpotForm, Images, SpotForm } from '~/app/my-spots/components/spot-form'
import { api } from '~/helpers/trpc/api'
import { toDataURL } from '../utils/toDataURL'
import { dataURLtoFile } from '../utils/dataURLtoFile'
import { LoadingPage } from '~/components/loading-page'

type Props = {
  spotId: string
}

const Main = ({ spotId }: Props) => {
  const { data, isLoading } = api.spot.getSpot.useQuery({
    spotId,
  })

  const [parsedSpotImages, setParsedSpotImages] = useState<Images>([])

  const getParsedImages = useCallback(async () => {
    if (data?.images) {
      const parsedImages = (await Promise.all(
        data.images.map(async (imageUrl) => {
          const imageId = imageUrl.split('/').pop() || ''

          const fileData = await toDataURL(imageUrl).then((dataUrl) => {
            const fileData = dataURLtoFile(dataUrl, imageId)

            return fileData
          })

          Object.assign(fileData, {
            preview: imageUrl,
            path: '',
          })

          return fileData
        }),
      )) as unknown as Images

      setParsedSpotImages(parsedImages)
    }
  }, [data])

  useEffect(() => {
    getParsedImages()
  }, [getParsedImages])

  if (isLoading || !data || !parsedSpotImages.length) {
    return <LoadingPage />
  }

  const initialSpotData = {
    name: data.name,
    images: parsedSpotImages,
    description: data.description,
    address: data.address,
    category: data.tagName,
    country: data.country,
    state: data.state,
    city: data.city,
    latLng: [data.latitude, data.longitude],
    spotId: data.id,
  } as CreateSpotForm & { spotId: string }

  return <SpotForm initialSpotData={initialSpotData} />
}

export default Main
