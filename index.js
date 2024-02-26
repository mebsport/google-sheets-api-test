const { google } = require('googleapis')

const auth = new google.auth.GoogleAuth({
  keyFile: 'google.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
})

async function writeToSheet(values) {
  const sheets = google.sheets({ version: 'v4', auth })
  const spreadsheetId = '1GmoagIZ67WFA90n6MshwoZpvrGofCdjuTzrakEaTteM'
  const range = 'Sheet1!A1'
  const valueInputOption = 'USER_ENTERED'

  const resource = { values }

  try {
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    })
    return response
  } catch (error) {
    console.log('error', error)
  }
}

;(async () => {
  const writer = await writeToSheet([
    ['Name', 'Age', 'Location'],
    ['Dave', 21, 'Hartford'],
    ['John', 22, 'New York'],
    ['Jane', 23, 'Boston'],
    ['Jill', 24, 'New Haven'],
    ['Jack', 25, 'Hartford'],
    ['Jen', 26, 'New York'],
  ]);
  console.log(writer)
})()
