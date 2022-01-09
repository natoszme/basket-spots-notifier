## Setting up the environment
```
sudo snap install --classic heroku && \
heroku git:remote -a basket-spots-notifier
```

## Setting env vars
- Locally: name a file `local.env` in the root directory with the format
```
ENV_VAR=value
ENV_VAR_2=value_2
```
You can download the production ones by using `npm run get-config`
- In production: `npm run configure`. Takes config from `production.env`

## Sending the Telegram notification
- Locally: `npm run now`
- In production: `npm run production`
