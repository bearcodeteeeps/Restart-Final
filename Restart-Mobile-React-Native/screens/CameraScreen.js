import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { Camera, Permissions } from 'expo';
import WaitAnimation from '../components/Waiting/WaitAnimation.js';

export default class CameraExample extends React.Component {
  static navigationOptions = {
    title: 'Camera'
  };

  constructor() {
    super();
    this.state = {
      photo: '',
      brand: '',
      item_type: '',
      recyclable: '',
      loading: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onPictureSaved = async photo => {
    const { navigate } = this.props.navigation;
    this.setState({ loading: true });

    const res = fetch('http://172.46.1.207:3000/pic', {
      method: 'POST',
      'content-type': 'application/octet-stream',
      body: photo.base64
    })
      .then(res => {
        const data = JSON.parse(res._bodyInit);
        this.setState({
          photo: data.url,
          brand: data.brand,
          item_type: data.item_type,
          recyclable: data.recycle_status,
          loading: false
        });
        navigate('Photo', { data: this.state });
      })
      .catch(err => {
        console.log('Err', err);
        this.setState({
          photo: '',
          brand: '',
          item_type: '',
          recyclable: '',
          loading: false
        });
      });
  };

  async snapPhoto() {
    this.setState({
      photo: '',
      brand: '',
      item_type: '',
      recyclable: ''
    });
    if (this.camera) {
      this.camera.takePictureAsync({
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true,
        onPictureSaved: this.onPictureSaved
      });
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (this.state.loading) {
      return <WaitAnimation />;
    } else if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera
            style={styles.container}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <Header
              centerComponent={{
                text: 'Snap one item at a time',
                style: { fontSize: 17, color: '#fff' }
              }}
              containerStyle={styles.headerContainer}
            />
            <View style={styles.cameraButton}>
              <TouchableOpacity
                style={styles.touchArea}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <View>
                  <Icon
                    onPress={this.snapPhoto.bind(this)}
                    raised
                    name="circle"
                    type="font-awesome"
                    color="transparent"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'black'
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  touchArea: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  cameraButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
