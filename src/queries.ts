import {gql} from "@apollo/client";

export const GET_JOBS = gql`
    query JobsQuery {
        jobs {
            id
            title
            company {
                id
                name
            }
        }
    }
`;

export const GET_COMPANIES = gql`
    query CompaniesQuery {
        company() {
            id
            title
            company {
                id
                name
            }
        }
    }
`;


const jobDetailFragment = gql`
    fragment JobDetail on Job {
        id
        title
        company {
            id
            name
        }
        description
    }
`;

const createJobMutation = gql`
    mutation CreateJob($input: CreateJobInput) {
        job: createJob(input: $input) {
            ...JobDetail
        }
    }
    ${jobDetailFragment}
`;

const companyQuery = gql`
    query CompanyQuery($id: ID!) {
        company(id: $id) {
            id
            name
            description
            jobs {
                id
                title
            }
        }
    }
`;

const jobQuery = gql`
    query JobQuery($id: ID!) {
        job(id: $id) {
            ...JobDetail
        }
    }
    ${jobDetailFragment}
`;

