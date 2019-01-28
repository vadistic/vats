// tslint:disable:no-implicit-dependencies
// tslint:disable:no-submodule-imports
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'
import { theme } from './styles/theme'

loadTheme(theme)
initializeIcons()
