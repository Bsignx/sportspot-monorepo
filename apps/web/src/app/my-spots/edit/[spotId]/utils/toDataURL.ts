export const toDataURL = (url: string): Promise<string> =>
  fetch(url)
    .then((response) => {
      console.log({ response })
      return response.blob()
    })
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        }),
    )
