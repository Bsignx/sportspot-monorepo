import { colors } from '@sportspot/tokens'

export type ButtonProps = {
  children: string
}

export const Button = ({ children = 'hiii' }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: colors.primary,
      }}
    >
      {children}
    </button>
  )
}
