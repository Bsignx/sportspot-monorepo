import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  secret: process.env.AUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}
