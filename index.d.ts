/* eslint-disable @typescript-eslint/camelcase */
// Type definitions based on https://www.npmjs.com/package/@types/ioredis

type CallbackFunction<T = any> = (err?: NodeJS.ErrnoException | null, result?: T) => void;
type Callback<T> = (err: Error | null, res: T) => void;
type Ok = 'OK';
type ValueType = string | Buffer | number | any[];
type KeyType = string | Buffer;

interface Pipeline {
  del(...keys: KeyType[]): Pipeline;
  exec(callback?: Callback<Array<[Error | null, any]>>): Promise<Array<[Error | null, any]>>;
}

export class IORedis {
  constructor(url: string);

  get(key: KeyType): Promise<string | null>;

  set(
    key: KeyType,
    value: ValueType,
    expiryMode?: string | any[],
    time?: number | string,
    setMode?: number | string,
  ): Promise<Ok>;

  pipeline(): Pipeline;
}
