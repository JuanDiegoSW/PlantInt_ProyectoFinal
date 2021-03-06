import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Caveat_600SemiBold, Caveat_700Bold } from "@expo-google-fonts/caveat";


const Logo = ({ main }) => {
 
  
    return (
      <View style={{ flexDirection: "row", margin: 0 }}>
        {
          <>
            <View>
              <Text style={styles.text}>PlantIn</Text>
            </View>

            <TouchableOpacity>
              <Ionicons name={"camera-outline"} size={40} style={styles.icons}>
                
              </Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name={"search-outline"} size={40} style={styles.iconSearch}>
                
              </Ionicons>
            </TouchableOpacity>
          </>
        }
      </View>
    );
  
};
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    flex: 0.6,
    color: "#067bc1",
    fontWeight: "bold",
  },
  icons:{
      paddingStart:'250px',
      paddingTop:'5px',
      color:'#067bc1'
  },
  iconSearch:{
    paddingStart:'10px',
    paddingTop:'5px',
    display:'flex',
    color:'#067bc1'
}
});
export default Logo;
