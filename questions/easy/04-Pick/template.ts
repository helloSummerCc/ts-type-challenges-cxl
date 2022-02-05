// type MyPick<T, K> = any
/**
 * extends  K继承T的属性
 * keyof与Object.keys略有相似  keyof 取 interface 的键，而且 keyof 取到键后会保存为联合类型。
 * key in用于取联合类型的值。主要用于数组和对象的构造。
 */
type MyPick<T, K extends keyof T> = {
  [P in K]:T[P]
}