// extracting fonts to a separate file got rid of all those 404 warnings about the 'as' property

import { Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});
