// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import dotenv from "dotenv"
// dotenv.config()

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     // Providers.GitHub({
//     //   clientId: process.env.GITHUB_ID,
//     //   clientSecret: process.env.GITHUB_SECRET,
//     // }),
//     // ...add more providers here
//     GoogleProvider({
//         clientId: "410449841037-uki956nbbrct4clqsh6uu3eu8ccegg2h.apps.googleusercontent.com",
//         clientSecret: "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"
//     }),

//     // Providers.Facebook({
//     //     clientId: process.env.FACEBOOK_ID,
//     //     clientSecret: process.env.FACEBOOK_SECRET
//     // }),

//     // Providers.Twitter({
//     //     clientId: process.env.TWITTER_ID,
//     //     clientSecret: process.env.TWITTER_SECRET
//     // })

//   ],
// }

// export default NextAuth(authOptions)

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: "410449841037-uki956nbbrct4clqsh6uu3eu8ccegg2h.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  debug: false
}

export default (req, res) => NextAuth(req, res, options)