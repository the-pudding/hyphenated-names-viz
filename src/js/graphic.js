/* global d3 */
import loadData from './load-data'
import './pudding-chart/heatmap'

/* data */
let allNames = []
let nestedNames = []
let chart = null;

/* dom */
const $heatMap = d3.select('.heatmap figure')

function cleanData(data) {
	const filteredData = data[0].filter(d => d.decade >= '1950')

	nestedNames = d3.nest()
		.key(function(d) { return d.decade; }).sortKeys(d3.ascending)
		.key(function(d) { return d.league; })
		.rollup(values => {
			const allNames = values.length
			const withHyphens = values.filter(d => d.hyphen == "true").length
			const percentHyphen = (withHyphens/allNames*100).toFixed(2)
			return {values, allNames, withHyphens, percentHyphen}
		})
		.entries(filteredData)
}

function setupHeatMap() {
	chart = $heatMap
		.datum(nestedNames)
		.puddingHeatMap()
}

function resize() {}

function init() {

	loadData().then(result => {
    allNames = result
		cleanData(allNames)

		setupHeatMap(nestedNames)
	}).catch(console.error)

}

export default { init, resize };
