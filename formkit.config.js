import { plugin as inertiaPlugin } from "formkit-addon-inertia";

import { generateClasses } from '@formkit/themes'
import theme from './formkit.theme.js'

export default {
    config: {
        plugins: [inertiaPlugin],
        classes: generateClasses(theme)
    }
}
