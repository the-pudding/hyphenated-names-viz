/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

d3.selection.prototype.puddingHistogram = function init(options) {
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

		// dom elements
		let $histogramContainer = null;
		let $vis = null;

		// helper functions

		const Chart = {
			// called once at start
			init() {
				console.log(data)

				$histogramContainer = $sel.append('div').attr('class', 'pudding-chart');

				// setup viz group
				$vis = $histogramContainer.append('div').attr('class', 'g-vis');

				const lengthBlocks = $vis
					.selectAll('.length')
					.data(data)
					.enter()
					.append('div')
					.attr('class', d => `length length-${d.key}`)

				const decadeLabel = lengthBlocks
					.append('div')
					.attr('class', 'label')
					.append('p')
					.text(d => `${d.key}s`)

				const nameBlocks = lengthBlocks
					.selectAll('.length')
					.data(d => d.values)
					.enter()
					.append('div')
					.attr('class', 'name')

				const name = nameBlocks
					.append('p')
					.text(d => `${d.name}`)
					.attr('class', d => `${d.league}`)

				Chart.resize();
				Chart.render();
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
