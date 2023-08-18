import AWS from 'aws-sdk'

import { env } from '~/env'

export const uploadFile = async (file: File, key: string) => {
  const S3_BUCKET = env.AWS_BUCKET_NAME
  const REGION = env.AWS_REGION

  AWS.config.update({
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  })

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  })

  const params = {
    Bucket: S3_BUCKET,
    Key: key,
    Body: file,
    ContentType: file.type,
  }

  s3.putObject(params)
    .on('httpUploadProgress', (evt) => {
      console.log('Uploading ' + Number((evt.loaded * 100) / evt.total) + '%')
    })
    .promise()
}
