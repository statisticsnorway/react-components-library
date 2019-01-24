import axios from 'axios'
import { dataFetcher } from '../../../utilities/http-clients/axios/DataFetcher'

jest.mock('axios')

test('should fetch something', () => {
  const resp = {
    data: [{
      "id": "316ce68d-9154-43d3-ae4f-90b4668d2fd7",
      "agentType": "ORGANIZATION",
      "name": [
        {
          "languageCode": "en",
          "languageText": "Department 200"
        }
      ],
      "description": [
        {
          "languageCode": "en",
          "languageText": "Department of prices, financial and external statisticsArkiv"
        }
      ]
    }]
  }
  axios.get.mockResolvedValue(resp)

  return dataFetcher().then(data => expect(data).toEqual(resp.data))
})




