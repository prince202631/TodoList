import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
  Star,
  Checkbox,
  Pluesicon,
  Activecheckbox,
  Activestar,
  Clock,
  Star2,
} from './src/assets/Svg';
import Modal from 'react-native-modal';



export default function App2({ navigation }) {

  const [complettask, setCompletTask] = useState('');
  const [favoritetask, setFavoriteTask] = useState('');
  const [data, setData] = useState(DATA);
  const [isModalVisible, setModalVisible] = useState(false);
  const [childData, setChildData] = useState('');
  state = {
    index: 1,
    routes: [
      { key: 'first' },
      { key: 'second', title: 'My Tasks' },
      { key: 'third', title: 'Completed Tasks' },
    ],
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const exampleFunc = (childData) => {
  setData([...data, {id:(data.length) + 1, title: childData, isFavouritetask: true, isCheckbox: true}]);
    setModalVisible(false);
  };
  
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute favoritetask={favoritetask} setFavoriteTask={setFavoriteTask} />;
      case 'second':
        return <SecondRoute data={data} setData={setData} favoritetask={favoritetask} setFavoriteTask={setFavoriteTask} complettask={complettask} setCompletTask={setCompletTask} />;
      default:
        return <ThirdRoute complettask={complettask} setCompletTask={setCompletTask} />;
    }
  };
  console.log("datad", data.length)
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 0.3 }}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require('./src/assets/Backimage.jpg')}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./src/assets/profile.jpg')}
              style={{ marginHorizontal: 24, marginTop: '14%', width: 34, height: 34, borderRadius: 4 }}
            />
            <View style={{ marginTop: '14%' }}>
              <Text style={{ fontSize: 12, color: '#303030' }}>Good day</Text>
              <Text style={{ fontSize: 14, color: '#303030', fontWeight: 500 }}>
                Bernice Thompson!
              </Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '25%',
                marginTop: '14%',
                marginLeft: '25%',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 67 67">
                <Path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M42.5 35.5c.022-4.117-2.532-6.53-6.032-7.367-3.07-.734-6.272-.257-8.505 2.84C24.988 35.098 25.398 38.85 29.5 42c3.556 2.73 8.797 1.858 11.473-2.019.839-1.214 1.36-2.648 2.027-3.981"
                />
                <Path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={5}
                  d="M24.5 14c-3.343.138-4.867 2.868-6.416 5.06-2.797 3.956-4.744 8.536-7.691 12.357-2.376 3.08-1.768 6.007-.279 8.515 2.827 4.759 6.307 9.113 8.964 14.026 1.233 2.28 3.463 3.31 6.427 3.13 5.148-.315 10.354-.408 15.487.007 4.616.374 7.708-1.45 9.991-5.106 2.573-4.12 4.636-8.626 7.642-12.39 2.255-2.823 1.795-5.584.238-7.487-3.377-4.128-5.807-8.843-8.672-13.236-2.438-3.74-5.031-5.085-9.193-4.926-5.325.205-10.665.05-15.998.05"
                />
              </Svg>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              borderColor: '#E3DACF',
              height: 1,
              borderWidth: 1,
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginTop: '5%', marginLeft: '5%' }}>
              <Text style={{ fontSize: 12, color: '#303030' }}>
                Today’s Task
              </Text>
              <Text style={{ fontSize: 18, color: '#303030', fontWeight: 600 }}>
                {data.length}/3 completed
              </Text>
            </View>
            <View style={{ marginTop: '5%', marginLeft: '22%' }}>
              <Text style={{ fontSize: 12, color: '#303030' }}>
                Total Task to be completed
              </Text>
              <Text style={{ fontSize: 18, color: '#303030', fontWeight: 600 }}>
              {complettask.length } {complettask.length >1 ?"tasks":"task"} 

              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <TabView
          navigationState={state}
          onIndexChange={(index) => ({ index })}
          initialLayout={{}}
          renderTabBar={renderTabBar}
          renderScene={renderScene}
        />
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#FFE4E4',
            borderRadius: 9,
            marginLeft: '80%',
            padding: 9,
            bottom: 50
          }}>
          <Pluesicon />
        </View>
      </TouchableOpacity>


      <Modal isVisible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        backdropColor="black">
        <View
          style={{
            flex: 0.3,
            marginHorizontal: '-5%',
            // height: '50%',
            borderColor: '#FFFFFF',
            borderWidth: 1,
            borderRadius: 16,
            backgroundColor: '#FFFFFF',
            //marginTop: '100%',
            top: '40%'
          }}>
          <View>
            <TextInput
              style={{ marginLeft: 16, marginTop: 16, color: 'black' }}
              placeholder="New Task..."
              placeholderTextColor="#ADADAD"
              onChangeText={(e) => {
                setChildData(e);
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity >
              <View
                style={{
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                  marginTop: 20,
                }}>
                <Star />
              </View>
            </TouchableOpacity>
            <TouchableOpacity  >
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 30,
                  marginLeft: 15,
                }}>
                <Clock />
              </View>
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                onPress={() => {
                  toggleModal();
                  exampleFunc(childData);
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#B13D3D',
                    marginLeft: '65%',
                    marginTop: 30,
                  }}>
                  ADD Task
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>


  );
}

const DATA = [
  { id: 1, title: 'Buy eggs and bread for breakfast', isFavouritetask: true, isCheckbox: true },
  { id: 2, title: 'Pay college tuition fee', isFavouritetask: true, isCheckbox: true },
  { id: 3, title: 'Plan to book the party hall for birthday', isFavouritetask: true, isCheckbox: true },
  { id: 4, title: 'Visit granny before Christmas', isFavouritetask: true, isCheckbox: true },
  { id: 5, title: 'Book flight tickets for San Diago before the offer ends', isFavouritetask: true, isCheckbox  : true },

];

