export enum months {
    Jan = 'January',
    Feb = 'February',
    Mar = 'March',
    Apr = 'April',
    May = 'May',
    Jun = 'June',
    Jul = 'July',
    Aug = 'August',
    Sep = 'September',
    Oct = 'October',
    Nov = 'November',
    Dec = 'December',
}
export interface AllResidents {
    reside: Residents[];
}

export interface ContributionPerMonth {
    month: months;
    contribution: number;
}

export interface ContributionPerYear {
    year: number;
    months: ContributionPerMonth[];
}

export interface Residents {
    ownersName: string;
    tenantsName?: string;
    payment: ContributionPerYear[];
}
