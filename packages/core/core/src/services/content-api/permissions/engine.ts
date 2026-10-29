import { engine } from '@skpl/permissions';

type Options = Parameters<typeof engine.new>[0];

export default ({ providers }: Options) => engine.new({ providers });
