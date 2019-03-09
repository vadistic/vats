import { ApolloContext } from '@vats/host'
import { I18nProvider } from '@vats/i18n'
import { theme, ThemeProvider } from '@vats/styling'
import { Fabric } from 'office-ui-fabric-react'
import { client } from '../apollo'

export const StoriesFixture: React.FC = ({ children }) => {
  return (
    <ApolloContext.Provider value={client}>
      <I18nProvider>
        <ThemeProvider theme={theme}>
          <Fabric theme={theme}>{children}</Fabric>
        </ThemeProvider>
      </I18nProvider>
    </ApolloContext.Provider>
  )
}
