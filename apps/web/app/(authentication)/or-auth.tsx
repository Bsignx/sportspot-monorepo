import { Text } from '@sportspot/ui'

export const OrAuth = () => {
  return (
    <Text
      pos="absolute"
      top="630px"
      w="full"
      display="flex"
      alignItems="center"
      gap={3}
      lineHeight="20px"
      _before={{
        content: '""',
        flex: 1,
        borderBottom: '1px solid',
        borderColor: 'lineBorder',
      }}
      _after={{
        content: '""',
        flex: 1,
        borderBottom: '1px solid',
        borderColor: 'lineBorder',
      }}
    >
      Or
    </Text>
  )
}
