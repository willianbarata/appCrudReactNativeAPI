import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositorio, deletarRepositorio } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function salvar(){
        const retornou = await salvarRepositorio(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id, 
        )

        if(retornou === 'sucesso'){
            Alert.alert('Alteração efetuada com sucesso');
            navigation.goBack();
        }else{
            Alert.alert('Ocorreu um erro na alteração');
            navigation.goBack();
        }
    }

    async function deletar(){
        const retornou = await deletarRepositorio(      
                  route.params.item.id )

        if(retornou === 'sucesso'){
            Alert.alert('Deleção efetuada com sucesso');
            navigation.goBack();
        }else{
            Alert.alert('Ocorreu um erro na deleção');
            navigation.goBack();
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={deletar}
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
