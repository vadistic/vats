# Apollo Server

This example offers a pre-setup project for Apollo Server that allows you to get up and running in no time!

You can run the following command `now init apollo` to fetch the example to your local machine.

This Apollo Server example features the [`now.json` configuration file](https://zeit.co/docs/v2/deployments/configuration) below.

```json
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@now/node-server" }],
  "routes": [{ "src": "/.*", "dest": "index.js" }]
}
```

_now.json_

- The `version` property specifies [`Now 2.0`](https://zeit.co/now).
- The [`routes` property](/docs/v2/deployments/configuration#routes) allows Now to route your deployment either by using a source and destination, or by way of a source, status, and headers.
- The [`builds` property](https://zeit.co/docs/v2/deployments/builds) allows Now to use a [builder](https://zeit.co/docs/v2/deployments/builders/overview/) with a specific source target.

The `@now/node-server` [builder](https://zeit.co/docs/v2/deployments/builders/overview) enables a Node.js server deployment.

Deploy the app with Now.

```shell
$ now
```

## Resources

- Find out more information on **Deploying Apollo Server with Now**, please refer to the [Deploying Apollo Server to Now](https://zeit.co/guides/deploying-apolloserver-to-now/) guide.

- Check out how to [Deploy any of your applications with ZEIT Now.](https://zeit.co/docs/v2/deployments/basics)
