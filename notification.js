// notification.js
let clients = [];

const addClient = (client) => {
    clients.push(client);
};

const removeClient = (client) => {
    clients = clients.filter(c => c !== client);
};

const sendNotifications = (notification) => {
    clients.forEach(client => {
        client.write(`data: ${JSON.stringify(notification)}\n\n`);
    });
};

module.exports = { addClient, removeClient, sendNotifications };
