// ** Navigation sections imports

import apps from './apps'

import pages from './pages'

import forms from './forms'

import tables from './tables'

import others from './others'

import dashboard from './dashboard'

import uiElements from './ui-elements'

import chartsAndMaps from './charts-maps'

import administration from './administration'

import suportcenter from './suportcenter'

import settings from './settings'

// ** Merge & Export

export default [...dashboard, ...administration, ...suportcenter, ...settings, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]