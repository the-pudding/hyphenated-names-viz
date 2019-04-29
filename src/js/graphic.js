/* global d3 */
import loadData from './load-data'
import './pudding-chart/heatmap'
import './pudding-chart/histogram'

/* data */
let allNames = []
let nestedNames = []
let nestedLengths = []
let nestedReasons = []
let nestedDecades = []
let chartHeat = null;
let chartHisto = null;
const leagues = ['mlb', 'nba', 'nfl', 'nhl', 'mls', 'wnba', 'nwls']

/* dom */
const $heatMap = d3.select('.heatmap figure')
const $histogram = d3.select('.histogram figure')

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
}

function histogramData2(data) {
	const filteredData = data[0].filter(d => d.hyphen >= 'true')

	nestedReasons = d3.nest()
		.key(d => d.reason)
		.entries(filteredData)
		.map(d => ({
			...d,
			key: d.key,
			values: d.values
		}))

	console.log(nestedReasons)
}

function histogramData3(data) {
	const filteredData = data[0].filter(d => d.hyphen >= 'true')

	nestedDecades = d3.nest()
		.key(d => +d.decade).sortKeys(d3.ascending)
		.entries(filteredData)
		.map(d => ({
			...d,
			key: d.key,
			values: d.values
		}))

	console.log(nestedDecades)
}

function setupHeatMap() {
	chartHeat = $heatMap
		.datum(nestedNames)
		.puddingHeatMap()
}

function setupHistogram() {
	chartHisto = $histogram
		.datum(nestedDecades)
		.puddingHistogram()
}

function resize() {}

function init() {

	loadData().then(result => {
    allNames = result
		heatMapData(allNames)
		setupHeatMap(nestedNames)

		histogramData3(allNames)
		setupHistogram()
	}).catch(console.error)

}

export default { init, resize };
