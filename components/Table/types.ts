import { TableColumnHeaderProps, ThemingProps } from '@chakra-ui/react';
import {
  Cell,
  Column,
  ColumnInstance,
  HeaderGroup,
  Row,
  TableInstance,
  TableState,
  UseExpandedRowProps,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseSortByColumnProps,
  UseTableOptions,
  UseTableCellProps,
} from 'react-table';

export type ComponentProps<T> = {
  /**
   * Optional record list to show (defaults to [])
   */
  data?: T[];
  /**
   * Columns information to show
   */
  columns: DataColumn<T>[];
  /**
   * Controlled number of pages value (passed by executing the fetchData method in wrapper component)
   */
  controlledPageCount: number;
  /**
   * Listener callback for changes in pagination to fetch a new data
   */
  fetchData: (opts: State<T>) => void;
  /**
   * Optional themeing to override default settings (defaults to { variant: 'striped' } )
   */
  themeing?: ThemingProps<'table'>;
  /**
   * initial table state for pagination
   */
  initialState: State<T>;
};

export type State<T extends Record<string, any>> = UsePaginationState<T>;

export type DataColumn<T extends Record<string, any>> = Column<T> &
  Pick<TableColumnHeaderProps, 'isNumeric'>;

export type HeaderColumn<T extends Record<string, any>> = HeaderGroup<T> &
  UseSortByColumnProps<T> &
  DataColumn<T>;

export type DataRow<T extends Record<string, any>> = Row<T> & UseExpandedRowProps<T>;

export type DataCell<T extends Record<string, any>> = Omit<Cell<T>, 'column' | 'row'> & {
  column: ColumnInstance<T> & Pick<TableColumnHeaderProps, 'isNumeric'>;
  row: DataRow<T>;
};

export type TableOptions<T extends Record<string, any>> = Omit<UseTableOptions<T>, 'initialState'> &
  UsePaginationOptions<T> & {
    initialState: Partial<TableState<T>> & Partial<UsePaginationState<T>>;
  };

export type Instance<T extends Record<string, any>> = Omit<TableInstance<T>, 'state'> &
  UsePaginationInstanceProps<T> & {
    state: TableState<T> & UsePaginationState<T>;
  };

export type { UseTableCellProps };
