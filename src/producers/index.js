export const GSIM = {
  name: 'GSIM',
  producer: 'GSIM',
  endpoint: process.env.REACT_APP_LDS,
  route: '/gsim/'
}

export const defaultVersioning = {
  component: 'DCRadio',
  name: 'versionIncrementation',
  displayName: 'Versjonsinkrementering',
  description: 'Hvordan skal versjonen inkrementeres?',
  value: '2',
  options: [
    {text: 'Major', value: '0'},
    {text: 'Minor', value: '1'},
    {text: 'Patch', value: '2'}
  ]
}
