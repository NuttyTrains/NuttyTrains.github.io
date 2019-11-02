// http://www.pubmap.co.uk/ Version 1.1.0. Copyright 2019 John Walley.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3'], factory) :
  (global = global || self, factory(global.d3 = global.d3 || {}, global.d3));
}(this, function (exports, d3) { 'use strict';

  function interchange(lineWidth) {
    return d3.arc()
      .innerRadius(0)
      .outerRadius(1.25 * lineWidth)
      .startAngle(0)
      .endAngle(2 * Math.PI);
  }

  function station(
    d,
    xScale,
    yScale,
    lineWidthMultiplier,
    lineWidthTickRatio
  ) {
    var dir;
    var sqrt2 = Math.sqrt(2);

    var lineFunction = d3.line()
      .x(function(d) {
        return xScale(d[0]);
      })
      .y(function(d) {
        return yScale(d[1]);
      });

    switch (d.labelPos.toLowerCase()) {
      case 'n':
        dir = [0, 1];
        break;
      case 'ne':
        dir = [1 / sqrt2, 1 / sqrt2];
        break;
      case 'e':
        dir = [1, 0];
        break;
      case 'se':
        dir = [1 / sqrt2, -1 / sqrt2];
        break;
      case 's':
        dir = [0, -1];
        break;
      case 'sw':
        dir = [-1 / sqrt2, -1 / sqrt2];
        break;
      case 'w':
        dir = [-1, 0];
        break;
      case 'nw':
        dir = [-1 / sqrt2, 1 / sqrt2];
        break;
      default:
        break;
    }

    return lineFunction([
      [
        d.x +
          d.shiftX * lineWidthMultiplier +
          (lineWidthMultiplier / 2.05) * dir[0],
        d.y +
          d.shiftY * lineWidthMultiplier +
          (lineWidthMultiplier / 2.05) * dir[1],
      ],
      [
        d.x +
          d.shiftX * lineWidthMultiplier +
          (lineWidthMultiplier / 2) * dir[0] +
          (lineWidthMultiplier / lineWidthTickRatio) * dir[0],
        d.y +
          d.shiftY * lineWidthMultiplier +
          (lineWidthMultiplier / 2) * dir[1] +
          (lineWidthMultiplier / lineWidthTickRatio) * dir[1],
      ],
    ]);
  }

  function line(data, xScale, yScale, lineWidth, lineWidthTickRatio) {
    var path = '';

    var lineNodes = data.nodes;

    var unitLength = Math.abs(
      xScale(1) - xScale(0) !== 0 ? xScale(1) - xScale(0) : yScale(1) - yScale(0)
    );
    var sqrt2 = Math.sqrt(2);

    var shiftCoords = [
      (data.shiftCoords[0] * lineWidth) / unitLength,
      (data.shiftCoords[1] * lineWidth) / unitLength,
    ];

    var lastSectionType = 'diagonal'; // TODO: HACK

    var nextNode, currNode, xDiff, yDiff;
    var points;

    for (var lineNode = 0; lineNode < lineNodes.length; lineNode++) {
      if (lineNode > 0) {
        nextNode = lineNodes[lineNode];
        currNode = lineNodes[lineNode - 1];

        var direction = '';

        xDiff = Math.round(currNode.coords[0] - nextNode.coords[0]);
        yDiff = Math.round(currNode.coords[1] - nextNode.coords[1]);

        var lineEndCorrection = [0, 0];

        if (lineNode === lineNodes.length - 1) {
          if (xDiff == 0 || yDiff == 0) {
            if (xDiff > 0)
              lineEndCorrection = [
                -lineWidth / (2 * lineWidthTickRatio * unitLength),
                0,
              ];
            if (xDiff < 0)
              lineEndCorrection = [
                lineWidth / (2 * lineWidthTickRatio * unitLength),
                0,
              ];
            if (yDiff > 0)
              lineEndCorrection = [
                0,
                -lineWidth / (2 * lineWidthTickRatio * unitLength),
              ];
            if (yDiff < 0)
              lineEndCorrection = [
                0,
                lineWidth / (2 * lineWidthTickRatio * unitLength),
              ];
          } else {
            if (xDiff > 0 && yDiff > 0)
              lineEndCorrection = [
                -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
                -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              ];
            if (xDiff > 0 && yDiff < 0)
              lineEndCorrection = [
                -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
                lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              ];
            if (xDiff < 0 && yDiff > 0)
              lineEndCorrection = [
                lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
                -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              ];
            if (xDiff < 0 && yDiff < 0)
              lineEndCorrection = [
                lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
                lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              ];
          }
        }

        points = [
          [
            xScale(currNode.coords[0] + shiftCoords[0]),
            yScale(currNode.coords[1] + shiftCoords[1]),
          ],
          [
            xScale(nextNode.coords[0] + shiftCoords[0] + lineEndCorrection[0]),
            yScale(nextNode.coords[1] + shiftCoords[1] + lineEndCorrection[1]),
          ],
        ];

        if (xDiff == 0 || yDiff == 0) {
          lastSectionType = 'udlr';
          path += 'L' + points[1][0] + ',' + points[1][1];
        } else if (Math.abs(xDiff) == Math.abs(yDiff) && Math.abs(xDiff) > 1) {
          lastSectionType = 'diagonal';
          path += 'L' + points[1][0] + ',' + points[1][1];
        } else if (Math.abs(xDiff) == 1 && Math.abs(yDiff) == 1) {
          direction = nextNode.dir.toLowerCase();

          switch (direction) {
            case 'e':
              path +=
                'Q' +
                points[1][0] +
                ',' +
                points[0][1] +
                ',' +
                points[1][0] +
                ',' +
                points[1][1];
              break;
            case 's':
              path +=
                'Q' +
                points[0][0] +
                ',' +
                points[1][1] +
                ',' +
                points[1][0] +
                ',' +
                points[1][1];
              break;
            case 'n':
              path +=
                'Q' +
                points[0][0] +
                ',' +
                points[1][1] +
                ',' +
                points[1][0] +
                ',' +
                points[1][1];
              break;
            case 'w':
              path +=
                'Q' +
                points[1][0] +
                ',' +
                points[0][1] +
                ',' +
                points[1][0] +
                ',' +
                points[1][1];
              break;
          }
        } else if (
          (Math.abs(xDiff) == 1 && Math.abs(yDiff) == 2) ||
          (Math.abs(xDiff) == 2 && Math.abs(yDiff) == 1)
        ) {
          var controlPoints;
          if (xDiff == 1) {
            if (lastSectionType == 'udlr') {
              controlPoints = [
                points[0][0],
                points[0][1] + (points[1][1] - points[0][1]) / 2,
              ];
            } else if (lastSectionType == 'diagonal') {
              controlPoints = [
                points[1][0],
                points[0][1] + (points[1][1] - points[0][1]) / 2,
              ];
            }
          } else if (xDiff == -1) {
            if (lastSectionType == 'udlr') {
              controlPoints = [
                points[0][0],
                points[0][1] + (points[1][1] - points[0][1]) / 2,
              ];
            } else if (lastSectionType == 'diagonal') {
              controlPoints = [
                points[1][0],
                points[0][1] + (points[1][1] - points[0][1]) / 2,
              ];
            }
          } else if (xDiff == -2) {
            if (lastSectionType == 'udlr') {
              controlPoints = [
                points[0][0] + (points[1][0] - points[0][0]) / 2,
                points[0][1],
              ];
            } else if (lastSectionType == 'diagonal') {
              controlPoints = [
                points[0][0] + (points[1][0] - points[0][0]) / 2,
                points[1][1],
              ];
            }
          } else if (xDiff == 2) {
            if (lastSectionType == 'udlr') {
              controlPoints = [
                points[0][0] + (points[1][0] - points[0][0]) / 2,
                points[0][1],
              ];
            } else if (lastSectionType == 'diagonal') {
              controlPoints = [
                points[0][0] + (points[1][0] - points[0][0]) / 2,
                points[1][1],
              ];
            }
          }

          path +=
            'C' +
            controlPoints[0] +
            ',' +
            controlPoints[1] +
            ',' +
            controlPoints[0] +
            ',' +
            controlPoints[1] +
            ',' +
            points[1][0] +
            ',' +
            points[1][1];
        }
      } else {
        nextNode = lineNodes[lineNode + 1];
        currNode = lineNodes[lineNode];

        xDiff = Math.round(currNode.coords[0] - nextNode.coords[0]);
        yDiff = Math.round(currNode.coords[1] - nextNode.coords[1]);

        var lineStartCorrection = [0, 0];

        if (xDiff == 0 || yDiff == 0) {
          if (xDiff > 0)
            lineStartCorrection = [
              lineWidth / (2 * lineWidthTickRatio * unitLength),
              0,
            ];
          if (xDiff < 0)
            lineStartCorrection = [
              -lineWidth / (2 * lineWidthTickRatio * unitLength),
              0,
            ];
          if (yDiff > 0)
            lineStartCorrection = [
              0,
              lineWidth / (2 * lineWidthTickRatio * unitLength),
            ];
          if (yDiff < 0)
            lineStartCorrection = [
              0,
              -lineWidth / (2 * lineWidthTickRatio * unitLength),
            ];
        } else {
          if (xDiff > 0 && yDiff > 0)
            lineStartCorrection = [
              lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
            ];
          if (xDiff > 0 && yDiff < 0)
            lineStartCorrection = [
              lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
            ];
          if (xDiff < 0 && yDiff > 0)
            lineStartCorrection = [
              -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
            ];
          if (xDiff < 0 && yDiff < 0)
            lineStartCorrection = [
              -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
              -lineWidth / (2 * lineWidthTickRatio * unitLength * sqrt2),
            ];
        }

        points = [
          xScale(currNode.coords[0] + shiftCoords[0] + lineStartCorrection[0]),
          yScale(currNode.coords[1] + shiftCoords[1] + lineStartCorrection[1]),
        ];

        path += 'M' + points[0] + ',' + points[1];
      }
    }

    return path;
  }

  function Lines(lines) {
    this.lines = lines;
  }

  function lineList(lines) {
    return new Lines(lines);
  }

  function Stations(stations) {
    this.stations = stations;
  }

  Stations.prototype.toArray = function() {
    var stations = [];

    for (var name in this.stations) {
      if (this.stations.hasOwnProperty(name)) {
        var station = this.stations[name];
        station.name = name;
        stations.push(station);
      }
    }

    return stations;
  };

  Stations.prototype.interchanges = function() {
    var interchangeStations = this.toArray();

    return interchangeStations.filter(function(station) {
      return station.marker[0].marker === 'interchange';
    });
  };

  Stations.prototype.normalStations = function() {
    var stations = this.toArray();

    var stationStations = stations.filter(function(station) {
      return station.marker[0].marker !== 'interchange';
    });

    var stationMarkers = [];

    stationStations.forEach(function(station) {
      station.marker.forEach(function(marker) {
        stationMarkers.push({
          name: station.name,
          line: marker.line,
          x: station.x,
          y: station.y,
          color: marker.color,
          shiftX: marker.shiftX,
          shiftY: marker.shiftY,
          labelPos: station.labelPos,
        });
      });
    });

    return stationMarkers;
  };

  function stationList(stations) {
    return new Stations(stations);
  }

  function map() {
    var margin = { top: 80, right: 80, bottom: 20, left: 80 };
    var width = 760;
    var height = 640;
    var xScale = d3.scaleLinear();
    var yScale = d3.scaleLinear();
    var lineWidth;
    var lineWidthMultiplier = 0.8;
    var lineWidthTickRatio = 3 / 2;
    var svg;
    var _data;
    var gMap;

    var listeners = d3.dispatch('click');

    function map(selection) {
      selection.each(function(data) {
        _data = transformData(data);

        var minX =
          d3.min(_data.raw, function(line) {
            return d3.min(line.nodes, function(node) {
              return node.coords[0];
            });
          }) - 1;

        var maxX =
          d3.max(_data.raw, function(line) {
            return d3.max(line.nodes, function(node) {
              return node.coords[0];
            });
          }) + 1;

        var minY =
          d3.min(_data.raw, function(line) {
            return d3.min(line.nodes, function(node) {
              return node.coords[1];
            });
          }) - 1;

        var maxY =
          d3.max(_data.raw, function(line) {
            return d3.max(line.nodes, function(node) {
              return node.coords[1];
            });
          }) + 1;

        var desiredAspectRatio = (maxX - minX) / (maxY - minY);
        var actualAspectRatio =
          (width - margin.left - margin.right) /
          (height - margin.top - margin.bottom);

        var ratioRatio = actualAspectRatio / desiredAspectRatio;
        var maxXRange;
        var maxYRange;

        // Note that we flip the sense of the y-axis here
        if (desiredAspectRatio > actualAspectRatio) {
          maxXRange = width - margin.left - margin.right;
          maxYRange = (height - margin.top - margin.bottom) * ratioRatio;
        } else {
          maxXRange = (width - margin.left - margin.right) / ratioRatio;
          maxYRange = height - margin.top - margin.bottom;
        }

        xScale.domain([minX, maxX]).range([margin.left, margin.left + maxXRange]);
        yScale.domain([minY, maxY]).range([margin.top + maxYRange, margin.top]);

        var unitLength = Math.abs(
          xScale(1) - xScale(0) !== 0
            ? xScale(1) - xScale(0)
            : yScale(1) - yScale(0)
        );

        lineWidth = lineWidthMultiplier * unitLength;

        svg = selection
          .append('svg')
          .style('width', '100%')
          .style('height', '100%');

        gMap = svg.append('g');

        if (_data.river !== undefined) {
          drawRiver();
        }

        drawLines();
        drawInterchanges();
        drawStations();
        drawLabels();
      });
    }

    map.width = function(w) {
      if (!arguments.length) return width;
      width = w;
      return map;
    };

    map.height = function(h) {
      if (!arguments.length) return height;
      height = h;
      return map;
    };

    map.margin = function(m) {
      if (!arguments.length) return margin;
      margin = m;
      return map;
    };

    map.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? map : value;
    };

    function drawRiver() {
      gMap
        .append('g')
        .attr('class', 'river')
        .selectAll('path')
        .data([_data.river])
        .enter()
        .append('path')
        .attr('d', function(d) {
          return line(d, xScale, yScale, lineWidth, lineWidthTickRatio);
        })
        .attr('stroke', '#CCECF4')
        .attr('fill', 'none')
        .attr('stroke-width', 1.8 * lineWidth);
    }

    function drawLines() {
      gMap
        .append('g')
        .attr('class', 'lines')
        .selectAll('path')
        .data(_data.lines.lines)
        .enter()
        .append('path')
        .attr('d', function(d) {
          return line(d, xScale, yScale, lineWidth, lineWidthTickRatio);
        })
        .attr('id', function(d) {
          return d.name;
        })
        .attr('stroke', function(d) {
          return d.color;
        })
        .attr('fill', 'none')
        .attr('stroke-width', function(d) {
          return d.highlighted ? lineWidth * 1.3 : lineWidth;
        })
        .classed('line', true);
    }

    function drawInterchanges() {
      var fgColor = '#000000';
      var bgColor = '#ffffff';

      gMap
        .append('g')
        .attr('class', 'interchanges')
        .selectAll('path')
        .data(_data.stations.interchanges())
        .enter()
        .append('g')
        .attr('id', function(d) {
          return d.name;
        })
        .on('click', function() {
          var label = d3.select(this);
          var name = label.attr('id');
          listeners.call('click', this, name);
        })
        .append('path')
        .attr('d', interchange(lineWidth))
        .attr('transform', function(d) {
          return (
            'translate(' +
            xScale(d.x + d.marker[0].shiftX * lineWidthMultiplier) +
            ',' +
            yScale(d.y + d.marker[0].shiftY * lineWidthMultiplier) +
            ')'
          );
        })
        .attr('stroke-width', lineWidth / 2)
        .attr('fill', function(d) {
          return d.visited ? fgColor : bgColor;
        })
        .attr('stroke', function(d) {
          return d.visited ? bgColor : fgColor;
        })
        .classed('interchange', true)
        .style('cursor', 'pointer');
    }

    function drawStations() {
      gMap
        .append('g')
        .attr('class', 'stations')
        .selectAll('path')
        .data(_data.stations.normalStations())
        .enter()
        .append('g')
        .attr('id', function(d) {
          return d.name;
        })
        .on('click', function() {
          var label = d3.select(this);
          var name = label.attr('id');
          listeners.call('click', this, name);
        })
        .append('path')
        .attr('d', function(d) {
          return station(
            d,
            xScale,
            yScale,
            lineWidthMultiplier,
            lineWidthTickRatio
          );
        })
        .attr('stroke', function(d) {
          return d.color;
        })
        .attr('stroke-width', lineWidth / lineWidthTickRatio)
        .attr('fill', 'none')
        .attr('class', function(d) {
          return d.line;
        })
        .attr('id', function(d) {
          return d.name;
        })
        .classed('station', true);
    }

    function drawLabels() {
      gMap
        .append('g')
        .attr('class', 'labels')
        .selectAll('text')
        .data(_data.stations.toArray())
        .enter()
        .append('g')
        .attr('id', function(d) {
          return d.name;
        })
        .classed('label', true)
        .on('click', function() {
          var label = d3.select(this);
          var name = label.attr('id');
          listeners.call('click', this, name);
        })
        .append('text')
        .text(function(d) {
          return d.label;
        })
        .attr('fill', '#10137E')
        .attr('dy', 0)
        .attr('x', function(d) {
          return xScale(d.x + d.labelShiftX) + textPos(d).pos[0];
        })
        .attr('y', function(d) {
          return yScale(d.y + d.labelShiftY) - textPos(d).pos[1];
        })
        .attr('text-anchor', function(d) {
          return textPos(d).textAnchor;
        })
        .style('display', function(d) {
          return d.hide !== true ? 'block' : 'none';
        })
        .style('text-decoration', function(d) {
          return d.closed ? 'line-through' : 'none';
        })
        .style('font-size', 1.96 * lineWidth + 'px')
        .style('-webkit-user-select', 'none')
        .attr('class', function(d) {
          return d.marker
            .map(function(marker) {
              return marker.line;
            })
            .join(' ');
        })
        .classed('highlighted', function(d) {
          return d.visited;
        })
        .call(wrap, function(d) {
          return textPos(d).alignmentBaseline;
        });
    }

    function transformData(data) {
      return {
        raw: data.lines,
        river: data.river,
        stations: extractStations(data),
        lines: extractLines(data.lines),
      };
    }

    function extractStations(data) {
      data.lines.forEach(function(line) {
        for (var node = 0; node < line.nodes.length; node++) {
          var d = line.nodes[node];

          if (!d.hasOwnProperty('name')) continue;

          if (!data.stations.hasOwnProperty(d.name))
            throw new Error('Cannot find station with key: ' + d.name);

          var station = data.stations[d.name];

          station.x = d.coords[0];
          station.y = d.coords[1];

          if (station.labelPos === undefined) {
            station.labelPos = d.labelPos;
            station.labelShiftX = d.hasOwnProperty('labelShiftCoords')
              ? d.labelShiftCoords[0]
              : d.hasOwnProperty('shiftCoords')
              ? d.shiftCoords[0]
              : line.shiftCoords[0];
            station.labelShiftY = d.hasOwnProperty('labelShiftCoords')
              ? d.labelShiftCoords[1]
              : d.hasOwnProperty('shiftCoords')
              ? d.shiftCoords[1]
              : line.shiftCoords[1];
          }

          if (d.hasOwnProperty('canonical')) {
            station.labelPos = d.labelPos;
            station.labelShiftX = d.hasOwnProperty('labelShiftCoords')
              ? d.labelShiftCoords[0]
              : d.hasOwnProperty('shiftCoords')
              ? d.shiftCoords[0]
              : line.shiftCoords[0];
            station.labelShiftY = d.hasOwnProperty('labelShiftCoords')
              ? d.labelShiftCoords[1]
              : d.hasOwnProperty('shiftCoords')
              ? d.shiftCoords[1]
              : line.shiftCoords[1];
          }

          station.label = data.stations[d.name].label;
          station.position = data.stations[d.name].position;
          station.closed = data.stations[d.name].hasOwnProperty('closed')
            ? data.stations[d.name].closed
            : false;
          station.visited = false;

          if (!d.hide) {
            station.marker = station.marker || [];

            station.marker.push({
              line: line.name,
              color: line.color,
              labelPos: d.labelPos,
              marker: d.hasOwnProperty('marker') ? d.marker : 'station',
              shiftX: d.hasOwnProperty('shiftCoords')
                ? d.shiftCoords[0]
                : line.shiftCoords[0],
              shiftY: d.hasOwnProperty('shiftCoords')
                ? d.shiftCoords[1]
                : line.shiftCoords[1],
            });
          }
        }
      });

      return stationList(data.stations);
    }

    function extractLines(data) {
      var lines = [];

      data.forEach(function(line) {
        var lineObj = {
          name: line.name,
          title: line.label,
          stations: [],
          color: line.color,
          shiftCoords: line.shiftCoords,
          nodes: line.nodes,
          highlighted: false,
        };

        lines.push(lineObj);

        for (var node = 0; node < line.nodes.length; node++) {
          var data = line.nodes[node];

          if (!data.hasOwnProperty('name')) continue;

          lineObj.stations.push(data.name);
        }
      });

      return lineList(lines);
    }

    function textPos(data) {
      var pos;
      var textAnchor;
      var alignmentBaseline;
      var offset = lineWidth * 1.8;

      var numLines = data.label.split(/\n/).length;

      var sqrt2 = Math.sqrt(2);

      switch (data.labelPos.toLowerCase()) {
        case 'n':
          pos = [0, 2.1 * lineWidth * (numLines - 1) + offset];
          textAnchor = 'middle';
          alignmentBaseline = 'baseline';
          break;
        case 'ne':
          pos = [offset / sqrt2, (lineWidth * (numLines - 1) + offset) / sqrt2];
          textAnchor = 'start';
          alignmentBaseline = 'baseline';
          break;
        case 'e':
          pos = [offset, 0];
          textAnchor = 'start';
          alignmentBaseline = 'middle';
          break;
        case 'se':
          pos = [offset / sqrt2, -offset / sqrt2];
          textAnchor = 'start';
          alignmentBaseline = 'hanging';
          break;
        case 's':
          pos = [0, -lineWidthMultiplier * offset];
          textAnchor = 'middle';
          alignmentBaseline = 'hanging';
          break;
        case 'sw':
          pos = [-offset / sqrt2, -offset / sqrt2];
          textAnchor = 'end';
          alignmentBaseline = 'hanging';
          break;
        case 'w':
          pos = [-offset, 0];
          textAnchor = 'end';
          alignmentBaseline = 'middle';
          break;
        case 'nw':
          pos = [
            -(lineWidth * (numLines - 1) + offset) / sqrt2,
            (lineWidth * (numLines - 1) + offset) / sqrt2,
          ];
          textAnchor = 'end';
          alignmentBaseline = 'baseline';
          break;
        default:
          break;
      }

      return {
        pos: pos,
        textAnchor: textAnchor,
        alignmentBaseline: alignmentBaseline,
      };
    }

    // Render line breaks for svg text
    function wrap(text, baseline) {
      text.each(function() {
        var text = d3.select(this);
        var lines = text.text().split(/\n/);

        var y = text.attr('y');
        var x = text.attr('x');
        var dy = parseFloat(text.attr('dy'));

        text
          .text(null)
          .append('tspan')
          .attr('x', x)
          .attr('y', y)
          .attr('dy', dy + 'em')
          .attr('dominant-baseline', baseline)
          .text(lines[0]);

        for (var lineNum = 1; lineNum < lines.length; lineNum++) {
          text
            .append('tspan')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', lineNum * 1.1 + dy + 'em')
            .attr('dominant-baseline', baseline)
            .text(lines[lineNum]);
        }
      });
    }

    return map;
  }

  exports.tubeMap = map;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
