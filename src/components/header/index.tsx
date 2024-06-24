import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';
import Checkbox from 'expo-checkbox';

interface HeaderProps {
    
    applyFilter: (text: string) => void
    onFilterChange: (text: string) =>void
}

function Header ({ applyFilter,}: HeaderProps) {
    const [filter, setFilter] = useState<string>('');
    const [inputFilter, setInputFilter ] =useState('')

    const handleFilter = (text: string) => {
        setFilter(text);
       
    };

    const handleApplyFilter= () => {
        applyFilter(inputFilter)
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Top Games</Text>
            <TextInput 
                style={styles.input}
                placeholder='Filtre por nome'
                value={inputFilter}
                onChangeText={(value) => setInputFilter(value)}
                
            />
            <Button title='Filtrar' onPress={handleApplyFilter}></Button>
            
        </View>
    )
}

export default Header;