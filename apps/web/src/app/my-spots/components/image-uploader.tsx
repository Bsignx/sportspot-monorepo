import { CSSProperties, useEffect, useMemo } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'

import { Box, Button, Grid, useToast } from '@sportspot/ui'

import { colors, radii } from '@sportspot/tokens'

import { Image as ImageType } from './spot-form'
import Image from 'next/image'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 1,
  borderRadius: '14px',
  borderColor: colors.primary,
  borderStyle: 'dotted',
  backgroundColor: colors.senary,
  color: colors.quaternary,
  outline: 'none',
  transition: 'border .24s ease-in-out',
  fontSize: '0.75rem',
  textAlign: 'center',
  gap: '12px',
}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const UploaderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <path
      d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
      stroke={colors.primary}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 16L24 6L14 16"
      stroke={colors.primary}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 6V30"
      stroke={colors.primary}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <g>
      <circle opacity="0.7" cx="12" cy="8" r="8" fill={colors.senary} />
      <path
        d="M15 5L9 11"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5L15 11"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_665_528"
        x="0"
        y="0"
        width="24"
        height="24"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_665_528" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_665_528" result="shape" />
      </filter>
    </defs>
  </svg>
)

const Thumb = ({
  file,
  handleRemoveUpload,
}: {
  file: ImageType
  handleRemoveUpload: (file: ImageType) => void
}) => (
  <Box as="li" key={file.preview} h="100%" w="100%" position="relative">
    <Button
      aria-label="remove upload"
      variant="unstyled"
      onClick={() => handleRemoveUpload(file)}
      position="absolute"
      top="0.5rem"
      right="0.5rem"
      zIndex="20"
      minW="0"
      px="0"
      w="5"
      h="5"
    >
      <CloseIcon />
    </Button>
    <Image
      src={file.preview}
      alt="preview"
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        borderRadius: radii['2xl'],
      }}
      // Revoke data uri after image is loaded
      onLoad={() => {
        URL.revokeObjectURL(file.preview)
      }}
    />
  </Box>
)

type Props = {
  onDrop: (acceptedFiles: ImageType[], fileRejections?: FileRejection[]) => void
  onRemoveUpload: (filteredFiles: ImageType[]) => void
  files: ImageType[]
}

const ImageUploader = ({ onDrop, files, onRemoveUpload }: Props) => {
  const toast = useToast()

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
    maxFiles: 3,
    minSize: 0,
    maxSize: 1048576 * 3, // 3MB
    multiple: true,
    onDrop: (acceptedFiles, fileRejections) => {
      const hasError = fileRejections.length > 0

      if (!hasError) {
        onDrop(acceptedFiles as unknown as ImageType[], fileRejections)
      }

      const isFileTooLarge = fileRejections.some((file) =>
        file.errors.some((error) => error.code === 'file-too-large'),
      )

      isFileTooLarge && toast({ title: 'File can not be larger than 3MB', status: 'warning' })

      const isTooManyFiles = fileRejections.some((file) =>
        file.errors.some((error) => error.code === 'too-many-files'),
      )

      isTooManyFiles && toast({ title: 'Only 3 files are allowed', status: 'warning' })
    },
  })

  const handleRemoveUpload = (file: ImageType) => {
    const filteredFiles = files.filter((f) => f.preview !== file.preview)

    onRemoveUpload(filteredFiles)
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  ) as CSSProperties

  const thumbs = files.map((file) => (
    <Thumb key={file.preview} file={file} handleRemoveUpload={handleRemoveUpload} />
  ))

  return (
    <>
      <div {...getRootProps({ style })}>
        <UploaderIcon />

        <input {...getInputProps()} />

        <p>Drag and drop or browse to choose at most 3 images, PNG and JPG files are allowed</p>
      </div>
      <Grid
        as="ul"
        display={files.length ? 'grid' : 'none'}
        h={'5.25rem'}
        listStyleType="none"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        mt="3"
      >
        {thumbs}
      </Grid>
    </>
  )
}

export default ImageUploader
