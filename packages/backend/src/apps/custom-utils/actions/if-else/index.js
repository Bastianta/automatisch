import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'If/Else',
  key: 'ifElse',
  description: 'Branch the flow based on a condition',
  arguments: [
    {
      label: 'Value to compare',
      key: 'value1',
      type: 'string',
      required: true,
      variables: true,
    },
    {
      label: 'Condition',
      key: 'operator',
      type: 'dropdown',
      required: true,
      variables: false,
      options: [
        { label: 'Equals', value: 'equals' },
        { label: 'Not equals', value: 'not_equals' },
        { label: 'Contains', value: 'contains' },
        { label: 'Greater than', value: 'greater' },
        { label: 'Less than', value: 'less' },
      ],
    },
    {
      label: 'Value to compare against',
      key: 'value2',
      type: 'string',
      required: true,
      variables: true,
    },
  ],
  async run($) {
    const { value1, operator, value2 } = $.step.parameters;
    let result = false;

    switch (operator) {
      case 'equals': result = value1 === value2; break;
      case 'not_equals': result = value1 !== value2; break;
      case 'contains': result = String(value1).includes(value2); break;
      case 'greater': result = Number(value1) > Number(value2); break;
      case 'less': result = Number(value1) < Number(value2); break;
    }

    $.setActionItem({
      raw: { condition_met: result, value1, value2, operator },
    });
  },
});
