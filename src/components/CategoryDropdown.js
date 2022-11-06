import * as React from 'react'
import {Text, View, AsyncStorage} from 'react-native'
import {Dropdown} from 'react-native-element-dropdown'
import axios from 'axios'
import tw from 'tailwind-react-native-classnames'

export default function CategoryDrop() {

    const [data, setData] = React.useState([]);
    const [dataLoading, setDataLoading] = React.useState(false);

    const getData = async() =>{
      try {
          const token = await AsyncStorage.getItem('token');
          if (token === null) {
              navigation.navigate("Login")
          }

          const config = {
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token
              },
          };

          setDataLoading(true);

          const res = await axios.get('https://api.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/Category', config);
          setData(res.data)
          setDataLoading(false)          
          
        } catch (error) {
          console.log(error);
          setDataLoading(false)
        }
      }
      
      React.useEffect(()=> {
        getData()
      },[data])
      const datas = data.map((item) => {
        return {label: item.name, value: item.name}
      })

    const [value, setValue] = React.useState(null);
    const [isFocus, setIsFocus] = React.useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
      }
      return null;
    };

    return (
      <View >
        {renderLabel()}
        <Dropdown  style={tw`w-full bg-gray-200 rounded pl-2 py-1 my-2 my-2 border-2 border-gray-300`}
          data={datas}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Category' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };
