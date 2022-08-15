import { google } from 'googleapis';

async function handler(req, res) {
  const { name, message } = req.body;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'A:B',
  });

  const checkActive = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'D3:D3',
  });

  const checkGroupNames = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'F3:F3',
  });

  const data = response.data.values;
  const active = checkActive.data.values[0][0] == 'TRUE';
  const showGroupNames = checkGroupNames.data.values[0][0] == 'TRUE';
  data.splice(0, 3);

  if (active && data.length != 0) {
    data.sort((a, b) => {
      return parseInt(b[1]) - parseInt(a[1]);
    });

    if (showGroupNames) {
      res.status(200).json({ active: active, groupNames: showGroupNames, data });
      return;
    }

    const withoutGroupNames = data.map((data) => data[1]);

    res.status(200).json({ active: active, groupNames: showGroupNames, data: withoutGroupNames });
    return;
  }

  res.status(400).json({ active: false });
}

export default handler;
