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
const leagues = ['mlb', 'nba', 'nfl', 'nhl', 'mls', 'wnba', 'nwsl']
let decade = 1950
let interval = null

/* dom */
const $heatMap = d3.select('.heatmap figure')
const $histogram = d3.select('.histogram figure')
const $blockTop = d3.select('.block')
const $blockNames = d3.select('.block__names')
const $block = d3.select('.block figure')
const $slider = d3.select('.block__slider')
const $leagueButton = d3.selectAll('.block__buttons p')
const $leagueDropdown = d3.select('.leagueDropdown')
const $leagueName = d3.select('.leagueName')
const $nameSpan = d3.selectAll('.vignettes span')
const $blockMore = d3.select('.block__more')
const $blockMoreButton = d3.select('.block__more button')
let names = null
let slider = null;
let previousLeague = null;

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
		.sortValues(function(a,b) { return d3.ascending(a.lastName, b.lastName)})
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

function autoplaySlider() {
	slider.set(decade)

	const league = ($leagueDropdown.node()).options[($leagueDropdown.node()).selectedIndex].value
	d3.selectAll('.name').remove()
	d3.selectAll('.tooltip').transition(300).style('left', '-100%')
	chartBlock.buildNameBlock(league, decade)
	decade = decade + 10
	if (decade > 2010) { clearInterval(interval) }
}

function handleSlide(value) {
	jumpTo($blockTop.node())
	clearInterval(interval)
	const league = ($leagueDropdown.node()).options[($leagueDropdown.node()).selectedIndex].value
	const decade = Math.floor(value)
	d3.selectAll('.name').remove()
	chartBlock.buildNameBlock(league, decade)
}

function handleSeeMore() {
	clearInterval(interval)
	$blockNames.style('max-height', 'none')
	$blockMore.style('display', 'none')
}

function handleLeagueFocus() {
	clearInterval(interval)
	previousLeague = this.value
}

function handleLeagueDropdown() {
	jumpTo($blockTop.node())
	clearInterval(interval)
	const sliderState = d3.select('.noUi-origin')
	sliderState.node().removeAttribute('disabled')
	const sliderBase = d3.select('.noUi-base')
	sliderBase.classed('dis-handle', false)
	const league = this.value
	let decade = d3.select('.noUi-tooltip').node().textContent
	if (league == 'wnba' || league == 'mls' && decade < 1990) {
		decade = 1990
		$slider.node().noUiSlider.updateOptions({
			range: {
				'min': decade,
				'max': 2010
			}
		});
	}
	if (league == 'nwsl' && decade < 2010) {
		decade = 2010
		sliderState.node().setAttribute('disabled', true)
		sliderBase.classed('dis-handle', true)
	}
	if (previousLeague == 'nwsl') {
		decade = 2010
	}
	if (previousLeague == 'mls' || previousLeague == 'wnba' || previousLeague == 'nwsl') {
		$slider.node().noUiSlider.updateOptions({
			range: {
				'min': 1950,
				'max': 2010
			}
		});
	}
	previousLeague = this.value
	slider.set(decade)
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

function jumpTo(element) {
	window.scroll({
		behavior: 'auto',
		left: 0,
		top: element.offsetTop - 48
	});
}

function handleSpanClick() {
	const player = (this.className).split('_')[1]
	const el = d3.select(`#${player}`).node();
	scrollTo(el);
}

function runInterval() {
	interval = setInterval(autoplaySlider, 2000)
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
		runInterval()

		$leagueDropdown.on('focus', handleLeagueFocus)
		$leagueDropdown.on('change', handleLeagueDropdown)
		$nameSpan.on('click', handleSpanClick)
		$blockMoreButton.on('click', handleSeeMore)

		//histogramData(allNames)
		//setupHistogram()
	}).catch(console.error)

}

export default { init, resize };
