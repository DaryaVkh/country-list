import { gql } from "apollo-angular";

export const queryCountry = gql`
    query Countries($filter: CountryFilterInput) {
        countries(filter: $filter) {
            name
            code
            capital
            continent {
                name
            }
            currency
            languages {
                name
            }
        }
    }
`;
