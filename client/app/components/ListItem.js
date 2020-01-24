import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';

const ListItem = ({title, quantity, units, price, image}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image style={styles.itemImage} source={image}></Image>
      <View style={styles.itemInfo}>
        <View style={styles.titleInfo}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.unboldText}>({quantity})</Text>
        </View>
        <View style={styles.titleInfo}>
          <Text style={styles.unboldText}>${price} / </Text>
          <Text style={styles.unboldText}>{units}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 26,
    marginVertical: 5,
  },

  itemImage: {
    height: 64,
    width: 67,
  },

  itemInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  titleInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  titleText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 17,
  },

  unboldText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    lineHeight: 17,
  },
});
