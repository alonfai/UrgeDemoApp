import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { constants, types } from 'utils';

export const QUERY_KEY = 'useSearch';

type SearchQueryKey = [
  string,
  {
    searchTerm: string;
  }
];
type SearchPageParam = number;

async function fetchResults(context: QueryFunctionContext) {
  const { searchTerm } = (context.queryKey as SearchQueryKey)[1];
  let url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/search-results?brands=${searchTerm}`;
  if (context.pageParam) {
    url += `&page=${context.pageParam}`;
  }
  console.log(process.env);
  const response = await fetch(url);
  if (!response.ok) {
    throw new types.ResponseError(response.status);
  }
  return response.json();
}

export function useSearch(searchTerm: string) {
  const result = useInfiniteQuery<types.APIResponse, types.ResponseError>(
    [QUERY_KEY, { searchTerm }],
    fetchResults,
    {
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );
  return result;
}
