/* global d3 */
import loadData from './load-data'
import './pudding-chart/heatmap'
import './pudding-chart/histogram'
import './pudding-chart/block'
import noUiSlider from 'nouislider'
import enterView from 'enter-view'

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
const $slider = d3.select('.block__slider')
const $leagueButton = d3.selectAll('.block__buttons p')
const $leagueDropdown = d3.select('.leagueDropdown')
const $leagueName = d3.select('.leagueName')
const $nameSpan = d3.selectAll('.vignettes span')
let slider = null;

function slidingNames() {
	enterView({
		selector: '.name-container__left',
		enter: function(el) {
			el.classList.add('entered');
		},
		offset: 0.5,
		once: true
	});
	enterView({
		selector: '.name-container__right',
		enter: function(el) {
			el.classList.add('entered');
		},
		offset: 0.5,
		once: true
	});
}

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

	slider = noUiSlider.create($slider.node(), {
		start: 1950,
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
	const league = $leagueName.node().textContent
	console.log(league)
	const decade = Math.floor(value)
	d3.selectAll('.name').remove()
	chartBlock.buildNameBlock(league, decade)
}

function handleLeagueDropdown() {
	const league = this.value
	const decade = d3.select('.noUi-tooltip').node().textContent
	d3.selectAll('.name').remove()
	chartBlock.buildNameBlock(league, decade)
}

function scrollTo(element) {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop - 48
	});
}

function handleSpanClick() {
	const player = (this.className).split('_')[1]
	const el = d3.select(`#${player}`).node();
	scrollTo(el);
}

function resize() {}

function init() {

	loadData().then(result => {
    allNames = result
		heatMapData(allNames)
		setupHeatMap(nestedNames)
		setupBlock(nestedNames)
		setupSlider()
		slidingNames()

		$leagueDropdown.on('change', handleLeagueDropdown)
		$nameSpan.on('click', handleSpanClick)

		//histogramData(allNames)
		//setupHistogram()
	}).catch(console.error)

}

export default { init, resize };
