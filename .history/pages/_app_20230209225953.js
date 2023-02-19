import '@/styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
