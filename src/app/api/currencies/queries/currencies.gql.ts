import {gql} from 'apollo-angular';

export const queryCurrencies = gql`
    query Countries($filter: CountryFilterInput) {
        countries(filter: $filter) {
            currency
        }
    }
`;