function renderTabBar(props) {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#B13D3D' }}
      style={{
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 16,
        width: '100%',
        borderTopLeftRadius: 16,
      }}
      labelStyle={{ color: 'black', fontSize: '10%' }}
      renderIcon={(state) =>
        state.route.key === 'first' ? (
          <View style={{ width: 20, height: 20, }}>
            <Star2 />
          </View>
        ) : (
          ''
        )
      }
      tabStyle={{ width: 'auto' }}
      renderLabel={({ route, color }) => (
        <Text style={{ color: '#000000', marginHorizontal: 30 }}>{route.title}</Text>
      )}
    />
  );
}

function FirstRoute(props) {
  const [firstroutecheckboxes, setFirstRouteCheckBoxes] = useState([]);
  const [firstroutestars, setFirstRouteStars] = useState([]);

  useEffect(() => {
    if (Array.isArray(props.favoritetask)) {
      setFirstRouteCheckBoxes(props.favoritetask.map(() => false));
      setFirstRouteStars(props.favoritetask.map(() => true));
    }
  }, [props.favoritetask]);

  const firsttoggleCheckbox = (index) => {
    setFirstRouteCheckBoxes((checkboxes) =>
      checkboxes.map((state, i) => (i === index ? !state : state))
    );
  };

  const firsttoggleStar = (index) => {
    setFirstRouteStars((stars) =>
      stars.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <FlatList
      data={props.favoritetask}
      renderItem={({ item, index }) => (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '5%',
            }}
          >
            <View style={{ width: 28, height: 28 }}>
              <TouchableOpacity onPress={() => firsttoggleCheckbox(index)}>
                {firstroutecheckboxes[index] ? <Activecheckbox /> : <Checkbox />}
              </TouchableOpacity>
            </View>
            <View style={{ width: '82%' }}>
              <TouchableOpacity>
                <Text style={{ color: '#000000' }}>{item}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: 28, height: 28 }}>
              <TouchableOpacity onPress={() => firsttoggleStar(index)}>
                {firstroutestars[index] ? <Activestar /> : <Star />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}
function SecondRoute(props) {
  const [previoustask, setPreviousTask] = useState([]);
  const [checkbox, setCheckBox] = useState(Array(props.data.length).fill(true));
  const [star, setStar] = useState(Array(props.data.length).fill(true));

  const toggleCheckbox = (index) => {
    setCheckBox((checkbox) =>
      checkbox.map((state, i) => (i === index ? !state : state))
    );
  };

  const togglestar = (index) => {
    setStar((star) => star.map((state, j) => (j === index ? !state : state)));
  };

  const handleCheckboxPress = (index, item) => {
    // Update completed tasks and previous tasks
    props.setCompletTask([
      ...props.complettask,
      {
        id: item.id,
        title: item.title,
        isFavouritestar: item.isFavouritestar,
        isCheckedbox: item.isCheckedbox,
      },
    ]);
    setPreviousTask([...previoustask, item.title]);

    // Remove the item from the data list
    const newData = props.data.filter((_, i) => i !== index);
    props.setData(newData);


  };

  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '5%',
            }}>
            <View style={{ width: 28, height: 28 }}>
              <TouchableOpacity
                onPress={() => handleCheckboxPress(index, item)}>
                {checkbox[index] ? <Checkbox /> : <Activecheckbox />}
              </TouchableOpacity>
            </View>
            <View style={{ width: '82%' }}>
              <TouchableOpacity>
                <Text style={{ color: '#000000' }}>{item.title}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: 28, height: 28 }}>
              <TouchableOpacity
                onPress={() => {
                  togglestar(index);
                  props.setFavoriteTask([...props.favoritetask, item.title]);
                }}>
                {star[index] ? <Star /> : <Activestar />}
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

function ThirdRoute(props) {
  console.log('WWW', props.complettask);
  const [thirdroutecheckbox, setThirdRouteCheckBox] = useState([]);
  const [thirdroutestar, setThirdRouteStar] = useState([]);

  useEffect(() =>{
    if (Array.isArray(props.complettask)){
      setThirdRouteCheckBox(props.complettask.map(()=> true));
      setThirdRouteStar(props.complettask.map(()=> false));
    }
  },[props.complettask]);

  const thirdtoggleCheckbox = (index) =>{
    setThirdRouteCheckBox((checkboxes) => 
    checkboxes.map((state, i) => (i === index ? !state : state))
    );
  };

  const thirdtoggleStar = (index) =>{
    setThirdRouteStar((stars) => 
    stars.map((state, j) => (j === index ? !state : state))
    );
  };

  return (
    <FlatList
      data={props.complettask}
      renderItem={({ item , index}) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <View style={{ width: 28, height: 28 }}>
            <TouchableOpacity
              onPress={() => thirdtoggleCheckbox(index)}>
              {thirdroutecheckbox[index] ?  <Activecheckbox /> : <Checkbox />}
            </TouchableOpacity>
          </View>
          <View style={{ width: '82%' }}>
            <TouchableOpacity>
              <Text style={{ color: '#000000' }}>{item.title}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 28, height: 28 }}>
            <TouchableOpacity
              onPress={() => thirdtoggleStar(index)}>
              {thirdroutestar[index] ?  <Activestar /> : <Star />}
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}
