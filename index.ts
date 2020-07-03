import App from './src/app';

App.listen(process.env.API_HOST, () => {
    // eslint-disable-next-line no-console
    console.log('Partners API online!');
});
