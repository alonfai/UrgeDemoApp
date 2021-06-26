import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearch } from 'hooks';
import { Alert } from 'components/Alert';
import { Loading } from 'components/Loading';

export type Props = {
  /**
   * user data
   */
  userInput: string;
};

const SearchResults: React.FC<Props> = ({ userInput }) => {
  const { data, error, fetchNextPage, hasNextPage, status } = useSearch(userInput);

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'error') {
    return <Alert status='error'>{error?.message}</Alert>;
  }

  if (data === undefined) {
    return null;
  }
  // set the length of the data.This will unlock the subsequent calls to next.
  const dataLength = data.pages.reduce((counter, page) => {
    return counter + page.data.length;
  }, 0);
  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Loading />}
    >
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.data.map(product => (
            <p key={product.id}>{JSON.stringify(product, null, 2)}</p>
          ))}
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );
};

export { SearchResults };
