export const RETURN_REASON_SET_UPDATE_MANY_MUTATION = gql(String.raw`
    mutation ReturnReasonSetUpdateManyMutation(
    $reasonSets: [ReasonSetInput!]!
    $setsToRemove: [String!]!
    $reasonsToRemove: [String!]!
  ) {
    ReturnReasonSet_DeleteMany(ids: $setsToRemove)
    ReturnReason_DeleteMany(ids: $reasonsToRemove)

    ReturnReasonSet_GetByBrand: ReturnReasonSet_UpdateMany(reasonSets: $reasonSets) {
      id
      name
      reasons {
        id
        labels {
          language
          body
        }
        requiresAttachingPhoto
        requiresAddingDescription
        shippingCostAlwaysFree
      }
    }
  }
`);

export const RETURN_REASON_SET_UPDATE_MANY_MUTATION_TEST = gql(`#graphql
    mutation ReturnReasonSetUpdateManyMutation(
    $reasonSets: [ReasonSetInput!]!
    $setsToRemove: [String!]!
    $reasonsToRemove: [String!]!
  ) {
    ReturnReasonSet_DeleteMany(ids: $setsToRemove)
    ReturnReason_DeleteMany(ids: $reasonsToRemove)

    ReturnReasonSet_GetByBrand: ReturnReasonSet_UpdateMany(reasonSets: $reasonSets) {
      id
      name
      reasons {
        id
        labels {
          language
          body
        }
        requiresAttachingPhoto
        requiresAddingDescription
        shippingCostAlwaysFree
      }
    }
  }
`);



export const RETURN_REASON_SET_UPDATE_MANY_MUTATION = gql`
  mutation ReturnReasonSetUpdateManyMutation(
    $reasonSets: [ReasonSetInput!]!
    $setsToRemove: [String!]!
    $reasonsToRemove: [String!]!
  ) {
    ReturnReasonSet_DeleteMany(ids: $setsToRemove)
    ReturnReason_DeleteMany(ids: $reasonsToRemove)

    ReturnReasonSet_GetByBrand: ReturnReasonSet_UpdateMany(reasonSets: $reasonSets) {
      ...ReturnReasonSet
    }
  }

  ${RETURN_REASON_SET_FRAGMENT}
`;

gql(`#graphql
        mutation ReturnReasonSetUpdateManyMutation(
            $reasonSets: [ReasonSetInput!]!
            ${setsToRemove.length > 0 ? '$setsToRemove: [String!]!' : ''}
            ${reasonsToRemove.length > 0 ? '$reasonsToRemove: [String!]!' : ''}
        ) {
            ${setsToRemove.length > 0 ? 'ReturnReasonSet_DeleteMany(ids: $setsToRemove)' : ''}
            ${reasonsToRemove.length > 0 ? 'ReturnReason_DeleteMany(ids: $reasonsToRemove)' : ''}

            ReturnReasonSet_GetByBrand: ReturnReasonSet_UpdateMany(reasonSets: $reasonSets) {
                id
                name
                reasons {
                    id
                    labels {
                        language
                        body
                    }
                    requiresAttachingPhoto
                    requiresAddingDescription
                    shippingCostAlwaysFree
                }
            }
        }
        `)
