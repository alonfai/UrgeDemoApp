/* eslint-disable react/jsx-key */
import * as React from 'react';
import {
  chakra,
  Table as ChakraTable,
  Tbody as ChakraTBody,
  Td as ChakraTd,
  Th as ChakraTh,
  Thead as ChakraThead,
  Tr as ChakraTr,
  VStack,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useExpanded, usePagination, useSortBy } from 'react-table';
import * as TableTypes from './types';
import { Pagination } from './Pagination';

function Table<T extends Record<string, any>>({
  data = [],
  columns,
  controlledPageCount,
  fetchData,
  initialState,
  themeing = { variant: 'striped' },
}: TableTypes.ComponentProps<T>) {
  /**
    Ref: 
    https://react-table.tanstack.com/docs/api/usePagination#usepagination
    https://codesandbox.io/s/fxx0v?file=/src/App.js
    https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/pagination-controlled?file=/src/App.js
  */
  const options: TableTypes.TableOptions<T> = {
    data,
    columns,
    manualPagination: true, // Tell the usePagination hook that we'll handle our own data fetching. This means we'll also have to provide our own pageCount.
    paginateExpandedRows: false, // expanded rows will be spliced in after pagination. This means that the total number of rows in a page can potentially be larger than the page size, depending on how many subrows are expanded.
    pageCount: controlledPageCount, // determine the amount of pages available
    initialState, // "pageIndex" & "pageSize" are uncontrolled props in the react-table "state" prop as its been passed to the wrapper component <ListResult />
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page, which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable<T>({ ...options }, useSortBy, useExpanded, usePagination) as TableTypes.Instance<T>;

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <VStack alignSelf='stretch' mt='5' alignItems='stretch'>
      <ChakraTable {...getTableProps()} {...themeing}>
        <ChakraThead>
          {headerGroups.map(headerGroup => (
            <ChakraTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((hearColumn: unknown) => {
                const column = hearColumn as TableTypes.HeaderColumn<T>;
                return (
                  // Add the sorting props to control sorting. For this example we can add them into the header props
                  <ChakraTh
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render('Header')}
                    <chakra.span pl='4'>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label='sorted descending' />
                        ) : (
                          <TriangleUpIcon aria-label='sorted ascending' />
                        )
                      ) : null}
                    </chakra.span>
                  </ChakraTh>
                );
              })}
            </ChakraTr>
          ))}
        </ChakraThead>
        <ChakraTBody {...getTableBodyProps()}>
          {page.map((r: unknown) => {
            const row = r as TableTypes.DataRow<T>;
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment key={rowProps.key}>
                <ChakraTr {...rowProps} cursor={'default'}>
                  {row.cells.map((c: unknown) => {
                    const cell = c as TableTypes.DataCell<T>;
                    return (
                      <ChakraTd {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                        {cell.render('Cell')}
                      </ChakraTd>
                    );
                  })}
                </ChakraTr>
              </React.Fragment>
            );
          })}
        </ChakraTBody>
      </ChakraTable>
      {/* Pagination Menu Bar */}
      <Pagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        canNextPage={canNextPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
      />
    </VStack>
  );
}

export { Table };
