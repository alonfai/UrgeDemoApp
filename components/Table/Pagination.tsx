import {
  Flex,
  IconButton,
  Tooltip,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  forwardRef,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { constants } from 'utils';
import * as TableTypes from './types';

export type Props = Pick<
  TableTypes.Instance<Record<string, any>>,
  | 'gotoPage'
  | 'canPreviousPage'
  | 'previousPage'
  | 'pageOptions'
  | 'setPageSize'
  | 'nextPage'
  | 'canNextPage'
  | 'pageCount'
> &
  TableTypes.State<Record<string, any>>;

const Pagination = forwardRef<Props, 'div'>(function Pagination(
  {
    canNextPage,
    gotoPage,
    canPreviousPage,
    nextPage,
    pageCount,
    pageOptions,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize,
    ...rest
  },
  ref
) {
  return (
    <Flex
      justifyContent='space-between'
      m={4}
      alignItems='center'
      pt='5'
      pb='5'
      ref={ref}
      {...rest}
    >
      <Flex>
        <Tooltip label='First Page'>
          <IconButton
            aria-label='first page'
            onClick={() => gotoPage(0)}
            isDisabled={!canPreviousPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label='Previous Page'>
          <IconButton
            aria-label='previous page'
            onClick={previousPage}
            isDisabled={!canPreviousPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          ></IconButton>
        </Tooltip>
      </Flex>

      <Flex alignItems='center'>
        <Text flexShrink={0} mr={8}>
          Page{' '}
          <Text fontWeight='bold' as='span'>
            {pageIndex + 1}
          </Text>{' '}
          of{' '}
          <Text fontWeight='bold' as='span'>
            {pageOptions.length}
          </Text>
        </Text>
        <Text flexShrink={0}>Go to page:</Text>{' '}
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          max={pageOptions.length}
          defaultValue={pageIndex + 1}
          onChange={(_, valAsNumber) => {
            const page = valAsNumber ? valAsNumber - 1 : 0;
            gotoPage(page);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {constants.TABLE_PAGINATION_OPTIONS.map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex>
        <Tooltip label='Next Page'>
          <IconButton
            aria-label='next page'
            onClick={nextPage}
            isDisabled={!canNextPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label='Last Page'>
          <IconButton
            aria-label='last page'
            onClick={() => gotoPage(pageCount - 1)}
            isDisabled={!canNextPage}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
});

export { Pagination };
