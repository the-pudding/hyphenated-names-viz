/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

d3.selection.prototype.puddingHeatMap = function init(options) {
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
		const colorScale = d3.scaleLinear().domain([0,6]).range(['#ffffff', '#FC5F1A'])
		const leagues = ['mlb', 'nba', 'nfl', 'nhl', 'mls', 'wnba', 'nwsl']

		// dom elements
		let $heatMapContainer = null;
		let $vis = null;
		let percentText = null;
		let decadeLabelText = null;

		// helper functions

		const Chart = {
			// called once at start
			init() {
				$heatMapContainer = $sel.append('div').attr('class', 'pudding-chart');

				// setup viz group
				$labels = $heatMapContainer.append('div').attr('class', 'g-labels');
				$vis = $heatMapContainer.append('div').attr('class', 'g-vis');

				const decadeLabels = $labels
					.selectAll('.decadeLabel')
					.data(data)
					.enter()
					.append('div')
					.attr('class', d => `decadeLabel decadeLabel-${d.key}`)

				decadeLabelText = decadeLabels
					.append('p')

				const leagueLabels = $vis.append('div').attr('class', 'leagueLabels');

				const leagueLabelBlocks = leagueLabels
					.selectAll('.leagueBlocks')
					.data(leagues)
					.enter()
					.append('div')
					.attr('class', 'leagueBlocks')

				const leagueLabelText = leagueLabelBlocks
					.append('p')
					.text(d => d)

				const decadeBlocks = $vis
					.selectAll('.decade')
					.data(data)
					.enter()
					.append('div')
					.attr('class', d => `decade decade-${d.key}`)

				const leagueBlocks = decadeBlocks
					.selectAll('.leagues')
					.data(d => d.values)
					.enter()
					.append('div')
					.attr('class', function(d) { return `league league-${d.key}` })
					.style('background-color', function(d) {
						if (d.value !== null) { return colorScale(d.value.percentHyphen) }
					})

				percentText = leagueBlocks
						.append('p')

				Chart.resize();
				Chart.render();
			},
			// on resize, update new dimensions
			resize() {
				// defaults to grabbing dimensions from container element
				width = $sel.node().offsetWidth

				percentText
					.text(function(d) {
						if (d.value !== null && width > 500) {
							const percent = +d.value.percentHyphen
							return `${percent}%`
						} else if (d.value !== null && width <= 500) {
							const percent = +d.value.percentHyphen
							return `${percent.toFixed(1)}%`
						}
					})

				decadeLabelText
					.text(function(d) {
						if (width > 500) {
							return `${d.key}s`
						} else {
							const slice = (d.key).slice(2, 5)
							return `'${slice}s`
						}
					})

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
