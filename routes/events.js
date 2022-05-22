var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    //eventVersion v 1.10
    res.send({
        events: [
            {
                eventName: 'kissanristijäiset',
                id: 1,
                eventSchedule: {
                    eventStartTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    },
                    eventEndTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    }
                },
                participants: [
                    {
                        name: 'Jouni',
                        status: 'yes'
                    },
                    {
                        name: 'Emilia',
                        status: 'maybe'
                    },
                    {
                        name: 'Anne',
                        status: 'no'
                    }],
                eventInfo: {
                    city: 'Helsinki',
                    address: 'Harjutori 8',
                    contactInfo: {
                        www: 'www.google.com',
                        phone: '040 123 123 56',
                        email: 'asd@asd.com'
                    }
                },
                about: 'lets celebrate arrival of a kitten with friends and figure out a name'
            },
            {
                eventName: 'syntymäpäiväjuhlat',
                id: 2,
                eventSchedule: {
                    eventStartTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    },
                    eventEndTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    }
                },
                participants: [
                    {
                        name: 'Jouni',
                        status: 'yes'
                    },
                    {
                        name: 'Emilia',
                        status: 'maybe'
                    },
                    {
                        name: 'Anne',
                        status: 'no'
                    }],
                eventInfo: {
                    city: 'Helsinki',
                    address: 'Harjutori 8',
                    contactInfo: {
                        www: 'www.google.com',
                        phone: '040 123 123 56',
                        email: ''
                    }
                },
                about: 'Party! Vamonos! Bring your own bottle'
            },
            {
                eventName: 'J. Karjalainen Apollo',
                id: 3,
                eventSchedule: {
                    eventStartTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    },
                    eventEndTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    }
                },
                participants: [
                    {
                        name: 'Jouni',
                        status: 'yes'
                    },
                    {
                        name: 'Emilia',
                        status: 'maybe'
                    },
                    {
                        name: 'Anne',
                        status: 'no'
                    }],
                eventInfo: {
                    city: 'Helsinki',
                    address: 'Harjutori 8',
                    contactInfo: {
                        www: 'www.google.com',
                        phone: '',
                        email: 'asd@asd.com'
                    }
                },
                about: 'legendarinen J. Karjalainen livenä'
            },
            {
                eventName: 'Taloyhtiön pihatalkoot',
                id: 4,
                eventSchedule: {
                    eventStartTime: {
                        date: "2022-05-12",
                        time: "20:40"
                    },
                    eventEndTime: {
                        date: "2022-05-24",
                        time: "20:42"
                    }
                },
                participants: [
                    {
                        name: 'Jouni',
                        status: 'yes'
                    },
                    {
                        name: 'Emilia',
                        status: 'maybe'
                    },
                    {
                        name: 'Anne',
                        status: 'no'
                    }],
                eventInfo: {
                    city: 'Helsinki',
                    address: 'Harjutori 8',
                    contactInfo: {
                        www: '',
                        phone: '040 123 123 56',
                        email: 'asd@asd.com'
                    }
                },
                about: 'cutting grass, fixing fence. Later sauna, sausaged and beer on the house'
            },

        ]
    });
});

module.exports = router;