// Queries for launch store so that components don't have to know the internals
// of the store and to keep things DRY

// This file could in the future have more named exports
// eslint-disable-next-line import/prefer-default-export
export const shouldFetchLaunches = launchCollection => !launchCollection.fetching;
