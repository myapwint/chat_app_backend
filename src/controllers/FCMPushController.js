const admin = require('../config/firebase-config');
// egistrationToken, payload
exports.sendNotification = async () => {
  try {
    const message = {
      data: {
        
      }, // Data payload for the notification
      token: "eAW3ujFPcxA:APA91bFEtgb3e34jf-6BJZ_JNs-0-CJfV-B6hw-K1L-sqxEz9yGs6eIRqRrP5xUoPQS_836ZIVPLOdUWwOTxYuQYwqmglioT3ky1tq4LnxY5akkVWcKqS0QR-CUBxdZ82ssaiotKVVpU"
    };

    await admin.messaging().send(message);
    console.log('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
