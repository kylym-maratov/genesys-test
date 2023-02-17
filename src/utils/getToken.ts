import * as https from 'https';

export function getToken(): any {
  return new Promise((res, rej) => {
    https.get(
      'https://test.gnzs.ru/oauth/get-token.php',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Id': 30878566,
        },
      },
      (response) => {
        let chunks = '';

        response.on('data', (chunk) => {
          chunks += chunk;
        });

        response.on('end', () => res(JSON.parse(chunks)));

        response.on('error', (err) => rej(err));
      },
    );
  });
}
