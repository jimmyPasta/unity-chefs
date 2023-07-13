const { Model } = require('objection');
const { Timestamps } = require('../mixins');
const { Regex } = require('../../constants');
const stamps = require('../jsonSchema').stamps;

class FormSubscription extends Timestamps(Model) {
  static get tableName() {
    return 'form_subscription';
  }

  static get modifiers() {
    return {
      filterFormId(query, value) {
        if (value) {
          query.where('formId', value);
        }
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['formId', 'endPointUrl', 'endPointToken'],
      properties: {
        id: { type: 'string', pattern: Regex.UUID },
        formId: { type: 'string', pattern: Regex.UUID },
        subscribeEvent: {type: 'string' },
        endPointUrl: {type: 'string' },
        endPointToken: {type: 'string' },
        ...stamps,
      },
      additionalProperties: false,
    };
  }
}

module.exports = FormSubscription;
