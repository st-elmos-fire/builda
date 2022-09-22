import yargs from 'yargs';

import { getConfigFile, throwError } from 'helpers';

import publish from './publish';

export default () => {
  return {
    cmd: 'publish',
    desc: 'publish a module',
    aliases: ['i'],
    builder: (yargs: yargs.Argv): yargs.Argv<unknown> => {
      return yargs.option('version', {
        aliases: ['v', 'ver'],
        default: '',
        describe: 'update module version (semver)',
        type: 'string'
      });
    },
    handler: async (argv: any) => {
      return publish(argv.version);
    }
  };
};
