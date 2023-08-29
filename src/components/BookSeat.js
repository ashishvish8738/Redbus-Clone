import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const BookMySeat = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <View
            style={{
                width:'60%',
                height:'70%',
                borderWidth:1,
                borderRadius:5,
                borderColor:'#8e8e8e',
            }}>
            <Image
            source={require('../src/images/steering.png')}
            style={{Width:24, height:24, alignSelf:'flex-end',margin:10,opacity:0.5,}}/>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:30}}>
                <View> 
                    <FlatList data={row1}
                    numColumns={2} renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={{margin:7}}>
                            {item.empty==false && item.selected==true?(<Image source={require('../src/images/seat2.png')} style={width:24,height:24,tintColor:'green'/>):item.empty==true && item.selected==false ?(<Image source={require('../src/images/seat.png')} style={width:24,height:24/>):item.empty==false && item.selected==false?(<Image source={require('../src/images/seat2.png')} style={width:24,height:24,tintColor:'#8e8e8e'/>
                                ):null}/>
                            </TouchableOpacity>
                         );
                    }}/>
                </View>
                <View>
                    <FlatList data={row2}
                    numColumns={2} renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={{margin:7}}>
                            {item.empty==false && item.selected==true?(<Image source={require('../src/images/seat2.png')} style={width:24,height:24,tintColor:'green'/>):item.empty==true && item.selected==false ?(<Image source={require('../src/images/seat.png')} style={width:24,height:24/>):item.empty==false && item.selected==false?(<Image source={require('../src/images/seat2.png')} style={width:24,height:24,tintColor:'#8e8e8e'/>
                                ):null}/>
                            </TouchableOpacity>
                         );
                    }}/>
                </View>
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <FlatList data={row3}
                    horizontal renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={{margin:7}}>
                            {item.empty==false && item.selected==true?(<Image source={require('../src/images/seat2.png')} style={width:24,height:24,tintColor:'green'/>):item.empty==true && item.selected==false ?(<Image source={require('../src/images/seat.png')} style={width:24,height:24/>):item.empty==false && item.selected==false?(<Image source={require('../src/images/seat2.png')} style={width:24,height:24,tintColor:'#8e8e8e'/>
                                ):null}/>
                            </TouchableOpacity>
                         );
                    }}/>
                </View>
            </View>
            </View>
        </View>
    );
};
export default BookMySeat;