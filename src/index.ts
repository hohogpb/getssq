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

function ssqLineParse(line: string) {
  const d = line.split(" ");
  const o: SSQ = {
    id: d[0],
    date: d[1],
    red: [d[2], d[3], d[4], d[5], d[6], d[7]],
    blue: d[8],
    redSeq: [d[9], d[10], d[11], d[12], d[13], d[14]],
    totalBet: d[15],
    poolAmount: d[16],
    prize1Count: d[17],
    prize1Amount: d[18],
    prize2Count: d[19],
    prize2Amount: d[20],
    prize3Count: d[21],
    prize3Amount: d[22],
    prize4Count: d[23],
    prize4Amount: d[24],
    prize5Count: d[25],
    prize5Amount: d[26],
    prize6Count: d[27],
    prize6Amount: d[28],
  };
  return o;
}

export default async function getssq() {
  const resp = await fetch("http://data.17500.cn/ssq_asc.txt");
  const text = await resp.text();

  const rows = text.split("\n");
  const data = rows.map((line) => ssqLineParse(line));
  return data;
}
