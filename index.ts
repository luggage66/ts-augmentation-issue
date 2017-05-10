import * as Knex from 'knex';

declare module "Knex" {
    export interface Foo {
        raw(x: any): void;
    }
    const foo: Foo;
    // export = foo; // no error in vscode, tsc crashes.
    // export default foo; // "Exports and export assignments are not permitted in module augmentations."
}

const knex = Knex({});

knex.raw("blah"); // from instance. defined in @types/knex
Knex.raw("blah"); // from 'constructor'. missing. What I am trying to augment


