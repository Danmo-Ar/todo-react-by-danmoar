import { useContext } from 'react';
import { ReduceContext } from './useTodoreducer';

export const useReduceContext = () => {
  const context = useContext(ReduceContext);

  if (context === 'undifined') {
    throw new Error('this useReducecontext must be use in the ReduceProvider');
  }

  return context;
};
