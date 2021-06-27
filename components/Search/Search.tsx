import * as React from 'react';
import { ButtonGroup, Button, Input } from '@chakra-ui/react';
import { types } from 'utils';
import { useForm } from 'react-hook-form';

export interface Props {
  /**
   * default initial value for the search
   */
  defaultValue: string;
  /**
   * On submit form event handler
   * @param newValue string new value clicked
   */
  onSubmit: (newValue: string) => void;
  /**
   * On reset button click event handler
   */
  onReset: () => void;
}

const Search: React.FC<Props> = ({ defaultValue, onSubmit, onReset }) => {
  const defaultValues: types.FormValues = {
    search: defaultValue,
  };
  const { register, handleSubmit, reset, watch } = useForm<types.FormValues>({
    defaultValues,
  });

  const handleSubmitCallback = (data: types.FormValues) => {
    onSubmit(data.search);
  };
  const handleReset = () => {
    reset();
    onReset();
  };

  const { search } = watch();

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Input
        defaultValue={''}
        data-cy='formInput'
        {...register('search', { required: true })}
        placeholder='search brand...'
        autoComplete='off'
      />
      {/* Buttons collection */}
      <ButtonGroup variant='outline' spacing='6' mt='5'>
        <Button data-cy='submitForm' colorScheme='orange' type='submit' disabled={!search}>
          Search...
        </Button>
        <Button data-cy='resetForm' colorScheme='red' onClick={handleReset}>
          Clear
        </Button>
      </ButtonGroup>
    </form>
  );
};

export { Search };
