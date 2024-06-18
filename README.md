# getssq

`getssq` 是一个获取中国双色球历史数据的工具包，方便开发者进行进一步的数据分析和使用。

## 安装

使用 npm 进行安装：

```sh
npm install getssq
```


或者使用 yarn 进行安装：

```sh
yarn add getssq
```

## 使用方法

在你的项目中引入 `getssq` 并调用它：

```ts
import getssq from 'getssq';

async function main() {
  const data = await getssq();
  console.log(data);
}

main();
```


### 返回的数据结构

`getssq` 返回一个数组，每个元素包含以下属性：

```ts
type SSQ = {
  /** 开奖期号 */
  id: string;
  /** 开奖日期 */
  date: string;
  /** 红号 */
  red: string[];
  /** 蓝号 */
  blue: string;
  /** 红号出球顺序 */
  redSeq: string[];
  /** 投注总额 */
  totalBet: string;
  /** 奖池金额 */
  poolAmount: string;
  /** 一等注数 */
  prize1Count: string;
  /** 一等金额 */
  prize1Amount: string;
  /** 二等注数 */
  prize2Count: string;
  /** 二等金额 */
  prize2Amount: string;
  /** 三等注数 */
  prize3Count: string;
  /** 三等金额 */
  prize3Amount: string;
  /** 四等注数 */
  prize4Count: string;
  /** 四等金额 */
  prize4Amount: string;
  /** 五等注数 */
  prize5Count: string;
  /** 五等金额 */
  prize5Amount: string;
  /** 六等注数 */
  prize6Count: string;
  /** 六等金额 */
  prize6Amount: string;
};
```