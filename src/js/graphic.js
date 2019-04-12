/* global d3 */
import loadData from './load-data'

/* data */
let allNames = []

function resize() {}

function init() {

	loadData().then(result => {
    allNames.push(result)
	}).catch(console.error)
}

export default { init, resize };
