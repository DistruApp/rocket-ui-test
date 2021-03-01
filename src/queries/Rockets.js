// Queries for rocket store so that components don't have to know the internals
// of the store and to keep things DRY

export const getRocket = (rocketCollection, rocketId) => {
  const rocket = rocketCollection.rockets[rocketId];
  if (!rocket) return null;
  return { ...rocket, id: rocketId };
};
