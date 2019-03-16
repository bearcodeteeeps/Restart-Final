import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
  VictoryAxis,
  VictoryStack
} from 'victory-native';
import IconBadge from 'react-native-icon-badge';
import MainHeader from '../components/MainHeader';
import headerImage from '../assets/images/gradient_header_restart.png';
import step1 from '../assets/images/Restart_Home_step1.png';
import step2 from '../assets/images/Restart_Home_step2.png';
import step3 from '../assets/images/Restart_Home_step3.png';

//Graph
const data2012 = [
  { days: 1, volume: 3 },
  { days: 2, volume: 5 },
  { days: 3, volume: 4 }
];

const data2013 = [
  { days: 1, volume: 5 },
  { days: 2, volume: 6 },
  { days: 3, volume: 7 }
];

const data2014 = [
  { days: 1, volume: 3 },
  { days: 2, volume: 2 },
  { days: 3, volume: 4 }
];

const data2015 = [
  { days: 1, volume: 2 },
  { days: 2, volume: 5 },
  { days: 3, volume: 2 }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;
    const data = this.props.navigation.getParam('data');
    return (
      <View style={styles.container}>
        <ImageBackground
          source={headerImage}
          style={styles.backgroundContainer}
        >
          <MainHeader />
        </ImageBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Card containerStyle={{ width: 250, padding: 12 }}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Text style={styles.cardHeaderText}>Earn</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 1 }}>
                  Get Points and coupons on recycling when you upload photos of
                  your recycling
                </Text>

                <View style={{ flexDirection: 'column' }}>
                  <View style={{ paddingLeft: 10, alignSelf: 'flex-start' }}>
                    <Image source={step1} style={{ width: 60, height: 60 }} />
                  </View>
                  <Button
                    title="Camera"
                    onPress={() => navigate('Camera')}
                    buttonStyle={{
                      backgroundColor: '#01A388',
                      borderRadius: 20,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginTop: 10
                    }}
                  />
                </View>
              </View>
            </View>
            <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
              Process for Points
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Image source={step1} style={{ width: 50, height: 50 }} />
                <Text style={{ fontSize: 12 }}>Take Photo</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Image source={step2} style={{ width: 45, height: 45 }} />
                <Text style={{ fontSize: 12 }}>Confirm Details</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Image source={step3} style={{ width: 45, height: 45 }} />
                <Text style={{ fontSize: 12 }}>Earn</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={{ width: 250, padding: 12 }}>
            <View style={styles.header}>
              <Text style={styles.cardHeaderText}>Rewards</Text>
            </View>
            <View style={styles.rewardContent}>
              <IconBadge
                MainElement={
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: 25,
                      height: 20,
                      margin: 3
                    }}
                  />
                }
                BadgeElement={
                  <Text style={{ color: '#FFFFFF' }}>
                    {data.coupons.length}
                  </Text>
                }
                IconBadgeStyle={{
                  width: 23,
                  height: 23,
                  backgroundColor: '#FF6137'
                }}
              />
              <Text>Coupons are waiting for you!</Text>
            </View>
            <Button
              title="Redeem"
              onPress={() => navigate('Rewards', { data: data })}
              buttonStyle={{
                backgroundColor: '#01A388',
                borderRadius: 20,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 10
              }}
            />
          </Card>
          <Card containerStyle={{ width: 250 }}>
            <VictoryChart
              width={250}
              height={250}
              theme={VictoryTheme.colors}
              padding={{ top: 100, right: 50, left: 50, bottom: 25 }}
              domainPadding={{ x: 50, y: 100 }}
            >
              <VictoryLegend
                x={20}
                y={0}
                title="Your Recycling Usage"
                centerTitle
                titleOrientation="top"
                orientation="horizontal"
                itemsPerRow={2}
                gutter={20}
                style={{ border: { stroke: 'black' }, title: { fontSize: 15 } }}
                data={[
                  {
                    name: 'Recycle',
                    symbol: { fill: '#BEEA9F', type: 'square' }
                  },
                  {
                    name: 'Compost',
                    symbol: { fill: '#79BD8F', type: 'square' }
                  },
                  {
                    name: 'Hazardous',
                    symbol: { fill: '#01A388', type: 'square' }
                  },
                  {
                    name: 'Landfill',
                    symbol: { fill: '#FEFF9D', type: 'square' }
                  }
                ]}
              />
              <VictoryAxis
                tickValues={[1, 2, 3]}
                tickFormat={['JAN', 'FEB', 'MAR']}
              />
              <VictoryAxis dependentAxis />
              <VictoryStack
                colorScale={['#FEFF9D', '#BEEA9F', '#79BD8F', '#01A388']}
                style={{
                  data: { width: 30 },
                  labels: { padding: -20 }
                }}
              >
                <VictoryBar data={data2012} x="days" y="volume" />
                <VictoryBar data={data2013} x="days" y="volume" />
                <VictoryBar data={data2014} x="days" y="volume" />
                <VictoryBar data={data2015} x="days" y="volume" />
              </VictoryStack>
            </VictoryChart>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 2,
    zIndex: 1
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  backgroundContainer: {
    flex: 0.3,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 5
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  cardHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  rewardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
