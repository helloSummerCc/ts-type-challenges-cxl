/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array
  
  ### Question
  
  Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.
  
  For example
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```
  
  > View on GitHub: https://tsch.js.org/14
*/


/* _____________ Your Code Here _____________ */
type First<T extends any[]> = T extends [] ? never: T[0]
type First1<T extends any[]> =  T extends [infer P, ...infer R] ? P : never
type First2<T extends any[]> = T[number] extends never ? never: T[0]
type First3<T extends any[]> =  T[0] extends T[number] ? T[0] : never;
type First4<T extends any[]> =  T['length'] extends 0 ? never : T[0];
type First5<T extends any[]> =  T[0] extends undefined ? never : T[0];

