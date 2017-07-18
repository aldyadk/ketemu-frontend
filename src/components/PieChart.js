import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {PieChart} from 'react-native-mp-android-chart';

class PieChartScreen extends React.Component {

  constructor() {
    super();
    console.log('INSIDE PIE CHART')

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        position: 'RIGHT_OF_CHART',
        fontFamily: 'monospace',
        wordWrapEnabled: true
      },
      data: {
        datasets: [{
          yValues: [40, 21, 15, 9, 15],
          label: 'Pie dataset',
          config: {
            colors: ['#C0FF8C', '#FFF78C', '#FFD08C', '#8CEAFF', '#FF8C9D'],

            sliceSpace: 5,
            selectionShift: 13
          }
        }],
        xValues: ['Sandwiches', 'Salads', 'Soup', 'Beverages', 'Desserts']
      },
      description: {
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: 'darkgray',
        fontFamily: 'monospace',
        fontStyle: 2
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <PieChart
          style={styles.chart}
          logEnabled={true}
          backgroundColor={'#f0f0f0'}
          description={this.state.description}
          data={this.state.data}
          legend={this.state.legend}

          drawSliceText={true}
          usePercentValues={false}
          centerText={'Pie center text!'}
          centerTextRadiusPercent={100}
          holeRadius={40}
          holeColor={'#f0f0f0'}
          transparentCircleRadius={45}
          transparentCircleColor={'#f0f0f0'}
          transparentCircleAlpha={50}
          maxAngle={360}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default PieChartScreen;
