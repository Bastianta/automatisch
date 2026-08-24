export default {
  name: 'List saved functions',
  key: 'listFunctions',

  async run($) {
    const data = {
      data: [
        { value: 'format_phone', name: 'Format Nomor Telepon' },
        { value: 'check_active_user', name: 'Cek User Aktif' },
        { value: 'send_slack_notif', name: 'Kirim Notifikasi Slack' },
      ],
    };

    return data;
  },
};
