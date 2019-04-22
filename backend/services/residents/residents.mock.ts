import {Residents, months} from './residents.model';

export const residents: Residents[] = [{
        name: 'Wane',
        payment: [{
            year: 2017,
            months: [{
                    month: months.Jan,
                    contribution: 500,
                }, {
                    month: months.Feb,
                    contribution: 400,
                }, {
                    month: months.Mar,
                    contribution: 300,
                }, {
                    month: months.Apr,
                    contribution: 500,
                }, {
                    month: months.May,
                    contribution: 100,
                },
            ]}
        ]
    }, {
        name: 'Nair',
        payment: [{
            year: 2017,
            months: [{
                    month: months.Jan,
                    contribution: 500,
                }, {
                    month: months.Feb,
                    contribution: 400,
                }, {
                    month: months.Mar,
                    contribution: 300,
                }, {
                    month: months.Apr,
                    contribution: 500,
                }, {
                    month: months.May,
                    contribution: 100,
                },
        ]}
    ]
}];
