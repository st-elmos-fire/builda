import { getConfigFile, throwError } from 'helpers';
import yargs from 'yargs';

import buildaWatch from './watch';

export default () => {
  return {
    command: 'watch',
    desc: 'Watches your app for changes and rebuilds',
    aliases: ['w'],
    builder: (yargs: yargs.Argv): yargs.Argv<unknown> => {
      return yargs.option('configPath', {
        aliases: ['c', 'config'],
        default: '',
        describe: 'The path to a config file',
        type: 'string'
      });
    },
    handler: async (argv: any) => {
      const config = await getConfigFile(argv.configPath);
      if (config) {
        return buildaWatch(config);
      }
      throwError('No config file found');
    }
  };
};
