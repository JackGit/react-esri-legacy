import { loadModules } from 'esri-loader'

class EsriLoader extends Component {
  componentDidMount () {
    loadModules(modules, options).then(modules => {

    }).catch(e => {

    })
  }

  render () {
    null
  }
}
