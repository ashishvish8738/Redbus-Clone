import { View, Text } from 'react-native'
import React from 'react'

const BookMySeat = () => {
    const [row1, setRow1] = useState([
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
    ]);
    const [row2, setRow2] = useState([
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
    ])
    const [row3, setRow3]=useState([
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
        {empty: true, selected:false},
    ]);
     const onSelectRow1={index}=>{
        let tempRow=[];
        tempRow=row1;
        tempRow.map((item,ind)=>{
            if(index==ind){
                if(item.selected==true){
                    item.selected=false;
                    item.empty=true;
                }else{
                    item.selected=true;
                    item.empty=false;
                }
            }
        })
     }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{width:'70%',height:'70%',borderWidth:1,borderRadius:5,borderColor:'#8e8e8e'}}>
    <Image source={(require('../src/images/steering.png'))}
      
    </View>
  )
}

export default BookMySeat;