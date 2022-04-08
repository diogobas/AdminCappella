import { Meteor } from 'meteor/meteor';
import request from 'request';

const ONE_SIGNAL_REST_API_KEY = 'ONE_SIGNAL_REST_API_KEY' || Meteor.settings.push?.oneSignalRestApiKey;
const ONE_SIGNAL_APP_ID = 'ONE_SIGNAL_APP_ID' || Meteor.settings.public.push?.oneSignalAppId;

export const sendPush = ({ heading, content, data = {} }) => {
  const body = {
    ...(heading ? { headings: { en: heading } } : {}),
    contents: { en: content },
    included_segments:["Subscribed Users"],
    app_id: ONE_SIGNAL_APP_ID,
    data,
    web_url: Meteor.absoluteUrl(data.route),
  };

  if (!ONE_SIGNAL_REST_API_KEY || !ONE_SIGNAL_APP_ID) {
    console.info({
      message: 'Push not configured',
    });
    return false;
  }
  return new Promise((resolve, reject) => {
    const options = {
      uri: 'https://onesignal.com/api/v1/notifications',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${ONE_SIGNAL_REST_API_KEY}`,
      },
      body: JSON.stringify(body),
    };
    request.post(options, (error, response, responseBody) => {
      if (error) {
        console.debug('error while requesting onesignal', { error })
        reject(error);
      }
      resolve({
        response: JSON.parse(responseBody),
      });
    });
  });
};
