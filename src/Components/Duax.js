import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Duax extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Halaman Duax</Text>
                <Button title="Ke Hal Duax... lagi" onPress={() => this.props.navigation.navigate('HalDuax')} />
                <Button title="Kembali" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

export default Duax;
