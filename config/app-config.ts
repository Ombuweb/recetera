type ProjEnv = 'dev' | 'prod';

const env: ProjEnv = 'dev';

export let appConfig = null;
if (env === 'dev') {
} else if (env === 'prod') {
}
