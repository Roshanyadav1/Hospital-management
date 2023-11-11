"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomProvider from "@/redux/CustomProvider";
import { Inter } from "next/font/google";
import { themeOptions } from "@/styles/theme";
import { Auth0Provider } from "@auth0/auth0-react";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme(themeOptions);


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Auth0Provider
        domain="dev-0fpjiyx3t0ykb3tl.us.auth0.com"
        clientId="WZMRCNBOLDzIr7CQ5Emk45oESMaxjMyg"
        authorizationParams={{
          redirect_uri: "http://localhost:3000/",
        }}
      >

        <CustomProvider>
          <ThemeProvider theme={theme}>
            <body className={inter.className}>
              {children}
            </body>
          </ThemeProvider>
        </CustomProvider>

      </Auth0Provider>

        
     </html>
  );
}
