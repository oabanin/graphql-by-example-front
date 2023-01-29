/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: 'Company';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String'];
};

export type CreateJobInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Job = {
  __typename?: 'Job';
  company: Company;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob?: Maybe<Job>;
  deleteJob?: Maybe<Job>;
  updateJob?: Maybe<Job>;
};


export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateJobArgs = {
  input: UpdateJobInput;
};

export type Query = {
  __typename?: 'Query';
  company?: Maybe<Company>;
  job?: Maybe<Job>;
  jobs?: Maybe<Array<Job>>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryJobArgs = {
  id: Scalars['ID'];
};

export type UpdateJobInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type JobDetailFragment = { __typename?: 'Job', id: string, title: string, description?: string | null, company: { __typename?: 'Company', id: string, name: string } } & { ' $fragmentName'?: 'JobDetailFragment' };

export type CompanyQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyQueryQuery = { __typename?: 'Query', company?: { __typename?: 'Company', id: string, name: string, description?: string | null, jobs?: Array<{ __typename?: 'Job', id: string, title: string }> | null } | null };

export type JobQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type JobQueryQuery = { __typename?: 'Query', job?: (
    { __typename?: 'Job' }
    & { ' $fragmentRefs'?: { 'JobDetailFragment': JobDetailFragment } }
  ) | null };

export type JobsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type JobsQueryQuery = { __typename?: 'Query', jobs?: Array<{ __typename?: 'Job', id: string, title: string, company: { __typename?: 'Company', id: string, name: string } }> | null };

export type CreateJobMutationMutationVariables = Exact<{
  input: CreateJobInput;
}>;


export type CreateJobMutationMutation = { __typename?: 'Mutation', job?: (
    { __typename?: 'Job' }
    & { ' $fragmentRefs'?: { 'JobDetailFragment': JobDetailFragment } }
  ) | null };

export const JobDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<JobDetailFragment, unknown>;
export const CompanyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompanyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CompanyQueryQuery, CompanyQueryQueryVariables>;
export const JobQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobDetail"}}]}}]}},...JobDetailFragmentDoc.definitions]} as unknown as DocumentNode<JobQueryQuery, JobQueryQueryVariables>;
export const JobsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<JobsQueryQuery, JobsQueryQueryVariables>;
export const CreateJobMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJobMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"job"},"name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobDetail"}}]}}]}},...JobDetailFragmentDoc.definitions]} as unknown as DocumentNode<CreateJobMutationMutation, CreateJobMutationMutationVariables>;