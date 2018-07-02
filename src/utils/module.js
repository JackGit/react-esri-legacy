export const isOfficalModule = url => url.startsWith('dojo/') || url.startsWith('esri/')

export const modulePath = (path, noneOfficialPrefix) => isOfficalModule(path) ? path : `${noneOfficialPrefix}/${path}`

/**
 * @param  {Array}  [modules=[]]       [{ name, path }]
 * @param  {String} noneOfficialPrefix
 * @return {Array}                     [path, ...]
 */
export const getModulePaths = (modules = [], noneOfficialPrefix) => modules.map(m => modulePath(m.path, noneOfficialPrefix))

/**
 * @param  {Array}  [modules=[]]       [{ name, path }]
 * @param  {Array}  [loadedModules=[]] [Map, Graphic, ...]
 * @return {Object}                    { [name]: Map, ... }
 */
export const getModulesMapping = (modules = [], loadedModules = []) => {
  const mapping = {}
  modules.forEach((m, i) => {
    mapping[m.name] = loadedModules[i]
  })
  return mapping
}
