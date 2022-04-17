import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import SimplePaginationDot from '../SimplePaginationDot';

const {width: windowWidth} = Dimensions.get('window');

const data = [

        {
          key: '1',
          name: 'Viviero Vierdes Sachaca',
          uri: 'https://oechsle.vteximg.com.br/arquivos/ids/2674516-1000-1000/image-84833dd382084bd6b19b19a9b7a267cf.jpg?v=637494715947670000'
        },
        {
          key: '2',
          name: 'Etéreo Garden',
          uri: 'https://lh5.googleusercontent.com/p/AF1QipPhRKT0_sFiJui6UhKhU-XSBPH5lrelc7lvJ4yW=w112-h112-n-k-no',
        },
    
        {
          key: '3',
          name: 'Deco Plantas',
          uri: 'https://promart.vteximg.com.br/arquivos/ids/4870888-1000-1000/image-cbbe981f74564f12851a09f9bb77a735.jpg?v=637828710453330000'
        },
        {
          key: '4',
          name: 'Vviero Santa Rosa',
          uri: 'https://i.pinimg.com/originals/d6/92/b3/d692b39d98b41c102fa9c0eed5081dbc.jpg',
        },
        {
          key: '5',
          name: 'El palomar',
          uri: 'https://cdn.pixabay.com/photo/2017/08/07/23/55/business-2609352_960_720.jpg',
        },
    
];

const INITIAL_INDEX = 0;
export default function TiendaCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
         
        </ImageBackground>

        
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={windowWidth * 0.5}
        separatorWidth={0}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  carousel: {
    backgroundColor: 'white',
    aspectRatio: 1.5,
    flexGrow: 0,
    marginTop:'-6px',
    paddingStart:'10px',
    paddingEnd:'10px',    
  },
  item: {
    borderWidth: 2,
    paddingTop:'10px',
    backgroundColor: '#C4F8CF',
    flex: 2,
    borderRadius: 30,
    alignContent:'center',
    elevation: 3,
    borderWidth: 1,
    borderColor:'#38B252',
    justifyContent: 'center',
    alignItems: 'center',
    width:'250px'

  },
  imageBackground: {
    
    width:'80px',
    height:'80px',
    justifyContent: "center",    
    backgroundColor: '#C4F8CF',
    borderWidth: 1,
    borderColor: '#0FA958',
  },
  lowerContainer: {
    flex: 2,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center'
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});