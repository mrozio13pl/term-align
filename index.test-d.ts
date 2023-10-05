import { expectType } from 'tsd';
import termAlign from '.';

expectType<string>(termAlign('Test'));
expectType<string>(termAlign('Hello, world!', 'center'));
expectType<string>(termAlign('Another example.', { align: 'right', offset: 1 }));
expectType<string>(termAlign('Multiple lines\nWorks', { align: 'center', textAlign: 'right' }));