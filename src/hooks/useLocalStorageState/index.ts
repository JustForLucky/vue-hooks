import useStorageState, { StorageStateResult } from '../useStorageState';

function useLocalStorageState<T = undefined>(
  key: string,
): StorageStateResult<T>

function useLocalStorageState<T>(
  key: string,
  defaultValue: T | (() => T),
): StorageStateResult<T>

function useLocalStorageState<T=undefined>(
  key: string,
  defaultValue?: T | (() => T),
): StorageStateResult<T> {
  return useStorageState(localStorage, key, defaultValue);
}

export default useLocalStorageState;
