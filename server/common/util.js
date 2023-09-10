const crypto = require('crypto');
const sequelize = require('../utils/db');
const { QueryTypes } = require('sequelize');

exports.genSecretKey = (type = 'hmac', length = 96) => {
    if(type === 'hmac') return crypto.generateKeySync('hmac', { length: length }).export().toString('hex');
    if(type === 'aes') return crypto.generateKeySync('aes', { length: 128 }).export().toString('hex');
    return;
}

executeQueryAsync = async (query) => {
    return sequelize.query(query, {
        type: QueryTypes.SELECT
    });
}

exports.executeAllQueries = async (queries) => {
    let promises = [];
    queries.forEach(data => {
        promises.push(executeQueryAsync(data.query));
    });

    return Promise.all(promises);
}