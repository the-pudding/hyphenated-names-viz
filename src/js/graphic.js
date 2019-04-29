/* global d3 */
import loadData from './load-data'
import './pudding-chart/heatmap'
import './pudding-chart/histogram'
import './pudding-chart/block'
import noUiSlider from 'nouislider'

/* data */
let allNames = []
let nestedNames = []
let nestedDecades = []
let chartHeat = null;
let chartHisto = null;
let chartBlock = null;
const leagues = ['mlb', 'nba', 'nfl', 'nhl', 'mls', 'wnba', 'nwls']

/* dom */
const $heatMap = d3.select('.heatmap figure')
const $histogram = d3.select('.histogram figure')
const $block = d3.select('.block figure')
const $slider = d3.select('.block__slider');

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

function setupHeatMap() {
	chartHeat = $heatMap
		.datum(nestedNames)
		.puddingHeatMap()
}

function setupBlock(data) {
	chartBlock = $block
		.datum(data)
		.puddingBlock()
}

function setupSlider() {
	const min = 1950;
	const max = 2010;
	const start = [min, max];

	const slider = noUiSlider.create($slider.node(), {
		start: 2010,
		step: 10,
		tooltips: [
			{
				to: value => value
			}
		],
		range: {
			min,
			max
		}
	});

	slider.on('slide', handleSlide);
}

function handleSlide(value) {
	const decade = Math.floor(value)
	d3.selectAll('.name').remove()
	chartBlock.buildNameBlock('nba', decade)
}

function resize() {}

function init() {

	loadData().then(result => {
    allNames = result
		heatMapData(allNames)
		setupHeatMap(nestedNames)
		setupBlock(nestedNames)
		setupSlider()

		//histogramData(allNames)
		//setupHistogram()
	}).catch(console.error)

}

export default { init, resize };
