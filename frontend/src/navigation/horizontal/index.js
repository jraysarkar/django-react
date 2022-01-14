// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import others from './others'
import dashboard from './dashboard'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import chartsAndMaps from './charts-maps'
import administration from './administration'
import suportcenter from './suportcenter'
import settings from './settings'

// ** Merge & Export
export default [...dashboard, ...administration, ...suportcenter, ...settings, ...apps, ...uiElements, ...formsAndTables, ...pages, ...chartsAndMaps, ...others]
