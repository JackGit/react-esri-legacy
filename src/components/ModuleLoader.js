import React from 'react'
import PropTypes from 'prop-types'
import EsriLoaderReact from 'esri-loader-react'
import { noop } from '@/utils/func'
import { getModulePaths, getModulesMapping } from '@/utils/module'

const ModuleLoader = ({
  modules,
  arcgisJsApi,
  arcgisStaticPath,
  onReady,
  children,
  ...restProps
}) => {
  const readyHandler = ({ loadedModules, containerNode }) => onReady(containerNode, getModulesMapping(modules, loadedModules))
  return (
    <EsriLoaderReact
      options={{ url: arcgisJsApi }}
      modulesToLoad={getModulePaths(modules, arcgisStaticPath)}
      onReady={readyHandler}
      {...restProps}
    >
      {children}
    </EsriLoaderReact>
  )
}

ModuleLoader.propTypes = {
  modules: PropTypes.array,   // [{ name, path }]
  arcgisJsApi: PropTypes.string,
  arcgisStaticPath: PropTypes.string,
  onReady: PropTypes.func,    // (containerNode, modulesMapping) => {}
  // ...other EsriLoaderReact props
}

ModuleLoader.defaultProps = {
  modules: [{ name: 'Map', path: 'esri/map' }],
  arcgisJsApi: undefined,
  arcgisStaticPath: undefined,
  onReady: (mountNode, { Map }) => {
    new Map(mountNode, {
      basemap: "topo",
      center: [-122.45, 37.75],
      zoom: 13
    })
  }
}


export default ModuleLoader
