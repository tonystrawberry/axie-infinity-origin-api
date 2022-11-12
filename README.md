[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=i-love-burgers_axie-infinity-origin-api)](https://sonarcloud.io/summary/new_code?id=i-love-burgers_axie-infinity-origin-api)

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/axiedex-the-ultimate-axie/bknllnbfmljmdocaodafmlhcfciicabo">
    <img src="https://github.com/tonystrawberry/axiedex.chrome/blob/main/public/images/icon_128x128.png?raw=true" width="60" />
  </a>
</p>
<h1 align="center">
  Axie Infinity resources visualizer
</h1>

- 🚀 Deployed with Vercel
- 🛠 Use Postman Mock Server API for retrieving data

## 📋 Generate client-side API code automatically

```
openapi-generator-cli generate -i postman/schemas/schema.yaml -g typescript-axios -o client-ts/types/typescript-axios
```
