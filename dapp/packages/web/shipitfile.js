const { IncomingWebhook } = require('@slack/webhook');
const utils = require('shipit-utils');

module.exports = (shipit) => {
  var webhookUri = 'https://hooks.slack.com/services/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';
  const webhook = new IncomingWebhook(webhookUri);
  const SLACK_CHANNEL = 'ultimate_player-notices';

  const bugsnagApiKey = process.env.NEXT_PUBLIC_BUGSNAG_API_KEY || 'debug';

  shipit.initConfig({
    default: {
      repositoryUrl: 'git@gitlab.com:0x-ventures/ultimate_player-marketplace.git',
      ignores: ['.git', 'node_modules'],
      deleteOnRollback: false,
      shallowClone: true,
    },
    staging: {
      branch: 'staging',
      servers: 'UNUSED',
      domain: 'https://marketplace-staging.ultimate_playerplayers.com/',
    },
    production: {
      branch: 'production',
      servers: 'UNUSED',
      // domain: 'https://bridge.metaseer.io',
    },
  });

  shipit.blTask('build', async () => {
    await shipit.local(`yarn build:${shipit.environment}`);
    shipit.emit('built');
  });

  shipit.blTask('uploadSourceMap', async () => {
    const command = `npx bugsnag-source-maps upload-browser \
       --api-key ${bugsnagApiKey} \
       --overwrite \
       --detect-app-version \
       --directory ./.next/static/chunks/ \
       --base-url ${shipit.config.domain}/_next/static/chunks
    `;

    await shipit.local(command);
  });

  shipit.blTask('removeSourceMapFiles', async () => {
    await shipit.local('find ./out -name "*.map" -print0 | xargs -0 rm');
  });

  shipit.blTask('sendNotification', async () => {
    const { stdout } = await shipit.local(`git rev-parse HEAD`);
    const revision = stdout.trim();

    const { stdout: author } = await shipit.local(`git log -1 --pretty=format:'%an' | xargs`);
    const { stdout: commitMessage } = await shipit.local(`git log -n 5 --format="%h %s%b"`);
    const { name: projectName, version } = require('./package.json');

    const messageBlocks = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:rocket: *${projectName} v${version} - Deployed to ${shipit.environment}*`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Created by:* ${author}`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `\`\`\`${commitMessage}\`\`\``,
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View on Gitlab',
            },
            style: 'primary',
            url: `https://gitlab.com/0x-ventures/ultimate_player-marketplace/-/commit/${revision}`,
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View Site',
            },
            style: 'primary',
            url: shipit.config.domain,
          },
        ],
      },
    ];

    return webhook
      .send({
        channel: SLACK_CHANNEL,
        blocks: messageBlocks,
        username: 'Deployment Bot',
      })
      .catch((err) => {
        console.log('error:', err);
      });
  });

  utils.registerTask(shipit, 'deploy', [
    'build',
    'uploadSourceMap',
    'removeSourceMapFiles',
    'sendNotification',
  ]);
};
