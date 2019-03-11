// tslint:disable:no-implicit-dependencies
// tslint:disable:no-submodule-imports
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import { initializeIcons } from '@uifabric/icons/lib-commonjs'
import { loadTheme } from '@uifabric/styling/lib-commonjs'
import { theme } from '@vats/styling'

loadTheme(theme)
initializeIcons()
