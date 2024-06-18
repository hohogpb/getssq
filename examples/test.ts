import getssq from "../src/index"

async function main() {
  const ssqlist = await getssq();
  console.log(ssqlist);
}

main();