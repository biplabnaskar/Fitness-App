// import { View, Text, ScrollView} from "react-native";
// import React from "react";
// import { router, useLocalSearchParams } from "expo-router";
// import { Image } from "expo-image";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { TouchableOpacity } from "react-native";
// import Anticons from 'react-native-vector-icons/AntDesign';


// export default function exerciseDetails(){
//      const item = useLocalSearchParams();
//      console.log('got item: ',item);
//     return(
//         <View className="pt-20 flex flex-1 ">
//             <View >
//                 <Image className="shadow-md bg-neutral-200 rounded-b-[40px]"
//                    source={{uri: item.gifUrl}}
//                    contentFit='cover'
//                    style={{width: wp(100), height: wp(100)}}
                    
//                 />

//                 <TouchableOpacity
//                   onPress={()=> router.back()}
//                   className="mx-2 absolute rounded-full mt-2 right-0">
//                     <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e"/>
//                   </TouchableOpacity>

//                   {/* details */}

//                   <ScrollView className="mx-4 spacy-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
//                     <Text 
//                          style={{fontSize: hp(3.5)}}
//                          className="font-semibold text-neutral-800 tracking-wide"
//                     >
//                         {item.name}
//                     </Text>

//                     <Text 
//                          style={{fontSize: hp(2)}}
//                          className="text-neutral-700 tracking-wide"
//                     >
//                         Equipment <Text className="font-bold text-neutral-800">
//                             {item?.equipment}
//                         </Text>
//                     </Text>
//                     <Text 
//                          style={{fontSize: hp(2)}}
//                          className="text-neutral-700 tracking-wide"
//                     >
//                         Secondary Muscles <Text className="font-bold text-neutral-800">
//                             {item?.secondaryMuscles}
//                         </Text>
//                     </Text>
//                     <Text 
//                          style={{fontSize: hp(2)}}
//                          className="text-neutral-700 tracking-wide"
//                     >
//                         Target <Text className="font-bold text-neutral-800">
//                             {item?.target}
//                         </Text>
//                     </Text>

//                     <Text 
//                          style={{fontSize: hp(3)}}
//                          className="font-semibold text-neutral-800 tracking-wide"
//                     >
//                         Instructions
//                     </Text>

//                     {
//                         item.instructions.split(',').map((instructions, index)=>{
//                             return(
//                                 <Text
//                                  key={instructions}
//                                  style={{fontSize: hp(1.7)}}
//                                  className ="text-neutral-800"
//                                 >
//                                     {instructions}
//                                 </Text>
//                             )
//                         })
//                     }
//                   </ScrollView>
                  
//             </View>
//         </View>
//     )
// }

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from "react-native";
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  console.log('got item: ', item);

  return (
    <View style={{ flex: 1, paddingTop: hp(10) }}>
      <View style={{ flex: 1 }}>
        <Image
          className="shadow-md bg-neutral-200 rounded-b-[40px]"
          source={{ uri: item.gifUrl }}
          contentFit='cover'
          style={{ width: wp(100), height: wp(100) }}
        />

        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            backgroundColor: 'white',
            borderRadius: hp(2.5),
            padding: 5
          }}
        >
          <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
        </TouchableOpacity>

        <ScrollView
          style={{ flex: 1, marginHorizontal: 16, marginTop: 8 }}
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        >
          <Animated.Text
            entering={FadeInDown.duration(300).springify()}
            style={{
              fontSize: hp(3.5),
              fontWeight: 'bold',
              color: '#4B5563',
              marginBottom: 10
            }}
          >
            {item.name}
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(100).duration(300).springify()}
            style={{
              fontSize: hp(2),
              color: '#6B7280',
              marginBottom: 8
            }}
          >
            Equipment: <Text style={{ fontWeight: 'bold', color: '#374151' }}>
              {item?.equipment}
            </Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(200).duration(300).springify()}
            style={{
              fontSize: hp(2),
              color: '#6B7280',
              marginBottom: 8
            }}
          >
            Secondary Muscles: <Text style={{ fontWeight: 'bold', color: '#374151' }}>
              {item?.secondaryMuscles}
            </Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(300).duration(300).springify()}
            style={{
              fontSize: hp(2),
              color: '#6B7280',
              marginBottom: 8
            }}
          >
            Target: <Text style={{ fontWeight: 'bold', color: '#374151' }}>
              {item?.target}
            </Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(400).duration(300).springify()}
            style={{
              fontSize: hp(3),
              fontWeight: 'bold',
              color: '#4B5563',
              marginBottom: 10
            }}
          >
            Instructions
          </Animated.Text>

          {item.instructions.split(',').map((instruction, index) => (
            <Animated.Text
            entering={FadeInDown.delay((index+6)*100).duration(300).springify()}
              key={index}
              style={{
                fontSize: hp(1.7),
                color: '#374151',
                marginBottom: 5
              }}
            >
              {instruction}
            </Animated.Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
