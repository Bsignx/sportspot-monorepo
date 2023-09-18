import { Text } from '@sportspot/ui'

export const OrAuth = () => {
  return (
    <Text
      w="full"
      display="flex"
      alignItems="center"
      my="8"
      fontSize="sm"
      gap={3}
      lineHeight="20px"
      color="quaternary"
      _before={{
        content: '""',
        flex: 1,
        borderBottom: '1px solid',
        borderColor: 'quinary',
      }}
      _after={{
        content: '""',
        flex: 1,
        borderBottom: '1px solid',
        borderColor: 'quinary',
      }}
    >
      Or
    </Text>
  )
}
