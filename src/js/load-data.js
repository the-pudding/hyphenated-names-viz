/* global d3 */
/* usage
	import loadData from './load-data'
	loadData().then(result => {

	}).catch(console.error)
*/

function loadNames(file) {
  return new Promise((resolve, reject) => {
    d3.csv(`assets/data/${file}`)
      .then(result => {
        resolve(result);
      })
      .catch(reject);
  });
}

export default function loadData() {
  const loads = [loadNames('sportsCombinedNames.csv')];
  return Promise.all(loads);
}
