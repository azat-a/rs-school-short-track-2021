/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domSplit = [];
  for (let i = 0; i < domains.length; i += 1) {
    domSplit.push(domains[i].split('.'));
  }

  const domStat = {};
  for (let i = 0; i < domSplit.length; i += 1) {
    let domJoin = '';
    for (let dom = domSplit[i].length - 1; dom >= 0; dom -= 1) {
      domJoin = `${domJoin}.${domSplit[i][dom]}`;
      if (domJoin in domStat) {
        domStat[domJoin] += 1;
      } else {
        domStat[domJoin] = 1;
      }
    }
  }

  return domStat;
}

module.exports = getDNSStats;
