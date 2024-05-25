module.exports = {
  apps: [
    {
      name: `firewall`,
      script: 'pnpm prod:cli firewall serve',
    },
    {
      name: `edge-daemon`,
      script: 'pnpm prod:cli edge daemon serve',
    },
    {
      name: `edge-ftp`,
      script: 'pnpm prod:cli edge ftp serve',
      cron_restart: '0 0 * * *',
    },
    {
      name: `edge-syslog`,
      script: 'pnpm prod:cli edge syslog serve',
    },
    {
      name: `mothership`,
      script: 'pnpm prod:cli mothership serve',
    },
    {
      name: `downloader`,
      restart_delay: 60 * 60 * 1000, // 1 hour
      script: 'pnpm prod:cli download',
    },
    {
      name: `health`,
      restart_delay: 60 * 1000, // 1 minute
      script: 'pnpm prod:cli health',
    },
    {
      name: `minio`,
      script: `/home/pockethost/minio server /mnt/minio --console-address ":9001"`,
    },
  ],
}
