import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './JobCard.styles';
function JobCard({job,onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>{job.name}</Text>
          <Text style={styles.company}>{job.company.name}</Text>
          {job.locations &&
            job.locations.map((loc, index) => (
              <Text style={styles.loc} key={index}>
                {loc.name}
              </Text>
            ))}
        </View>
        {job.levels &&
          job.levels.map((lvl, index) => (
            <Text style={styles.lvl} key={index}>
              {lvl.name}
            </Text>
          ))}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobCard;
