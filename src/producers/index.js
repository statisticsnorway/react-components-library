export const GSIM = {
  name: 'GSIM',
  producer: 'GSIM',
  endpoint: 'http://localhost:9090/',
  namespace: 'ns/',
  route: '/gsim/',
  languageCode: 'en',
  specialFeatures: false
}

export const Default = {
  name: 'Default',
  producer: 'Default',
  endpoint: 'http://localhost:9090/',
  namespace: 'ns/',
  route: '/default/',
  languageCode: 'en',
  specialFeatures: false
}

export const defaultVersioning = {
  component: 'UIRadio',
  name: 'versionIncrementation',
  displayName: 'Version incrementation',
  description: ['How should the versioning increment?'],
  value: '2',
  options: [
    {text: 'Major', value: '0'},
    {text: 'Minor', value: '1'},
    {text: 'Patch', value: '2'}
  ]
}
