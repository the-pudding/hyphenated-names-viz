/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

d3.selection.prototype.puddingBlock = function init(options) {
	function createChart(el) {
		const $sel = d3.select(el);
		let data = $sel.datum();
		// dimension stuff
		let width = 0;
		let height = 0;
		const marginTop = 0;
		const marginBottom = 0;
		const marginLeft = 0;
		const marginRight = 0;

		// scales
		const scaleX = null;
		const scaleY = null;
		const leagues = ['mlb', 'nba', 'nfl', 'nhl', 'mls', 'wnba', 'nwls']
		const decades = ['1950', '1960', '1970', '1980', '1990', '2000', '2010']

		// dom elements
		let $blockContainer = null;
		let $vis = null;
		const $hyphenCount = d3.select('.hyphenCount')
		const $totalCount = d3.select('.totalCount')
		const $leagueName = d3.select('.leagueName')
		//const $percentCount = d3.select('.percentCount')

		// helper functions

		const Chart = {
			// called once at start
			init() {

				$blockContainer = $sel.append('div').attr('class', 'pudding-chart');

				// setup viz group
				$vis = $blockContainer.append('div').attr('class', 'g-vis');

				Chart.buildNameBlock('nba', '2010')

				Chart.resize();
				Chart.render();
			},
			buildNameBlock(league, decade) {

				let blockData = data.filter(d => d.key == decade)
				blockData = (blockData[0].values).filter(d => d.key == league)
				let chartData = blockData[0].value.values
				let sumData = blockData[0].value

				const names = $vis
					.selectAll('.name')
					.data(chartData)
					.enter()
					.append('p')
					.attr('class', d => `name name__${d.hyphen}`)
					.text(d => d.lastName)

				$hyphenCount.text(sumData.withHyphens)
				$totalCount.text(sumData.allNames)
				$leagueName.text(blockData[0].key)
				//$percentCount.text(`${sumData.percentHyphen}%`)
			},
			// on resize, update new dimensions
			resize() {
				// defaults to grabbing dimensions from container element
				return Chart;
			},
			// update scales and render chart
			render() {
				return Chart;
			},
			// get / set data
			data(val) {
				if (!arguments.length) return data;
				data = val;
				$sel.datum(data);
				Chart.render();
				return Chart;
			}
		};
		Chart.init();

		return Chart;
	}

	// create charts
	const charts = this.nodes().map(createChart);
	return charts.length > 1 ? charts : charts.pop();
};
