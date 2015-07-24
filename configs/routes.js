export default {
    AchillesBatteryRunnerPage: {
        path: '/',
        method: 'get',
        page: 'AchillesBatteryRunnerPage',
        title: 'Achilles Battery Runner',
        handler: require('../components/AchillesBatteryRunnerPage')
    },
    OtherPage: {
        path: '/other',
        method: 'get',
        page: 'OtherPage',
        title: 'Other Page',
        handler: require('../components/OtherPage')
    }
};
