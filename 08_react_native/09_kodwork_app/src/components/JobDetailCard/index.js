import React from 'react';
import {
  Dimensions,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './JobDetailCard.styles';
import RenderHTML from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../redux/favoritesSlice';
function JobDetailCard({job}) {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const exists = favorites.some(fav => fav.id === job.id) || null;
  const toggleFavorite = job => {
    if (exists) {
      dispatch(removeFavorite(job));
    } else {
      dispatch(addFavorite(job));
    }
  };
 
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job.name}</Text>
      <View style={styles.loc_container}>
        <Text style={styles.loc_title}>Locations:</Text>
        <View style={styles.loc_inner}>
          {job.locations &&
            job.locations.map((loc, index) => (
              <Text key={index}>{loc.name}</Text>
            ))}
        </View>
      </View>
      <View style={styles.lvl_container}>
        <Text style={styles.lvl_title}>Levels: </Text>
        <View style={styles.lvl_inner}>
          {job.levels &&
            job.levels.map((lvl, index) => <Text key={index}>{lvl.name}</Text>)}
        </View>
      </View>
      <RenderHTML
        contentWidth={Dimensions.get('window').width}
        source={{html: job.contents}}
      />
      <View style={styles.buttons_container}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(job.refs.landing_page);
          }}
          style={styles.button}>
          <Text style={styles.button_title}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title={exists ? 'Remove favorite' : 'Favorite'}
          onPress={() => toggleFavorite(job)}
          style={styles.button}>
          {exists ? (
            <Text style={styles.button_title}>Remove favorite</Text>
          ) : (
            <Text style={styles.button_title}>Favorite</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default JobDetailCard;
