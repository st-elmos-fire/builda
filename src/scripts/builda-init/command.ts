import { getConfigFile } from 'helpers';
import yargs from 'yargs';

import buildaInit from './init';

export default () => {
  return {
    command: 'init',
    desc: 'Initialise builda',
    aliases: ['$0'],
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
      return buildaInit({ config: config || undefined });
    }
  };
};
