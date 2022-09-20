import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Home({navigation}) {

  const [api, setApi] = useState([])



  //fetching data
  const getData = ()=>{
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=dcbe7f0e7c5a4c729243fd82c8349617')
    .then((response) => response.json())
    .then((data) =>{
      console.log(data.articles);
      setApi(data.articles.splice(90))
     
    })
    
  }
  //useeffect
  useEffect(()=>{
    getData()
  },[])

 console.log('from aapi,',api)
  


  return (

  <ScrollView>
        <View>
      {
        
        api.map((res)=>(
          <>
             <Pressable onPress={()=>navigation.navigate('details',{
                
             

             })}>
             <View style={{borderWidth:1,width:'80%',alignSelf:'center',height:240,marginTop:20,borderRadius:15,padding:20}}>
           <Text>{res.title}</Text>
            </View>
             </Pressable>
  
          </>
        ))
      }
       
    </View>
  </ScrollView>
   
  )
}


