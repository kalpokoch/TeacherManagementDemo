// types/api.ts

export type RouteContextWithId = {
  params: Promise<{
    id: string;
  }>;
};
