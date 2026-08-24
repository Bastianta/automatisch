import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Get Sender Email',
  key: 'getSenderEmail',
  description: 'Extract the sender email address from Gmail headers',
  arguments: [
    {
      label: 'Headers',
      key: 'headers',
      type: 'string',
      required: true,
      variables: true,
    },
  ],
  async run($) {
    const { headers } = $.step.parameters;

    let headersArray = headers;

    if (typeof headersArray === 'string') {
      try {
        headersArray = JSON.parse(headersArray);
      } catch (e) {
        headersArray = [];
      }
    }

    if (!Array.isArray(headersArray)) {
      headersArray = [];
    }

    const fromHeader = headersArray.find(
      (header) => header && header.name === 'From'
    );

    const rawValue = fromHeader ? fromHeader.value : '';

    const match = rawValue.match(/<(.+)>/);
    const email = match ? match[1] : rawValue.trim();

    $.setActionItem({
      raw: {
        sender_email: email,
        sender_raw: rawValue,
      },
    });
  },
});
