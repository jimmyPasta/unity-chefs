exports.up = function (knex) {
    return Promise.resolve().then(() =>
      knex.schema.alterTable('form', (table) => {
        table.boolean('genericTemplate').nullable().defaultTo(false).comment('Form is a generic template that can be shared with other form designers.');
      })
    );
  };
  
  exports.down = function (knex) {
    return Promise.resolve().then(() =>
      knex.schema.alterTable('form', (table) => {
        table.dropColumn('genericTemplate');        
      })
    );
  };
  