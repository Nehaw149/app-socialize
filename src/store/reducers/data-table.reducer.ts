import { ActionReducer, Action, State } from '@ngrx/store';
import { Residents } from 'src/services/residents/residents.model';

export const saveResidents = 'saveResidents';

export function dataReducer(state: Residents, action: Action): Residents {
    switch (action.type) {
        case saveResidents:
            return state;

        default:
            return state;
    }
}
