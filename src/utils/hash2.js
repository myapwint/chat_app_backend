const crypto = require('crypto');
const { generateStrongRandomBytes } = require('../utils/cryptoUtils'); // utility function for generating strong random bytes

// Generate a strong random secret key
const secret = generateStrongRandomBytes(32); // Example: 32 bytes for SHA-256

module.exports = (lowerUserId, higherUserId) => {
    // Generate a random salt
    const salt = generateStrongRandomBytes(16); // Example: 16 bytes

    // Combine user IDs and salt
    const data = `${lowerUserId}_user-divider_${higherUserId}${salt}`;

    // Hash the data using SHA-256
    const hash = crypto.createHmac('sha256', secret).update(data).digest('hex');

    return { hash, salt }; // Return both the hash and salt for secure storage
};
