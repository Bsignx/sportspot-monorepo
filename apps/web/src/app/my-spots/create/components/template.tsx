'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  useToast,
} from '@sportspot/ui'

import { Header } from '~/components/header'
import { api } from '~/helpers/trpc/api'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/location'
import { LoadingPage } from '~/components/loading-page'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createSpotSchema, ImagesSchema } from '~/utils/schemas/create-spot-schema'
import { z } from 'zod'
import SpotsMap from '~/app/components/spots-map'
import ImageUploader, { DroppedFile } from './image-uploader'
import { setAddressAuthToken } from '~/helpers/trpc/trpc-provider'
import { SPORTS } from '../sports'
import { uploadFile } from '~/helpers/uploadFile '
import { env } from '~/env'

type Images = z.infer<typeof ImagesSchema>

type CreateSpotForm = z.infer<typeof createSpotSchema>

const Template = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting },
    setValue,
    watch,
  } = useForm<CreateSpotForm>({ resolver: zodResolver(createSpotSchema) })

  const watchCountry = watch('country')
  const watchState = watch('state')

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  const toast = useToast()

  const { data: userSpots, isLoading: isLoadingUserSpots } = api.spot.getUserSpots.useQuery()
  const { mutateAsync } = api.spot.createSpot.useMutation()

  const { data: addressAuthToken } = api.address.getAddressAuthToken.useQuery(undefined, {
    onSuccess(addressAuthToken) {
      setAddressAuthToken(addressAuthToken)
    },
    onError() {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Something went wrong while getting country list',
      })
    },
  })
  const { data: countries } = api.address.getCountries.useQuery(undefined, {
    enabled: Boolean(addressAuthToken),
  })
  const { data: states } = api.address.getStates.useQuery(
    { country: watchCountry },
    {
      enabled: Boolean(watchCountry),
    },
  )
  const { data: cities } = api.address.getCities.useQuery(
    { state: watchState },
    {
      enabled: Boolean(watchState),
    },
  )

  const { location } = useGetUserLocation()

  const userLocation = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  const [files, setFiles] = useState<
    ({
      preview: string
    } & File)[]
  >([])

  const handleCaptureLocation = (location: [latitude: number, longitude: number]) => {
    setValue('latLng', location, {
      shouldValidate: true,
    })
  }

  const handleDropImage = (acceptedFiles: DroppedFile[]) => {
    setFiles((prev) => {
      const newFiles = [
        ...prev,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      ].slice(0, 3)

      setValue('images', newFiles as unknown as Images, {
        shouldValidate: true,
      })

      return newFiles // Only allow 3 files
    })
  }

  const handleRemoveUploadedImage = (filteredFiles: DroppedFile[]) => {
    setFiles(filteredFiles)

    setValue('images', filteredFiles as unknown as Images, {
      shouldValidate: true,
    })
  }

  const onSubmit: SubmitHandler<CreateSpotForm> = async (data) => {
    try {
      const createdImages = await Promise.all(
        files.map(async (file) => {
          const key = crypto.randomUUID()
          await uploadFile(file, key)

          return { key }
        }),
      )

      const imagesUrlList = createdImages.map(
        ({ key }) => `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${key}`,
      )

      const dataBeforeMutation: Omit<CreateSpotForm, 'images'> & {
        images: string[]
      } = {
        ...data,
        images: imagesUrlList,
      }

      await mutateAsync(dataBeforeMutation)
    } catch (error) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Something went wrong while creating spot',
      })
    }
  }

  if (isLoadingUserSpots || !userSpots) {
    return <LoadingPage />
  }

  return (
    <VStack p="6" pt="4" pb="24" spacing="8">
      <Header title="create spot" />
      <VStack onSubmit={handleSubmit(onSubmit)} as="form" h="100%" w="full" spacing={4}>
        <FormControl isInvalid={!!errors.name}>
          <Input variant="outline" placeholder="name" {...register('name')} />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <Textarea variant="outline" placeholder="description" {...register('description')} />
          <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.category}>
          <Select variant="outline" placeholder="sport category" {...register('category')}>
            {SPORTS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.country}>
          <Select variant="outline" placeholder="country" {...register('country')}>
            {countries?.map(({ country_name }) => (
              <option key={country_name} value={country_name}>
                {country_name}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
        </FormControl>

        <Flex w="full" gap="4">
          <FormControl isInvalid={!!errors.state}>
            <Select
              variant="outline"
              placeholder="state"
              {...register('state')}
              isDisabled={!watchCountry}
            >
              {states?.map(({ state_name }) => (
                <option key={state_name} value={state_name}>
                  {state_name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.city}>
            <Select
              variant="outline"
              placeholder="city"
              {...register('city')}
              isDisabled={!watchState}
            >
              {cities?.map(({ city_name }) => (
                <option key={city_name} value={city_name}>
                  {city_name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl isInvalid={!!errors.address}>
          <Input variant="outline" placeholder="address" {...register('address')} />
          <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
        </FormControl>

        <Box>
          <Text color="gray.300" fontSize="2xs" mb="1" fontWeight="500">
            Upload up to 3 Spot images:
          </Text>

          <FormControl isInvalid={!!errors.images}>
            <ImageUploader
              onDrop={handleDropImage}
              onRemoveUpload={handleRemoveUploadedImage}
              files={files}
            />
            <FormErrorMessage>{errors.images && errors.images.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="full">
          <Text color="gray.300" fontSize="2xs" mb="1" fontWeight="500">
            Select Spot location:
          </Text>
          <FormControl isInvalid={!!errors.latLng}>
            <SpotsMap
              zoom={8}
              activeSearchField={false}
              styles={{
                width: '100%',
                height: '200px',
                borderRadius: '14px',
                boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)',
              }}
              userLocation={[userLocation[0], userLocation[1]]}
              onCaptureLocation={handleCaptureLocation}
            />
            <FormErrorMessage>{errors.latLng && errors.latLng.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Button
          type="submit"
          isFullWidth
          mt="8 !important"
          isDisabled={isDisabled}
          isLoading={isSubmitting}
        >
          Create spot
        </Button>
      </VStack>
    </VStack>
  )
}

export default Template
