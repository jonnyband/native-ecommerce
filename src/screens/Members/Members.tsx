import React, { useState } from 'react';
import { Text, View, Image, Linking } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { styles } from './styles'

export const Members = () => {
   
    const [listMemebers] = useState([{
    name: 'João Mario',
    photo: 'https://avatars.githubusercontent.com/u/22997655?v=4',
    description: "Residente do Serratec",
    linkedin: 'https://www.linkedin.com/feed/',
    github: 'https://github.com/jonnyband'
  }, {
    name: 'Jefferson Souza',
    photo: 'https://avatars.githubusercontent.com/u/97715277?v=4',
    description: "Residente do Serratec",
    linkedin: 'https://www.linkedin.com/in/jefferson-de-souza-/',
    github: 'https://github.com/dev-jefferson-souza'
  }, {
    name: 'Bruna Cabral',
    photo: 'https://avatars.githubusercontent.com/u/97639162?v=4',
    description: "Residente do Serratec",
    linkedin: 'https://www.linkedin.com/in/bruna-cabral-964aa2246/',
    github: 'https://github.com/brunakbral'
  }, {
    name: 'Nubia Martins',
    photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQHSAu64zPoeSQ/profile-displayphoto-shrink_200_200/0/1658198127856?e=1674691200&v=beta&t=QGxsFTBYlToODtXgM3zJc4i2Jfb_-Wb7QO2aZwNgFhk',
    description: "Residente do Serratec",
    linkedin: 'https://www.linkedin.com/in/nubia-martins-7a58a4231/',
    github: 'https://github.com/nubiamneves'
  }, {
    name: 'Paulo Henrique',
    photo: 'https://avatars.githubusercontent.com/u/111092088?v=4',
    description: "Residente do Serratec",
    linkedin: 'https://www.linkedin.com/in/paulo-henrique-mayworm-85b972181/',
    github: 'https://github.com/PauloMayworm'
  },  
  ]);

    return(
        <View style={styles.container}>
           

            {listMemebers.map((member) => (
                <View style={styles.cardMember}>
                    <View style={styles.nameAndIcon}>
                        <Image style={styles.iconMember} source={{uri: member.photo}}/>
                        <View>
                            <Text style={styles.nameText}>{member.name}</Text>
                            <Text style={styles.descriptionText}>{member.description}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxSocialIcons}>
                            <AntDesign
                                name='linkedin-square'
                                color={'#374966'}
                                size={32}
                                onPress={() => {Linking.openURL(member.linkedin)}}
                            />        
                            <AntDesign
                                name='github'
                                color={'#374966'}
                                size={32}
                                onPress={() => {Linking.openURL(member.github)}}
                            />                        
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}