/* global d3 */
import loadData from './load-data'
import './pudding-chart/heatmap'

/* data */
let allNames = []
let nestedNames = []
let nestedLengths = []
let chart = null;
const leagues = ['mlb', 'nba', 'nfl', 'nhl', 'mls', 'wnba', 'nwls']

/* dom */
const $heatMap = d3.select('.heatmap figure')

function fillValues(values) {
	return leagues.map(league => {
		const match = values.find(v => v.key === league)
		return match || {key: league, value: null}
	})
}

function heatMapData(data) {
	const filteredData = data[0].filter(d => d.decade >= '1950')

	nestedNames = d3.nest()
		.key(d => d.decade).sortKeys(d3.ascending)
		.key(d => d.league).sortKeys(function(a,b) { return leagues.indexOf(a) - leagues.indexOf(b); })
		.rollup(values => {
			const allNames = values.length
			const withHyphens = values.filter(d => d.hyphen == "true").length
			const percentHyphen = (withHyphens/allNames*100).toFixed(2)
			return {values, allNames, withHyphens, percentHyphen}
		})
		.entries(filteredData)
		.map(d => ({
			...d,
			values: fillValues(d.values)
		}))
}

function histogramData(data) {
	const filteredData = data[0].filter(d => d.hyphen >= 'true')

	nestedLengths = d3.nest()
		.key(d => d.nameLength)
		.entries(filteredData)
		.map(d => ({
			...d,
			key: +d.key,
			values: d.values
		}))

	nestedLengths = nestedLengths.sort(function(a,b) { return a.key - b.key; })

	console.log(nestedLengths)
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
		heatMapData(allNames)
		setupHeatMap(nestedNames)

		histogramData(allNames)
	}).catch(console.error)

}

export default { init, resize };
